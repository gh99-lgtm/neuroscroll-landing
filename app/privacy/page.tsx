import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – NeuroScroll",
  description: "Privacy Policy for the NeuroScroll app by Spaceluxx LLC.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors">
          ← Back to NeuroScroll
        </Link>

        <h1 className="mt-10 text-3xl font-semibold text-white tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-500">Effective date: March 16, 2026 · Last updated: March 16, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-400">

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">1. Overview</h2>
            <p>
              NeuroScroll ("the App") is developed and operated by Spaceluxx LLC ("we", "us", or "our"). This Privacy
              Policy explains how we collect, use, and protect information when you use our mobile application and
              related services. By using NeuroScroll, you agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">2. Information We May Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li><span className="text-neutral-300">Account information</span> — such as your email address if you create an account or join a waitlist.</li>
              <li><span className="text-neutral-300">Usage data</span> — how you interact with the App, features you use, and session activity.</li>
              <li><span className="text-neutral-300">Device information</span> — device type, operating system version, and app version.</li>
              <li><span className="text-neutral-300">Diagnostic data</span> — crash reports and performance metrics to improve app stability.</li>
              <li><span className="text-neutral-300">Analytics data</span> — aggregated, non-identifiable data about feature usage and engagement patterns.</li>
            </ul>
            <p className="mt-3">
              We do not knowingly collect sensitive personal data beyond what is necessary for the App to function and
              improve.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Operate, maintain, and improve the App</li>
              <li>Respond to your support requests and communications</li>
              <li>Send important updates about the App (you may opt out of non-essential communications)</li>
              <li>Monitor for errors, crashes, and security issues</li>
              <li>Understand usage patterns to prioritize features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">4. Third-Party Services</h2>
            <p>
              The App may use third-party services for analytics, diagnostics, or infrastructure. These services may
              process certain data on our behalf and are bound by their own privacy policies. Examples may include
              analytics platforms and cloud infrastructure providers. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">5. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to provide the App and comply with legal obligations. You
              may request deletion of your data by contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data,
              object to or restrict certain processing, or request a portable copy of your data. To exercise any of
              these rights, contact us at{" "}
              <a href="mailto:hello@neuroscroll.io" className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2">
                hello@neuroscroll.io
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">7. Children's Privacy</h2>
            <p>
              NeuroScroll is not directed at children under 13. We do not knowingly collect personal information from
              children under 13. If you believe a child has provided us data, please contact us and we will promptly
              delete it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the effective date above.
              Continued use of the App after changes constitutes your acceptance of the updated policy. For significant
              changes, we will make reasonable efforts to notify you in-app or by email.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact:
            </p>
            <p className="mt-2">
              Spaceluxx LLC<br />
              <a href="mailto:hello@neuroscroll.io" className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2">
                hello@neuroscroll.io
              </a>
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
