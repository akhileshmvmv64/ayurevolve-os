export type ClientRecord = {
  id: string;
  name: string;
  company: string;
  country: string;
  service: string;
  email: string;
  phone: string;
  status: string;
};

export const mockClients: ClientRecord[] = [
  {
    id: "client-001",
    name: "Ava Patel",
    company: "Northwind Labs",
    country: "USA",
    service: "Product Strategy",
    email: "ava.patel@northwindlabs.com",
    phone: "+1 415 867 5309",
    status: "Active",
  },
  {
    id: "client-002",
    name: "Marcus Lee",
    company: "Helio Systems",
    country: "Singapore",
    service: "AI Automation",
    email: "marcus.lee@heliosystems.sg",
    phone: "+65 9123 4567",
    status: "Review",
  },
  {
    id: "client-003",
    name: "Sofia Alvarez",
    company: "Crest Digital",
    country: "Spain",
    service: "Data Platform",
    email: "sofia.alvarez@crestdigital.es",
    phone: "+34 612 345 678",
    status: "Active",
  },
  {
    id: "client-004",
    name: "Daniel Kim",
    company: "Summit Health",
    country: "Canada",
    service: "Cloud Migration",
    email: "daniel.kim@summithealth.ca",
    phone: "+1 604 555 0123",
    status: "Pending",
  },
  {
    id: "client-005",
    name: "Nadia Rahman",
    company: "Brightlane",
    country: "UK",
    service: "Operations Consulting",
    email: "nadia.rahman@brightlane.co.uk",
    phone: "+44 20 7946 0032",
    status: "Active",
  },
];
