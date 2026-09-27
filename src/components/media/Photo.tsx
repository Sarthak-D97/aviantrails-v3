import Image from "next/image";
import { photoSizes, type PhotoSlug } from "@/content/photo-sizes";

type Props = {
  slug: PhotoSlug;
  caption?: string;
  alt?: string;
  /** Crop to this aspect (w/h). Omit to keep the photograph's own shape. */
  ratio?: number;
  position?: string;
  sizes: string;
  priority?: boolean;
  /** Seat the photograph in a moulded bezel (default) or show it plain. */
  bezel?: boolean;
  showCaption?: boolean;
  className?: string;
  imgClassName?: string;
  quality?: 60 | 75 | 85;
};

// Captions follow Rajesh's own format: "Species · Place · Month Year".
export function altFromCaption(caption: string) {
  return caption.replace(/ · /g, ", ");
}

export function Photo({ slug, caption, alt, ratio, position = "50% 50%", sizes, priority, bezel = true, showCaption = true, className = "", imgClassName = "", quality = 75 }: Props) {
  const [w, h] = photoSizes[slug];
  return (
    <figure className={className}>
      <div className={bezel ? "bezel" : ""}>
        <div className="relative overflow-hidden rounded-[1.25rem] bg-well" style={{ aspectRatio: ratio ?? w / h }}>
          <Image
            src={`/photos/${slug}.jpg`}
            alt={alt ?? (caption ? altFromCaption(caption) : "")}
            fill
            sizes={sizes}
            priority={priority}
            quality={quality}
            className={`object-cover ${imgClassName}`}
            style={{ objectPosition: position }}
          />
        </div>
      </div>
      {caption && showCaption ? <figcaption className="mt-3 px-1 text-[0.85rem] leading-snug text-ink-3">{caption}</figcaption> : null}
    </figure>
  );
}
