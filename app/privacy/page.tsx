import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this portfolio project. No real data collection.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString("en-GB")}</p>

      <div className="mt-10 prose prose-slate max-w-none">
        <p className="text-slate-600">
          This website is a <strong>fictional portfolio project</strong> by Nicolae-Valentin Dinca.
          It is not a real estate agency and does not conduct real transactions or collect personal
          data for commercial use.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">1. Who operates this site</h2>
        <p className="mt-2 text-slate-600">
          This site is a demo created for portfolio and presentation purposes. The content (agency
          name, properties, contact details) is fictional. For the real portfolio of the author,
          see{" "}
          <Link
            href="https://nicolae-valentin-dinca.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 hover:text-primary-800 underline"
          >
            nicolae-valentin-dinca.net
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Data collection</h2>
        <p className="mt-2 text-slate-600">
          This site is static. The contact form on the Contact page does not send data to any
          server or database in this demo. If in the future the form were connected to a backend,
          only the data you voluntarily submit (e.g. name, email, message) would be processed, in
          line with applicable data protection laws.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Cookies and analytics</h2>
        <p className="mt-2 text-slate-600">
          We may store your cookie consent preference so we do not show the banner again. We do not
          use advertising or analytics cookies. For details, see our{" "}
          <Link href="/cookies" className="text-primary-700 underline hover:text-primary-800">
            Cookie Policy
          </Link>
          . If other cookies or analytics were added later, this policy would be updated and, where
          required, consent would be requested.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Third-party content</h2>
        <p className="mt-2 text-slate-600">
          The site may embed content from third parties (e.g. maps). Those services have their own
          privacy policies. We do not control data they collect when you interact with embedded
          content.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">5. Your rights</h2>
        <p className="mt-2 text-slate-600">
          Under laws such as the GDPR, you may have rights to access, rectify, or delete personal
          data. Since this demo does not store personal data, there is no data to request or
          delete. For any questions about this project, you can contact the author via the
          portfolio site linked above.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">6. Changes</h2>
        <p className="mt-2 text-slate-600">
          This page may be updated from time to time. The “Last updated” date at the top reflects
          the latest change.
        </p>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-primary-700 font-medium hover:text-primary-800">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
