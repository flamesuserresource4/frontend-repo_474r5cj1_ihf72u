import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-12 pb-10 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            AI-aesthetic HR & ERP
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300">
              Built for the future of work
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/70"
          >
            One platform for talent, core HR, payroll, performance, inventory, and helpdesk — with a calm, futuristic interface.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="mt-6 flex items-center gap-3"
          >
            <a href="#contact" className="rounded-full px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white">
              Book a demo
            </a>
            <a href="#product" className="rounded-full px-5 py-2.5 bg-white/0 hover:bg-white/10 border border-white/10 text-white">
              Explore product
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 p-1 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-300/10"
        >
          <div className="rounded-[22px] overflow-hidden bg-slate-900/70 backdrop-blur">
            <div className="h-[420px]">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
