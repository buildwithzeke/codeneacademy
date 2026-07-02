//icons
import { Code2, ShieldCheck, GraduationCap } from "lucide-react";

//components
import FloatingTech from "../components/FloatingTech";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-orange/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glow">
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr]">
          <div className="space-y-5">
            <FloatingTech icon={Code2} label="HTML" />
            <FloatingTech icon={ShieldCheck} label="Mentor" tone="orange" />
            <FloatingTech icon={GraduationCap} label="JS" />
          </div>
          <div className="rounded-2xl border border-white/15 bg-slate-950 p-4 shadow-2xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-hidden text-[11px] leading-6 text-slate-300 sm:text-xs">
              <code>{`const journey = {
  student: "beginner",
  roadmap: ["HTML", "CSS", "JavaScript"],
  mentor: "Codene Academy",
  build(project) {
    return project.launchCareer();
  }
};`}</code>
            </pre>
          </div>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.7fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <div className="h-28 rounded-xl bg-gradient-to-br from-brand-purple via-brand-navy to-brand-orange p-4">
              <div className="h-full rounded-lg border border-white/15 bg-brand-ink/70 p-3">
                <div className="mb-3 h-2 w-2/3 rounded bg-brand-orange" />
                <div className="mb-2 h-2 w-4/5 rounded bg-white/60" />
                <div className="mb-2 h-2 w-3/5 rounded bg-brand-purple" />
                <div className="h-2 w-5/6 rounded bg-white/50" />
              </div>
            </div>
          </div>
          <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <img
              src="/brand/logo.jpg"
              alt="Codene Academy symbol"
              className="h-28 w-28 rounded-3xl object-cover object-left shadow-glow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
