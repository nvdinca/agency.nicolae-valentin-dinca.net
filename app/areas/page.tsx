import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas we cover",
  description:
    "London, Paris, Berlin, Amsterdam, Costa Brava, Lisbon. Premium real estate in key European markets.",
};

export default function AreasPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-slate-900">Areas we cover</h1>
        <p className="mt-6 text-lg text-slate-600">
          We operate in selected European markets where we have deep local expertise and a
          track record of successful transactions for international clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/listings?area=${area.slug}`}
            className="block p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-primary-200 transition"
          >
            <h2 className="text-xl font-semibold text-slate-900">{area.name}</h2>
            <p className="text-sm text-slate-500 mt-1">{area.country}</p>
            <p className="mt-3 text-slate-600">{area.description}</p>
            <p className="mt-4 text-primary-700 font-medium text-sm">
              View {area.listingCount} properties →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
