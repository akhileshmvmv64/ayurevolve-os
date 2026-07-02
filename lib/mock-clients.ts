export type ClientStatus = "Active" | "Review" | "Pending" | "At Risk";

export interface ClientRecord {
  id: string;
  clientName: string;
  company: string;
  service: string;
  country: string;
  relationshipManager: string;
  status: ClientStatus;
  lastMeeting: string;
}

export const mockClients: ClientRecord[] = [
  {
    id: "CL-1001",
    clientName: "Ava Patel",
    company: "Northwind Labs",
    service: "Product Strategy",
    country: "USA",
    relationshipManager: "Mina Chen",
    status: "Active",
    lastMeeting: "2026-06-24",
  },
  {
    id: "CL-1002",
    clientName: "Marcus Lee",
    company: "Helio Systems",
    service: "AI Automation",
    country: "Singapore",
    relationshipManager: "Jordan Alvarez",
    status: "Review",
    lastMeeting: "2026-06-22",
  },
  {
    id: "CL-1003",
    clientName: "Sofia Alvarez",
    company: "Crest Digital",
    service: "Data Platform",
    country: "Spain",
    relationshipManager: "Dylan Brooks",
    status: "Active",
    lastMeeting: "2026-06-20",
  },
  {
    id: "CL-1004",
    clientName: "Daniel Kim",
    company: "Summit Health",
    service: "Cloud Migration",
    country: "Canada",
    relationshipManager: "Riya Shah",
    status: "Pending",
    lastMeeting: "2026-06-18",
  },
  {
    id: "CL-1005",
    clientName: "Nadia Rahman",
    company: "Brightlane",
    service: "Operations Consulting",
    country: "UK",
    relationshipManager: "Owen Grant",
    status: "At Risk",
    lastMeeting: "2026-06-16",
  },
];
