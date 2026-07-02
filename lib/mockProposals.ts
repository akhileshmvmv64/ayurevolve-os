export type ProposalRecord = {
  id: string;
  proposalNumber: string;
  client: string;
  service: string;
  scope: string;
  timeline: string;
  value: string;
  status: string;
};

export const mockProposals: ProposalRecord[] = [
  {
    id: "proposal-001",
    proposalNumber: "PROP-1024",
    client: "Northwind Labs",
    service: "Product Strategy",
    scope: "Define roadmap for new digital experience and platform adoption.",
    timeline: "Jun 2026 - Dec 2026",
    value: "$480K",
    status: "Pending",
  },
  {
    id: "proposal-002",
    proposalNumber: "PROP-1031",
    client: "Helio Systems",
    service: "AI Automation",
    scope: "Implement intelligent workflow automation across operations.",
    timeline: "Jul 2026 - Nov 2026",
    value: "$620K",
    status: "Sent",
  },
  {
    id: "proposal-003",
    proposalNumber: "PROP-1048",
    client: "Crest Digital",
    service: "Data Platform",
    scope: "Deploy centralized analytics and reporting infrastructure.",
    timeline: "Aug 2026 - Jan 2027",
    value: "$530K",
    status: "Review",
  },
  {
    id: "proposal-004",
    proposalNumber: "PROP-1055",
    client: "Summit Health",
    service: "Cloud Migration",
    scope: "Migrate clinical systems to a secure enterprise cloud.",
    timeline: "Sep 2026 - Feb 2027",
    value: "$710K",
    status: "Draft",
  },
  {
    id: "proposal-005",
    proposalNumber: "PROP-1062",
    client: "Brightlane",
    service: "Operations Consulting",
    scope: "Optimize service delivery and governance processes.",
    timeline: "Jul 2026 - Oct 2026",
    value: "$295K",
    status: "Approved",
  },
];
