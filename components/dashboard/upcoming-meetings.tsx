import { CalendarDays, Clock, Video, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meetings = [
  {
    title: "Executive Sync",
    time: "10:00 AM",
    date: "Today",
    attendees: 8,
    type: "video",
    duration: "30 min",
  },
  {
    title: "Board Preparation",
    time: "1:15 PM",
    date: "Today",
    attendees: 12,
    type: "video",
    duration: "1 hour",
  },
  {
    title: "Partner Review - Acme Corp",
    time: "4:00 PM",
    date: "Today",
    attendees: 4,
    type: "video",
    duration: "45 min",
  },
  {
    title: "Q2 Planning Session",
    time: "2:00 PM",
    date: "Tomorrow",
    attendees: 6,
    type: "in-person",
    duration: "1.5 hours",
  },
];

export function UpcomingMeetings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-cyan-400" />
          <CardTitle>Upcoming Meetings</CardTitle>
        </div>
        <Button variant="ghost" size="sm">
          Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {meetings.map((meeting, index) => (
            <div
              key={index}
              className="flex items-start justify-between rounded-lg border border-white/10 bg-zinc-950/50 p-3 hover:bg-zinc-950/70 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-white">{meeting.title}</h3>
                  {meeting.type === "video" && (
                    <Video className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                  )}
                  {meeting.type === "in-person" && (
                    <MapPin className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                  )}
                </div>
                <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{meeting.time}</span>
                  </div>
                  <span>•</span>
                  <span>{meeting.duration}</span>
                  <span>•</span>
                  <span>{meeting.attendees} attendees</span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{meeting.date}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-zinc-600 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
