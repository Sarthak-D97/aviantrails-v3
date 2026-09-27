import Link from "next/link";
import type { SeatStatus } from "@/content/tours";
import { SeatBadge } from "./SeatBadge";

// A departure as a specimen tag: the eyelet, the tour number, the name, the dates and the seats.
// The next departure wears the Sunbird flame.

export type TagRow = {
  no: number;
  slug: string;
  title: string;
  dates: string;
  days: number;
  status: SeatStatus;
  line?: string;
};

export function DepartureTag({ row, next = false, small = false, className = "" }: { row: TagRow; next?: boolean; small?: boolean; className?: string }) {
  return (
    <Link
      href={`/departures/${row.slug}`}
      draggable={false}
      className={`soft press group flex h-full flex-col text-ink no-underline hover:-rotate-[0.6deg] ${small ? "gap-1.5 p-4" : "gap-2 p-4 sm:gap-2.5 sm:p-5"} ${className}`}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="eyelet" aria-hidden="true" />
        {next ? <span className="rounded-full bg-sunbird px-2.5 py-0.5 text-[0.75rem] font-semibold text-on-sunbird">{small ? "Next" : (<><span className="sm:hidden">Next</span><span className="hidden sm:inline">Next departure</span></>)}</span> : null}
      </span>
      <span className="num mt-1 text-[0.85rem] text-ink-3">Tour {String(row.no).padStart(2, "0")}</span>
      <span className={`serif leading-[1.12] font-semibold ${small ? "text-[1.15rem]" : "text-[1.2rem] sm:text-[1.45rem]"}`}>{row.title}</span>
      <span className={`num text-ink-2 ${small ? "text-[0.85rem]" : "text-[0.88rem] sm:text-[0.95rem]"}`}>
        {row.dates} · {row.days} days
      </span>
      <SeatBadge status={row.status} className="mt-auto self-start" />
    </Link>
  );
}
