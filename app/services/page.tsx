import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sales, lettings, property management, investment advisory, and consultancy. Full-service real estate for global clients.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-slate-900">Our services</h1>
        <p className="mt-6 text-lg text-slate-600">
          We offer end-to-end support for residential and commercial real estate. Tell us your
          goals and we will tailor our services—or request a quote for a specific need.
        </p>
      </div>

      <div className="space-y-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row gap-8 p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition"
          >
            <div className="md:w-1/4">
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-slate-600">{service.description}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-primary-700 font-medium hover:text-primary-800"
              >
                Request a quote →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 rounded-xl bg-slate-50 border border-slate-200">
        <p className="text-slate-700">
          All services can be combined or customised. We work in {site.currency} and quote
          clearly—no hidden fees. {site.contact.timezone}.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary-700 text-white px-6 py-3 text-sm font-medium hover:bg-primary-800 transition"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
