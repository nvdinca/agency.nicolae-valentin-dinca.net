import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getListingBySlug, getAreaBySlug, site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const listings = (await import("@/lib/data")).listings;
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: "Property not found" };
  const description = listing.description.slice(0, 160);
  return {
    title: listing.title,
    description,
    openGraph: {
      title: listing.title,
      description,
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const area = getAreaBySlug(listing.areaSlug);
  const priceFormatted = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: site.currency,
    maximumFractionDigits: 0,
  }).format(listing.price);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Link
        href="/listings"
        className="text-sm text-primary-700 hover:text-primary-800 mb-6 inline-block"
      >
        ← Back to properties
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
            <div className="aspect-[4/3] relative">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            {listing.images.length > 1 && (
              <div className="grid grid-cols-3 gap-1 p-2">
                {listing.images.slice(1, 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="aspect-[4/3] object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <span className="text-sm text-slate-500 capitalize">{listing.type}</span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">{listing.title}</h1>
          <p className="text-slate-600 mt-1">{listing.location}</p>
          {area && (
            <Link
              href={`/listings?area=${area.slug}`}
              className="text-sm text-primary-700 hover:text-primary-800 mt-2 inline-block"
            >
              More in {area.name} →
            </Link>
          )}
          <p className="mt-4 text-2xl font-semibold text-primary-700">{priceFormatted}</p>
          <p className="text-xs text-slate-500 mt-1">{site.currencyNote}</p>

          <ul className="mt-6 flex flex-wrap gap-4 text-slate-600">
            {listing.bedrooms > 0 && (
              <li>
                <span className="font-medium text-slate-900">{listing.bedrooms}</span> bed
              </li>
            )}
            <li>
              <span className="font-medium text-slate-900">{listing.bathrooms}</span> bath
            </li>
            <li>
              <span className="font-medium text-slate-900">{listing.sqm}</span> m²
            </li>
          </ul>

          <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h2 className="font-semibold text-slate-900 mb-3">Request viewing</h2>
            <p className="text-sm text-slate-600 mb-4">
              Interested in this property? Send us a message and we will arrange a viewing.
            </p>
            <Link
              href={`/contact?subject=Viewing request: ${encodeURIComponent(listing.title)}`}
              className="block w-full text-center rounded-md bg-primary-700 text-white px-4 py-3 text-sm font-medium hover:bg-primary-800 transition"
            >
              Get more info
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">Description</h2>
        <p className="mt-2 text-slate-600">{listing.description}</p>
        <h3 className="mt-6 font-semibold text-slate-900">Features</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {listing.features.map((f) => (
            <li
              key={f}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
