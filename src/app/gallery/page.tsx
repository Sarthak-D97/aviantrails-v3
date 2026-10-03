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
        photo={{ slug: "borneo-black-crowned-pitta", caption: "Black-crowned Pitta · Borneo · Jul 2025", position: "65% 45%" }}
        name="Gallery"
        note={`${count} photographs · all by Rajesh Panwar`}
        lead="Captioned the way Rajesh captions them: the bird, the place, the month. Most were made on the same routes the tours run."
      />
      <div className="container-x pt-12 md:pt-16">
        <GalleryGrid groups={gallery} />
      </div>
    </>
  );
}
