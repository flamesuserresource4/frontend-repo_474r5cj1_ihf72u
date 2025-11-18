import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Product", href: "#product" },
    { label: "Modules", href: "#modules" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-300" />
          <span className="text-white font-semibold tracking-tight">AesthetIQ</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10 transition-colors"
          >
            Book Demo
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 bg-white/5 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-3 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 text-white/90 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-white/5">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-center"
          >
            Book Demo
          </a>
        </div>
      )}
    </header>
  );
}
