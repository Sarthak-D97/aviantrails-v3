import { seatText } from "@/components/soft/SeatBadge";
import { dateRange, days, seatStatus, seatsAsOnLabel, tourBySlug, tours, upcoming } from "@/content/tours";
import { ogSize, shareCard } from "../../_og/card";

export const size = ogSize;
export const contentType = "image/png";
export const revalidate = 86400;
export const alt = "An Avian Trails departure: the tour, its dates and seats, with one of Rajesh Panwar's photographs";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tourBySlug(slug) ?? tours[0];
  const status = seatStatus(t);
  return shareCard({
    meta: `Tour ${String(t.no).padStart(2, "0")} · ${t.kind}`,
    title: t.name,
    lines: [`${dateRange(t, "long")} · ${days(t)} days`, "Led by Rajesh Panwar"],
    badge: { text: seatText(status), tone: status.code === "AVL" ? "seat" : status.code === "WL" ? "wait" : status.code === "ON TOUR" ? "on" : "gone", asOn: seatsAsOnLabel },
    next: upcoming()[0]?.slug === t.slug,
    photoSlug: t.shots[0]?.slug ?? "grandala-flock-lachen",
  });
}
