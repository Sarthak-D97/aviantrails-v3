import type { SeatStatus } from "@/content/tours";

// Seat state in plain words, pressed into the card. Colour is kept for state only.

export function seatText(s: SeatStatus) {
  switch (s.code) {
    case "AVL":
      return s.seats === 1 ? "1 seat left" : `${s.seats} seats left`;
    case "WL":
      return "Waitlist";
    case "ON TOUR":
      return "On tour now";
    case "DEPARTED":
      return "Departed";
  }
}

const tone: Record<SeatStatus["code"], string> = {
  AVL: "bg-seat-bg text-seat",
  WL: "bg-wait-bg text-wait",
  "ON TOUR": "bg-ink text-ground",
  DEPARTED: "bg-well text-gone",
};

export function SeatBadge({ status, className = "" }: { status: SeatStatus; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.82rem] leading-tight font-medium whitespace-nowrap shadow-[inset_1px_1px_3px_rgb(0_0_0/0.12)] ${tone[status.code]} ${className}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {seatText(status)}
    </span>
  );
}
