import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SUNBIRD_PATH, SUNBIRD_VIEWBOX } from "@/components/brand/Sunbird";

// Share cards: what a WhatsApp or Instagram link to the site shows. The daylight hide: sage ground,
// the name in Fraunces, facts in Lexend, a pressed seat badge, and one of Rajesh's photographs in a
// moulded bezel. The Sunbird flame marks the next departure.

export const ogSize = { width: 1200, height: 630 };

const GROUND = "#e3e9d7";
const INK = "#1d2a1c";
const INK2 = "#455541";
const MOSS = "#34502e";
const SUNBIRD = "#c93a21";
const HI = "rgba(255,255,255,0.85)";
const LO = "rgba(80,102,64,0.32)";

const badges = {
  seat: { bg: "#d2e3c2", fg: "#2f6b2c" },
  wait: { bg: "#efdfb8", fg: "#7a4f08" },
  gone: { bg: "#d6dec8", fg: "#4c5a46" },
  on: { bg: INK, fg: GROUND },
};

export type BadgeTone = keyof typeof badges;

async function font(file: string) {
  return readFile(join(process.cwd(), "src/app/_og/fonts", file));
}

async function photo(slug: string) {
  const data = await readFile(join(process.cwd(), "public/photos", `${slug}.jpg`));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

export async function shareCard({
  meta,
  title,
  lines,
  badge,
  next = false,
  photoSlug,
  photoPosition = "50% 50%",
}: {
  meta: string;
  title: string;
  lines: string[];
  badge?: { text: string; tone: BadgeTone; asOn: string };
  /** The meta line names the next departure: mark it with the Sunbird flame. */
  next?: boolean;
  photoSlug: string;
  photoPosition?: string;
}) {
  const [serif, text, medium, img] = await Promise.all([font("fraunces-600.woff"), font("lexend-400.woff"), font("lexend-500.woff"), photo(photoSlug)]);
  const titleSize = title.length > 34 ? 56 : title.length > 26 ? 64 : title.length > 18 ? 74 : 82;
  const tone = badge ? badges[badge.tone] : null;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: GROUND, fontFamily: "Lexend", fontWeight: 400, color: INK }}>
        <div style={{ display: "flex", flexDirection: "column", width: 660, padding: "54px 40px 50px 60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="26" height="42" viewBox={SUNBIRD_VIEWBOX} fill={MOSS}>
              <path d={SUNBIRD_PATH} />
            </svg>
            <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 32 }}>Avian Trails</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 46, fontSize: 25, color: INK2 }}>
            {next ? <div style={{ display: "flex", background: SUNBIRD, color: "#ffffff", borderRadius: 999, padding: "5px 14px", fontFamily: "Lexend", fontWeight: 500, fontSize: 20 }}>Next</div> : null}
            {meta}
          </div>
          <div style={{ display: "flex", marginTop: 14, fontFamily: "Fraunces", fontSize: titleSize, lineHeight: 1.02, letterSpacing: -1.2 }}>{title}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18, gap: 4 }}>
            {lines.map((l) => (
              <div key={l} style={{ display: "flex", fontSize: 26, color: INK2 }}>
                {l}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: "auto" }}>
            {badge && tone ? (
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: tone.bg,
                    color: tone.fg,
                    borderRadius: 999,
                    padding: "11px 22px",
                    fontWeight: 500,
                    fontSize: 25,
                    lineHeight: 1,
                    boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.14)",
                  }}
                >
                  <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: tone.fg }} />
                  {badge.text}
                </div>
                <div style={{ display: "flex", fontSize: 22, lineHeight: 1, color: INK2 }}>as on {badge.asOn}</div>
              </div>
            ) : (
              <div style={{ display: "flex", fontSize: 25, color: INK2 }}>aviantrails.in</div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, padding: "40px 44px 40px 0" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              padding: 12,
              background: GROUND,
              borderRadius: 40,
              boxShadow: `-10px -10px 24px ${HI}, 12px 14px 28px ${LO}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} width={440} height={526} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photoPosition, borderRadius: 30 }} alt="" />
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: serif, weight: 600, style: "normal" },
        { name: "Lexend", data: text, weight: 400, style: "normal" },
        { name: "Lexend", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
