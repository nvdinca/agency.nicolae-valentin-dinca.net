import Link from "next/link";
import type { Listing } from "@/lib/data";
import { site } from "@/lib/data";

const placeholderImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80";

export function PropertyCard({ listing }: { listing: Listing }) {
  const img = listing.images?.[0] || placeholderImage;

  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group block rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        <img
          src={img}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-2 py-1 rounded bg-white/90 text-xs font-medium capitalize">
          {listing.type}
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm text-slate-500">{listing.location}</p>
        <h3 className="font-semibold text-slate-900 mt-1 group-hover:text-primary-700 transition line-clamp-2">
          {listing.title}
        </h3>
        <p className="mt-2 text-lg font-semibold text-primary-700">
          {new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: site.currency,
            maximumFractionDigits: 0,
          }).format(listing.price)}
        </p>
        <ul className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600">
          {listing.bedrooms > 0 && <li>{listing.bedrooms} bed</li>}
          <li>{listing.bathrooms} bath</li>
          <li>{listing.sqm} m²</li>
        </ul>
      </div>
    </Link>
  );
}
