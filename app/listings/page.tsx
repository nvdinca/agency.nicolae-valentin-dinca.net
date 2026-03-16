import { Suspense } from "react";
import type { Metadata } from "next";
import { ListingsContent } from "@/components/ListingsContent";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse residential and commercial properties. Filter by type, area, and price.",
  openGraph: {
    title: "Properties",
    description: "Browse residential and commercial properties. Filter by type, area, and price.",
  },
};

export default function ListingsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="h-8 w-48 bg-slate-200 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="h-96 bg-slate-100 rounded-xl" />
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-72 bg-slate-100 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ListingsContent />
    </Suspense>
  );
}
