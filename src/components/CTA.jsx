import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${baseUrl}/api/hello`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      setStatus(data.message || 'Thanks! We\'ll be in touch.');
      setEmail('');
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-300/10 p-1">
          <div className="rounded-[22px] bg-slate-900/70 backdrop-blur p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">Book a live demo</h3>
            <p className="mt-2 text-white/70 text-center">Enter your work email and we\'ll reach out with a personalized walkthrough.</p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-3"
              >
                Request demo
              </button>
            </form>

            <p className="mt-3 text-xs text-white/60 text-center">
              By submitting, you agree to receive communications about product updates and demos.
            </p>

            {status && (
              <p className="mt-4 text-center text-white/80">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
