import type { Metadata } from "next";
import { PageHead } from "@/components/site/PageHead";
import { ReportBoard } from "@/components/soft/ReportBoard";
import { reports } from "@/content/reports";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Field reports: what each Avian Trails group actually saw",
  description:
    "Trip reports from Rajesh Panwar's groups since 2024: species totals, highlights, misses and the eBird lists, from Ladakh and Arunachal to Costa Rica, Kenya and Papua New Guinea.",
  alternates: { canonical: "/field-reports" },
};

export default function FieldReportsPage() {
  const withList = reports.filter((r) => r.ebird).length;
  return (
    <>
      <PageHead
        photo={{ slug: "vinaceous-rosefinch", caption: "Vinaceous Rosefinch · Nainital", position: "70% 40%" }}
        name="Field reports"
        note={`${reports.length} trips · ${withList} with eBird lists`}
        lead="After most trips Rajesh posts what the group saw: the total, the stars, and the targets that got away. Pick a year."
      />
      <div className="container-x pt-12 md:pt-16">
        <ReportBoard reports={reports} />
        <p className="mt-12 max-w-2xl text-ink-2">
          Trip updates go out live on{" "}
          <a href={site.social.instagram} target="_blank" rel="noopener" className="font-medium text-ink">
            Instagram
          </a>{" "}
          and the{" "}
          <a href={site.social.whatsappChannel} target="_blank" rel="noopener" className="font-medium text-ink">
            WhatsApp channel
          </a>
          , usually with a mid-tour count.
        </p>
      </div>
    </>
  );
}
