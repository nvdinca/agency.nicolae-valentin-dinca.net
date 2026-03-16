"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { listings, site } from "@/lib/data";
import { PropertyCard } from "@/components/PropertyCard";

const types = [
  { value: "", label: "All types" },
  { value: "apartment", label: "Apartment" },
  { value: "house", label: "House" },
  { value: "commercial", label: "Commercial" },
];

export function ListingsContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "";
  const area = searchParams.get("area") ?? "";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const beds = searchParams.get("beds") ?? "";

  const filtered = useMemo(() => {
    return listings.filter((listing) => {
      if (type && listing.type !== type) return false;
      if (area && listing.areaSlug !== area) return false;
      if (minPrice && listing.price < Number(minPrice)) return false;
      if (maxPrice && listing.price > Number(maxPrice)) return false;
      if (beds && listing.bedrooms < Number(beds)) return false;
      return true;
    });
  }, [type, area, minPrice, maxPrice, beds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Properties</h1>
        <p className="mt-2 text-slate-600">
          {site.currencyNote}. Use filters to narrow your search.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 shrink-0">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 sticky top-24">
            <h2 className="font-semibold text-slate-900 mb-3">Filters</h2>
            <form className="space-y-4" method="get" action="/listings">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  defaultValue={type}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                >
                  {types.map((t) => (
                    <option key={t.value || "all"} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-slate-700">
                  Area
                </label>
                <select
                  id="area"
                  name="area"
                  defaultValue={area}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                >
                  <option value="">All areas</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                  <option value="berlin">Berlin</option>
                  <option value="amsterdam">Amsterdam</option>
                  <option value="costa-brava">Costa Brava</option>
                  <option value="lisbon">Lisbon</option>
                </select>
              </div>
              <div>
                <label htmlFor="minPrice" className="block text-sm font-medium text-slate-700">
                  Min price ({site.currency})
                </label>
                <input
                  id="minPrice"
                  name="minPrice"
                  type="number"
                  min="0"
                  placeholder="e.g. 100000"
                  defaultValue={minPrice}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-sm font-medium text-slate-700">
                  Max price ({site.currency})
                </label>
                <input
                  id="maxPrice"
                  name="maxPrice"
                  type="number"
                  min="0"
                  placeholder="e.g. 2000000"
                  defaultValue={maxPrice}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label htmlFor="beds" className="block text-sm font-medium text-slate-700">
                  Min bedrooms
                </label>
                <select
                  id="beds"
                  name="beds"
                  defaultValue={beds}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary-700 text-white px-4 py-2 text-sm font-medium hover:bg-primary-800 transition"
              >
                Apply filters
              </button>
              <a
                href="/listings"
                className="block text-center text-sm text-primary-700 hover:text-primary-800"
              >
                Clear filters
              </a>
            </form>
          </div>
        </aside>

        <div className="flex-1">
          <p className="text-slate-600 mb-6">
            {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-slate-500 py-12 text-center">
              No properties match your filters. Try adjusting them.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
