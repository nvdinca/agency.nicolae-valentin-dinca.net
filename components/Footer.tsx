import Link from "next/link";
import { site } from "@/lib/data";
import { ExternalLink } from "@/components/ExternalLink";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/listings", label: "Properties" },
  { href: "/areas", label: "Areas" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold text-lg mb-2">{site.name}</p>
            <p className="text-sm">{site.tagline}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Quick links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-white transition" rel="noopener noreferrer">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition">
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.address}</li>
              <li className="text-slate-400 text-xs mt-2">{site.contact.timezone}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-center text-sm text-slate-300 mb-6">
            Want a site like this? Contact Nicolae-Valentin Dinca on{" "}
            <ExternalLink
              href="https://wa.me/40784493923"
              className="text-green-400 hover:text-green-300 font-medium transition"
              aria-label="WhatsApp"
            >
              WhatsApp
            </ExternalLink>
            .
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nicolae-Valentin Dinca. Fictional portfolio project.{" "}
            <Link href="/privacy" className="text-slate-400 hover:text-white transition">
              Privacy
            </Link>
            {" · "}
            <Link href="/cookies" className="text-slate-400 hover:text-white transition">
              Cookies
            </Link>
          </p>
          <div className="flex gap-4">
            <ExternalLink href={site.social.linkedin} className="text-slate-400 hover:text-white transition" aria-label="LinkedIn">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={site.social.twitter} className="text-slate-400 hover:text-white transition" aria-label="Twitter">
              Twitter
            </ExternalLink>
            <ExternalLink href={site.social.instagram} className="text-slate-400 hover:text-white transition" aria-label="Instagram">
              Instagram
            </ExternalLink>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
