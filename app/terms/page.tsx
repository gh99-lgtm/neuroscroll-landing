import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – NeuroScroll",
  description: "Terms of Service for the NeuroScroll app by Spaceluxx LLC.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-400 transition-colors">
          ← Back to NeuroScroll
        </Link>

        <h1 className="mt-10 text-3xl font-semibold text-white tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-neutral-500">Effective date: March 16, 2026 · Last updated: March 16, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-400">

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using NeuroScroll ("the App"), you agree to be bound by these Terms of
              Service ("Terms"). These Terms are entered into between you and Spaceluxx LLC ("we", "us", or "our"). If
              you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">2. Use of the Service</h2>
            <p>
              NeuroScroll is a productivity and wellness application designed to support micro-learning habits. You
              agree to use the App only for lawful purposes and in accordance with these Terms. You may not:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Use the App in any way that violates applicable laws or regulations</li>
              <li>Attempt to reverse engineer, decompile, or tamper with the App</li>
              <li>Use the App to transmit harmful, offensive, or unauthorized content</li>
              <li>Circumvent or interfere with any security or access controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">3. Intellectual Property</h2>
            <p>
              All content, branding, design, code, and materials within NeuroScroll are the property of Spaceluxx LLC
              or its licensors and are protected by applicable intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to use the App for personal, non-commercial purposes. Nothing in
              these Terms transfers ownership of any intellectual property to you.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">4. User Accounts</h2>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of your credentials and
              for all activity under your account. Notify us immediately at{" "}
              <a href="mailto:hello@neuroscroll.io" className="text-neutral-300 hover:text-white transition-colors underline underline-offset-2">
                hello@neuroscroll.io
              </a>{" "}
              if you suspect unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">5. Disclaimer of Warranties</h2>
            <p>
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied,
              including but not limited to implied warranties of merchantability, fitness for a particular purpose, or
              non-infringement. We do not warrant that the App will be uninterrupted, error-free, or free of harmful
              components.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Spaceluxx LLC shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of or inability to use the App,
              including loss of data or profits, even if we have been advised of the possibility of such damages. Our
              total liability to you for any claim shall not exceed the amount you paid us in the twelve months
              preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the App at our sole discretion, without
              notice, for conduct that we believe violates these Terms or is otherwise harmful to other users, us, or
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the effective date above.
              Continued use of the App after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-neutral-200 mb-2">10. Contact</h2>
            <p>
              For questions about these Terms, contact us at:
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
