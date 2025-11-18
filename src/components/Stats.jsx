import { motion } from "framer-motion";

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "10x", label: "Faster hiring" },
  { value: "-42%", label: "Ops overhead" },
  { value: "+27%", label: "Employee NPS" },
];

export default function Stats() {
  return (
    <section className="relative py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center"
          >
            <div className="text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
            <div className="mt-1 text-xs md:text-sm text-white/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
