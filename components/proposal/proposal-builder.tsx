"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockClient = {
  name: "Sohana Gupta",
  company: "Prayojan Health",
  country: "India",
  serviceCategory: "Digital Transformation",
};

const mockScope = "Deliver an end-to-end digital patient experience platform for hospitals and clinics.";
const mockDeliverables = "EHR integration, patient portal, reporting dashboard, and AI-based triage assistant.";
const mockTimeline = "Jun 2026 - Dec 2026";
const mockCommercials = "Fixed price: $2.5M with quarterly milestone payments.";
const mockTerms = "Net 30. Standard confidentiality and data protection terms apply.";

export function ProposalBuilder() {
  const [previewOpen, setPreviewOpen] = useState(true);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Client</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-400">Name</p>
                <p className="mt-1 text-base font-semibold text-white">{mockClient.name}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Company</p>
                <p className="mt-1 text-base font-semibold text-white">{mockClient.company}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Country</p>
                <p className="mt-1 text-base font-semibold text-white">{mockClient.country}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Service</p>
                <p className="mt-1 text-base font-semibold text-white">{mockClient.serviceCategory}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">Digital transformation services focused on patient experience and hospital operations.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Project scope</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">{mockScope}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Deliverables</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">{mockDeliverables}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">{mockTimeline}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Commercials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">{mockCommercials}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-300">{mockTerms}</p>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button type="button">Generate Proposal</Button>
          <Button type="button" variant="secondary">Save Draft</Button>
          <Button type="button" variant="ghost" onClick={() => setPreviewOpen((value) => !value)}>
            {previewOpen ? "Hide Preview" : "Show Preview"}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {previewOpen ? (
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Proposal preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Client</p>
                  <p className="text-white">{mockClient.name} / {mockClient.company}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Scope</p>
                  <p className="text-zinc-300">{mockScope}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Deliverables</p>
                  <p className="text-zinc-300">{mockDeliverables}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Timeline</p>
                  <p className="text-zinc-300">{mockTimeline}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Commercials</p>
                  <p className="text-zinc-300">{mockCommercials}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Terms</p>
                  <p className="text-zinc-300">{mockTerms}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Preview hidden</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">Toggle the preview panel to review the proposal summary before saving.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
