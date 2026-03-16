import Link from "next/link";
import { site, getFeaturedListings, services, testimonials } from "@/lib/data";
import { PropertyCard } from "@/components/PropertyCard";

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "6", label: "Countries" },
  { value: "500+", label: "Transactions" },
  { value: "98%", label: "Client satisfaction" },
];

export default function HomePage() {
  const featured = getFeaturedListings();

  return (
    <>
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {site.tagline}
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Premium residential and commercial real estate across Europe. Sales, lettings, and investment advisory for global clients.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-medium text-white hover:bg-primary-600 transition"
              >
                View properties
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/30 px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured properties</h2>
              <p className="mt-1 text-slate-600">Hand-picked listings for discerning clients</p>
            </div>
            <Link
              href="/listings"
              className="text-primary-700 font-medium hover:text-primary-800 transition"
            >
              View all properties →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 6).map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Our services</h2>
          <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
            End-to-end support for buyers, sellers, landlords, and investors.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-block text-primary-700 text-sm font-medium hover:text-primary-800"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-primary-700 text-white px-6 py-3 text-sm font-medium hover:bg-primary-800 transition"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold">{stat.value}</p>
                <p className="mt-1 text-primary-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">What our clients say</h2>
          <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
            Trusted by investors and families across the globe.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <p className="font-medium text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.location}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="text-primary-700 font-medium hover:text-primary-800"
            >
              More testimonials →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Ready to find your next property?</h2>
          <p className="mt-4 text-slate-600">
            Get in touch for a confidential conversation. We reply within 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-700 text-white px-6 py-3 text-base font-medium hover:bg-primary-800 transition"
            >
              Contact us
            </Link>
            <Link
              href="/listings"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Browse properties
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">{site.currencyNote}</p>
        </div>
      </section>
    </>
  );
}
