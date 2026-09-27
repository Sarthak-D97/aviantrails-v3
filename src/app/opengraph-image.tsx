import { seatText } from "@/components/soft/SeatBadge";
import { dateRange, seatStatus, seatsAsOnLabel, title, upcoming } from "@/content/tours";
import { ogSize, shareCard } from "./_og/card";

export const alt = "Avian Trails: Rajesh Panwar gets you the birds. Birding and bird photography tours across India and abroad.";
export const size = ogSize;
export const contentType = "image/png";
export const revalidate = 86400;

export default async function Image() {
  const next = upcoming()[0];
  const status = next ? seatStatus(next) : null;
  return shareCard({
    meta: next ? `${title(next)}, ${dateRange(next, "compact")}` : "Departures 2026–27",
    title: "Rajesh Panwar gets you the birds",
    lines: ["Small-group tours, India and abroad", "Two birding lodges in Kumaon"],
    badge: status ? { text: seatText(status), tone: status.code === "AVL" ? "seat" : status.code === "WL" ? "wait" : status.code === "ON TOUR" ? "on" : "gone", asOn: seatsAsOnLabel } : undefined,
    next: Boolean(next),
    photoSlug: "grandala-flock-lachen",
    photoPosition: "50% 40%",
  });
}
