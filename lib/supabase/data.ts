import { createServerSupabaseClient } from "./server";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  created_at: string | null;
};

export type AppUser = {
  id: string;
  organization_id: string | null;
  name: string;
  email: string;
  role: string;
};

export type Company = {
  id: string;
  organization_id: string | null;
  company_name: string;
  industry: string | null;
  country: string | null;
  status: string;
};

export async function getOrganizations() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("organizations").select("*").order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as Organization[];
}

export async function getUserProfile() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data, error } = await supabase.from("users").select("*").eq("id", user.id).maybeSingle();

  if (error) {
    throw error;
  }

  return data as AppUser | null;
}

export async function getCompanies() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("companies").select("*").order("company_name", { ascending: true });

  if (error) {
    throw error;
  }

  return data as Company[];
}
