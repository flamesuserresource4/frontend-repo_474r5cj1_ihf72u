import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section id="product" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-300/10 p-1"
        >
          <div className="rounded-[22px] overflow-hidden bg-slate-900/70 backdrop-blur">
            <div className="h-12 border-b border-white/10 flex items-center gap-2 px-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <div className="h-2 w-20 rounded bg-white/20" />
                <div className="mt-3 h-40 rounded bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_60%)]" />
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <div className="h-2 w-24 rounded bg-white/20" />
                <div className="mt-3 h-40 rounded bg-[conic-gradient(at_50%_50%,rgba(99,102,241,0.25),rgba(236,72,153,0.25),rgba(251,191,36,0.25),rgba(99,102,241,0.25))] animate-[spin_10s_linear_infinite]" />
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <div className="h-2 w-16 rounded bg-white/20" />
                <div className="mt-3 h-40 rounded bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(236,72,153,0.2))]" />
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <div className="h-2 w-10 rounded bg-white/20" />
                <div className="mt-3 h-40 rounded bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.25),transparent_60%)]" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Aesthetic 2D & 3D motion</h3>
          <p className="mt-3 text-white/70 text-lg">Blend clean dashboards with gentle motion: radial glows, conic gradients, and integrated 3D scenes create a calm sense of depth without distraction.</p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" /> Interactive 3D hero with smooth controls</li>
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" /> Subtle 2D micro-animations and glows</li>
            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Consistent, minimalist visual language</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
