import type { Metadata } from "next";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { PageHead } from "@/components/site/PageHead";
import { gallery } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery: Rajesh Panwar's bird and wildlife photographs",
  description:
    "Grandalas at Lachen, Satyr Tragopan, Fire-tailed Sunbird, Snow Leopard, Rainbow-bearded Thornbill: photographs from Rajesh Panwar's trips across the Himalaya, India and the world.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const count = gallery.reduce((n, g) => n + g.shots.length, 0);
  return (
    <>
      <PageHead
        name="Gallery"
        note={`${count} photographs · all by Rajesh Panwar`}
        lead="Captioned the way Rajesh captions them: the bird, the place, the month. Most were made on the same routes the tours run."
      />
      <div className="container-x pt-8 pb-20 md:pt-10 md:pb-28">
        <GalleryGrid groups={gallery} />
      </div>
    </>
  );
}
