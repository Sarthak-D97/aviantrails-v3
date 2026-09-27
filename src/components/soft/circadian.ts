// Circadian UI: the page follows the visitor's own hour. Four phases set the ground and the sky
// (dawn, day, dusk, night); in between, the sun's angle sets the direction of every soft shadow
// (--lx/--ly) and how soft the Fraunces headings are (--soft). Runs before first paint so the page
// never flashes the wrong light; ?phase=dawn|day|dusk|night previews a phase.

export type Phase = "dawn" | "day" | "dusk" | "night";

export const PHASES: { id: Phase; label: string; at: number }[] = [
  { id: "dawn", label: "Dawn chorus", at: 6.5 },
  { id: "day", label: "Daylight", at: 12 },
  { id: "dusk", label: "Golden hour", at: 18 },
  { id: "night", label: "Night", at: 22 },
];

export function phaseAt(hour: number): Phase {
  if (hour >= 5 && hour < 8) return "dawn";
  if (hour >= 8 && hour < 16.5) return "day";
  if (hour >= 16.5 && hour < 19.5) return "dusk";
  return "night";
}

/** Sets the phase and the light on <html>. Shared by the pre-paint script and the chip. */
export function applyLight(hour: number, phase: Phase = phaseAt(hour)) {
  const root = document.documentElement;
  root.dataset.phase = phase;
  const night = phase === "night";
  const theta = Math.PI * Math.min(Math.max((hour - 6) / 12, 0), 1);
  const reach = 7;
  const lx = night ? 3 : Math.cos(theta) * reach;
  const ly = night ? 6 : Math.max(Math.sin(theta), 0.45) * reach;
  const soft = night ? 100 : Math.round(100 * (1 - Math.sin(theta)));
  root.style.setProperty("--lx", `${lx.toFixed(1)}px`);
  root.style.setProperty("--ly", `${ly.toFixed(1)}px`);
  root.style.setProperty("--soft", String(soft));
}

// The same logic, inlined for <head> so it runs before React.
export const circadianScript = `(function(){try{
var d=new Date(),h=d.getHours()+d.getMinutes()/60;
var q=new URLSearchParams(location.search).get('phase');
var at={dawn:6.5,day:12,dusk:18,night:22};
if(q&&at[q]!==undefined){h=at[q];}
var p=(h>=5&&h<8)?'dawn':(h>=8&&h<16.5)?'day':(h>=16.5&&h<19.5)?'dusk':'night';
var r=document.documentElement;r.dataset.phase=p;
var n=p==='night',t=Math.PI*Math.min(Math.max((h-6)/12,0),1),k=7;
r.style.setProperty('--lx',(n?3:Math.cos(t)*k).toFixed(1)+'px');
r.style.setProperty('--ly',(n?6:Math.max(Math.sin(t),.45)*k).toFixed(1)+'px');
r.style.setProperty('--soft',String(n?100:Math.round(100*(1-Math.sin(t)))));
}catch(e){}})();`;
