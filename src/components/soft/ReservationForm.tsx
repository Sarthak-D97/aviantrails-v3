"use client";

import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { useId, useState } from "react";
import { site, whatsappLink } from "@/content/site";

/** `label` is what the menu shows (short enough for a phone); `full` goes into the message. */
export type JourneyOption = { value: string; label: string; full: string };

// Nothing is stored or posted. The form writes a tidy message and opens WhatsApp (or email).
// Fields are pressed into the panel; choices are pebbles that sink when chosen.

const field =
  "soft-in w-full min-h-13 rounded-2xl border-0 bg-well px-4 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-shadow focus:outline-2 focus:outline-offset-2 focus:outline-grandala aria-[invalid=true]:outline-2 aria-[invalid=true]:outline-alert";

function Field({ label, htmlFor, children, error, className = "" }: { label: string; htmlFor?: string; children: React.ReactNode; error?: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className="px-1 text-[0.92rem] font-medium text-ink-2">
        {label}
      </label>
      {children}
      {error ? (
        <p className="px-1 text-[0.9rem] font-medium text-alert" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Choice({ label, name, options, value, onChange }: { label: string; name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-2 px-1 text-[0.92rem] font-medium text-ink-2">{label}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <label
            key={o}
            className="pebble press inline-flex min-h-11 cursor-pointer items-center px-4 text-[0.95rem] text-ink-2 has-[:checked]:bg-well has-[:checked]:font-medium has-[:checked]:text-grandala-ink has-[:checked]:shadow-[inset_2px_2px_6px_var(--lo),inset_-2px_-2px_6px_var(--hi)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-grandala"
          >
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ReservationForm({ journeys, initial }: { journeys: JourneyOption[]; initial?: string }) {
  const id = useId();
  const [journey, setJourney] = useState(initial ?? journeys[0]?.value ?? "");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [travellers, setTravellers] = useState("1");
  const [meal, setMeal] = useState("Veg");
  const [interest, setInterest] = useState("Both");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | undefined>();

  const journeyLabel = journeys.find((j) => j.value === journey)?.full ?? journey;

  const message = () =>
    [
      "Hello Rajesh,",
      "Reservation request via aviantrails.in",
      "",
      `Journey: ${journeyLabel}`,
      `Name: ${name.trim()}`,
      city.trim() ? `From: ${city.trim()}` : null,
      `Travellers: ${travellers}`,
      `Meals: ${meal}`,
      `Interest: ${interest}`,
      note.trim() ? `Note: ${note.trim()}` : null,
      "",
      "Please share the itinerary and cost.",
    ]
      .filter((l) => l !== null)
      .join("\n");

  const validate = () => {
    if (!name.trim()) {
      setError("Add your name so Rajesh knows who’s writing.");
      document.getElementById(`${id}-name`)?.focus();
      return false;
    }
    setError(undefined);
    return true;
  };

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(message()), "_blank", "noopener");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `Reservation request: ${journeyLabel}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  };

  return (
    <form onSubmit={sendWhatsApp} noValidate className="soft p-5 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="serif text-[1.5rem] font-semibold">Reserve a seat</p>
        <p className="text-[0.88rem] text-ink-3">Goes to Rajesh on WhatsApp</p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Journey" htmlFor={`${id}-journey`} className="sm:col-span-2">
          <div className="relative">
            <select id={`${id}-journey`} value={journey} onChange={(e) => setJourney(e.target.value)} className={`${field} cursor-pointer appearance-none pr-11 text-[0.95rem] sm:text-[1rem]`}>
              {journeys.map((j) => (
                <option key={j.value} value={j.value}>
                  {j.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-ink-3" strokeWidth={2} aria-hidden="true" />
          </div>
        </Field>
        <Field label="Your name" htmlFor={`${id}-name`} error={error}>
          <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} aria-invalid={error ? true : undefined} />
        </Field>
        <Field label="Travelling from" htmlFor={`${id}-city`}>
          <input id={`${id}-city`} value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2" className={field} placeholder="City" />
        </Field>
        <Field label="Travellers" htmlFor={`${id}-pax`}>
          <input
            id={`${id}-pax`}
            type="number"
            inputMode="numeric"
            min={1}
            max={20}
            value={travellers}
            onChange={(e) => setTravellers(e.target.value.replace(/[^0-9]/g, "") || "1")}
            className={`${field} num`}
          />
        </Field>
        <Choice label="Meals" name={`${id}-meal`} options={["Veg", "Non-veg", "Jain"]} value={meal} onChange={setMeal} />
        <div className="sm:col-span-2">
          <Choice label="Coming for" name={`${id}-interest`} options={["Birding", "Photography", "Both"]} value={interest} onChange={setInterest} />
        </div>
        <Field label="Anything Rajesh should know" htmlFor={`${id}-note`} className="sm:col-span-2">
          <textarea id={`${id}-note`} value={note} onChange={(e) => setNote(e.target.value)} rows={3} className={`${field} resize-y`} placeholder="Target birds, lens, dates, walking or altitude limits" />
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="action press inline-flex min-h-13 items-center justify-center gap-2.5 px-7 text-[1rem] font-medium">
          <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
          Send on WhatsApp
        </button>
        <button type="button" onClick={sendEmail} className="pebble press inline-flex min-h-13 items-center justify-center gap-2 px-6 text-[1rem] font-medium text-ink">
          <Mail className="size-5" strokeWidth={2} aria-hidden="true" />
          Email instead
        </button>
        <p className="text-[0.88rem] text-ink-3 sm:ml-auto sm:max-w-[14rem] sm:text-right">Nothing is saved here. The message opens in your app, ready to send.</p>
      </div>
    </form>
  );
}
