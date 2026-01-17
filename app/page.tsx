'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const scrollToForm = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = email.trim().toLowerCase();
    const isValid = trimmed && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setStatus('error');
      setErrorMsg('Enter a valid email.');
      return;
    }

    try {
      setStatus('loading');
      setErrorMsg('');

      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source: 'landing-page' }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(payload?.error || 'Something failed. Try again.');
        return;
      }

      // If Google script returned ok:false inside its payload, treat as error
      const googleOk =
        payload?.google?.ok === undefined ? true : Boolean(payload?.google?.ok);

      if (!googleOk) {
        setStatus('error');
        setErrorMsg(payload?.google?.error || 'Could not add you to the list. Try again.');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Network error. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/12 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl opacity-50" />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/neuroscroll-clean-logo.png"
              alt="NeuroScroll"
              width={46}
              height={46}
              className="w-[46px] h-[46px]"
            />
            <span className="font-bold text-lg">NeuroScroll</span>
          </div>
          <button
            onClick={scrollToForm}
            className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-full hover:bg-neutral-200 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Get Free Early Access Now!
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center pt-12">
        <div className="mb-8 opacity-95">
          <Image
            src="/images/neuroscroll-clean-logo.png"
            alt="NeuroScroll"
            width={144}
            height={144}
            className="w-36 h-36"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 bg-clip-text text-transparent">
          Your brain isn't addicted to strolling.
        </h1>
        <p className="text-2xl md:text-4xl font-medium text-neutral-300 mb-6">
          It's starving for something better.
        </p>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-2">
          Turn the time you already scroll into knowledge you can actually use.
        </p>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10">
          NeuroScroll powers your brain with high-signal micro-learning moments before you open Instagram, TikTok, or YouTube.
        </p>
        <button
          onClick={scrollToForm}
          className="relative px-8 py-4 bg-white text-black font-semibold text-lg rounded-full transition-all hover:scale-105 group overflow-hidden"
        >
          <span className="relative z-10">Get Free Early Access Now!</span>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400/30 via-sky-400/30 to-blue-500/30 blur-xl" />
        </button>
        <p className="text-sm text-neutral-500 mt-5">Launching this week.</p>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-16 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
          You don&apos;t have a self-control problem.
        </h2>
        <p className="text-xl md:text-3xl text-neutral-300 leading-relaxed mb-5">
          You have a dopamine system optimized for noise.
        </p>
        <p className="text-xl md:text-3xl text-neutral-300 leading-relaxed">
          NeuroScroll redirects that dopamine toward real-world knowledge — through micro-learning.
        </p>
      </section>

      {/* Outcome */}
      <section className="relative px-6 py-16 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Neuroscrolling gives you
        </h2>
        <ul className="space-y-5 text-lg md:text-xl mb-8">
          <li className="flex items-start gap-4">
            <span className="text-cyan-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Sharper thinking throughout the day</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-sky-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Real-world knowledge you can actually use</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Less mental fog, more clarity</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-cyan-500/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">A sense that your time online is no longer wasted</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-400">
          This compounds daily.
        </p>
      </section>

      {/* Neuroscrolling Definition */}
      <section className="relative px-6 py-16 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What is Neuroscrolling
        </h2>
        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-5">
          Neuroscrolling is the habit of adding intelligence to your scroll time through micro-learning.
        </p>
        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-6">
          Instead of leaving an app drained, you leave with something learned, something usable, or something clearer.
        </p>
        <p className="text-lg text-neutral-400">
          Same apps. Different outcome.
        </p>
      </section>

      {/* How it works */}
      <section className="relative px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-60" />
              <span className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent block mb-4">1</span>
              <p className="text-lg text-neutral-300">
                Open a social app
              </p>
            </div>
            <div className="relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 opacity-60" />
              <span className="text-5xl font-bold bg-gradient-to-br from-sky-400 to-blue-500 bg-clip-text text-transparent block mb-4">2</span>
              <p className="text-lg text-neutral-300">
                Learn something real (micro-learning)
              </p>
            </div>
            <div className="relative p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden group hover:border-blue-500/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 opacity-60" />
              <span className="text-5xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-4">3</span>
              <p className="text-lg text-neutral-300">
                Scroll unlocked
              </p>
            </div>
          </div>
          <p className="text-lg text-neutral-400 mt-10 text-center">
            Your attention earns value before it&apos;s spent.
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="relative px-6 py-16 max-w-4xl mx-auto">
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Other apps block you.
        </h2>
        <p className="text-3xl md:text-5xl font-bold text-neutral-300 mb-14">
          NeuroScroll sharpens you.
        </p>
        <ul className="space-y-5 text-lg md:text-xl mb-8">
          <li className="flex items-start gap-4">
            <span className="text-cyan-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Real-world topics (AI, Business, Influence)</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-sky-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Short lessons — not courses</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-400/60 flex-shrink-0 font-bold">•</span>
            <span className="text-neutral-300">Knowledge over restriction</span>
          </li>
        </ul>
        <p className="text-lg text-neutral-400">
          Scrolling becomes intentional.
        </p>
      </section>

      {/* Early Access */}
      <section id="early-access" className="relative px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-neutral-300 mb-4">
            We&apos;re opening early access to a limited group.
          </p>
          <p className="text-lg text-neutral-400 mb-10">
            Join the waitlist to start neuroscrolling — and turn everyday scrolling into real mental progress.
          </p>

          {status === 'success' ? (
            <div className="p-6 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30">
              <p className="text-xl text-neutral-200">
                You&apos;re on the list. Check your inbox soon.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 px-6 py-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="relative px-8 py-4 bg-white text-black font-semibold rounded-full transition-all hover:scale-105 whitespace-nowrap group overflow-hidden disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span className="relative z-10">
                    {status === 'loading' ? 'Adding…' : 'Get Free Early Access Now!'}
                  </span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400/30 via-sky-400/30 to-blue-500/30 blur-xl" />
                </button>
              </form>

              {status === 'error' && (
                <p className="text-sm text-red-400 mb-2">
                  {errorMsg || 'Something went wrong.'}
                </p>
              )}
            </>
          )}

          <p className="text-sm text-neutral-500">
            No spam. No ads. Just the app.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-14 text-center border-t border-neutral-800/50">
        <p className="text-neutral-500">
          Built for people who hate wasting attention.
        </p>
      </footer>
    </div>
  );
}
