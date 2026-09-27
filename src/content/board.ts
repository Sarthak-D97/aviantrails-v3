import type { JourneyOption } from "@/components/soft/ReservationForm";
import type { TagRow } from "@/components/soft/DepartureTag";
import { lodges } from "./lodges";
import { dateRange, days, network, seatStatus, title, type Tour, upcoming } from "./tours";

export function toTag(t: Tour, now = new Date()): TagRow {
  return { no: t.no, slug: t.slug, title: title(t), dates: dateRange(t, "compact"), days: days(t), status: seatStatus(t, now), line: t.line };
}

export const lines = network.map((l) => ({ id: l.id, name: l.name }));

export function journeyOptions(now = new Date()): JourneyOption[] {
  return [
    ...upcoming(now).map((t) => ({
      value: t.slug,
      label: `${title(t)} · ${dateRange(t, "compact").replace(" – ", "–")}`,
      full: `Tour ${String(t.no).padStart(2, "0")} · ${t.name} · ${dateRange(t, "long")}`,
    })),
    { value: "custom", label: "A custom tour", full: "A custom tour (my own dates and targets)" },
    ...lodges.map((l) => ({ value: `lodge-${l.slug}`, label: `Stay at ${l.name.replace(" Birding Lodge", "")}`, full: `A stay at ${l.name}` })),
  ];
}
