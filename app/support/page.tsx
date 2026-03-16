import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support – NeuroScroll",
  description: "Get help with NeuroScroll. Contact support for app issues, bug reports, and account questions.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors">
          ← Back to NeuroScroll
        </Link>

        <h1 className="mt-10 text-3xl font-semibold text-white tracking-tight">NeuroScroll Support</h1>
        <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
          We&apos;re here to help. Whether you&apos;re experiencing an issue with the app, want to report a bug, or
          have a question about your account — reach out and we&apos;ll get back to you as soon as possible.
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-400">

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">Contact Support</h2>
            <p>
              Email us at{" "}
              <a
                href="mailto:hello@neuroscroll.io"
                className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2"
              >
                hello@neuroscroll.io
              </a>{" "}
              and include a brief description of your issue. We aim to respond within 1–2 business days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">What We Can Help With</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>App crashes or unexpected behavior</li>
              <li>Feature questions or how-to guidance</li>
              <li>Bug reports</li>
              <li>Account and subscription questions</li>
              <li>General feedback and suggestions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">Tips for Faster Help</h2>
            <p>When reaching out, it helps to include:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Your device type and OS version (e.g. iPhone 15, iOS 18)</li>
              <li>NeuroScroll app version (found in the app settings)</li>
              <li>A short description of what happened and what you expected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">Privacy & Terms</h2>
            <p>
              You can review our{" "}
              <Link href="/privacy" className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2">
                Terms of Service
              </Link>{" "}
              at any time.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800/50 text-xs text-neutral-600 text-center">
          © 2026 Spaceluxx LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
}
