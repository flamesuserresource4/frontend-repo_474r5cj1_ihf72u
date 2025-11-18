import { motion } from "framer-motion";
import { Bot, Users, Wallet, Gauge, Boxes, LifeBuoy } from "lucide-react";

const modules = [
  { icon: Bot, title: "AI Talent Copilot", desc: "Sourcing, screening, and scheduling — supercharged by AI." },
  { icon: Users, title: "Core HR", desc: "Employee profiles, time-off, docs, and org structure." },
  { icon: Wallet, title: "Payroll & Benefits", desc: "Multi-country, compliant payroll and flexible benefits." },
  { icon: Gauge, title: "Performance", desc: "Goals, reviews, feedback, and growth plans." },
  { icon: Boxes, title: "Inventory & Assets", desc: "Assets, POs, vendors, and depreciation tracking." },
  { icon: LifeBuoy, title: "Helpdesk", desc: "SLAs, automations, and knowledge base." },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white text-center"
        >
          Unified modules, one calm surface
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
            >
              <div className="flex items-center gap-3">
                <m.icon className="text-white/90" size={20} />
                <h3 className="text-lg font-semibold text-white">{m.title}</h3>
              </div>
              <p className="mt-2 text-white/70 text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
