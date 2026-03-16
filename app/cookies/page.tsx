import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How we use cookies on this site. GDPR-compliant cookie policy.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="text-4xl font-bold text-slate-900">Cookie Policy</h1>
      <p className="mt-2 text-slate-500 text-sm">Last updated: {new Date().toLocaleDateString("en-GB")}</p>

      <div className="mt-10 space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. What are cookies</h2>
          <p className="mt-2">
            Cookies are small text files stored on your device when you visit a website. They are
            used to remember preferences, improve usability, and sometimes for analytics or
            advertising. This policy explains how we use cookies on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Cookies we use</h2>
          <p className="mt-2">
            This site currently uses only <strong>strictly necessary</strong> (essential) cookies
            where needed for the site to function:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>
              <strong>Cookie consent</strong> – We store your choice (accept or essential only) in
              your browser (localStorage or a cookie) so we do not show the cookie banner again on
              your next visit. This is necessary to respect your preference under GDPR.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> use advertising cookies, marketing cookies, or third-party
            analytics cookies on this version of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Legal basis (GDPR)</h2>
          <p className="mt-2">
            For the European Union and UK, we rely on:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Legitimate interest</strong> – Storing your consent choice so we can comply
              with it on future visits.
            </li>
            <li>
              <strong>Consent</strong> – If we were to introduce non-essential cookies (e.g.
              analytics), we would ask for your consent first and only activate them if you accept.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. How to change your choice</h2>
          <p className="mt-2">
            You can withdraw or change your cookie preference at any time:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Clear your browser’s cookies and local storage for this site, then revisit the site – the cookie banner will appear again and you can choose again.</li>
            <li>Use your browser settings to block or delete cookies (see your browser’s help section).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Third-party content</h2>
          <p className="mt-2">
            Some pages may embed content from third parties (e.g. maps). Those services may set their
            own cookies. We do not control those cookies. Check their privacy and cookie policies
            for more information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. More information</h2>
          <p className="mt-2">
            For general privacy and data protection, see our{" "}
            <Link href="/privacy" className="text-primary-700 underline hover:text-primary-800">
              Privacy Policy
            </Link>
            . This is a fictional portfolio project; for the author’s portfolio, visit{" "}
            <a
              href="https://nicolae-valentin-dinca.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline hover:text-primary-800"
            >
              nicolae-valentin-dinca.net
            </a>
            .
          </p>
        </section>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-primary-700 font-medium hover:text-primary-800">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
