import { lodgeBySlug, lodges } from "@/content/lodges";
import { ogSize, shareCard } from "../../_og/card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "An Avian Trails birding lodge in Kumaon, Uttarakhand";

export function generateStaticParams() {
  return lodges.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = lodgeBySlug(slug) ?? lodges[0];
  return shareCard({
    meta: `Birding lodge · ${l.altitude} above sea level`,
    title: l.name,
    lines: [l.place, `Run by Rajesh & Sheela Panwar since ${l.opened.split(" ").pop()}`],
    photoSlug: l.doorstep[0]?.slug ?? l.hero,
  });
}
