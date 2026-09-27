import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/content/site";

// The action everywhere: a Grandala-blue pebble that opens WhatsApp with the message written.
export function WhatsAppButton({ message, children = "Reserve on WhatsApp", className = "" }: { message?: string; children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener"
      className={`action press inline-flex min-h-13 items-center justify-center gap-2.5 px-6 text-[1rem] font-medium no-underline ${className}`}
    >
      <MessageCircle className="size-[1.15em] shrink-0" strokeWidth={2} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

/** A raised pebble for the quieter choice beside the action. */
export function ButtonLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`pebble press group inline-flex min-h-13 items-center gap-2 px-6 text-[1rem] font-medium text-ink no-underline ${className}`}>
      {children}
      <ArrowRight className="size-[1.05em] shrink-0 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-1.5 font-medium text-ink underline decoration-rule decoration-2 underline-offset-[0.28em] transition-colors hover:decoration-ink ${className}`}>
      {children}
      <ArrowRight className="size-[1.05em] shrink-0 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}
