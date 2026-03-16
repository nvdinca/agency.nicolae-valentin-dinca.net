import type { Metadata } from "next";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients say about us. Reviews from buyers, sellers, and investors.",
};

export default function TestimonialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold text-slate-900">Testimonials</h1>
        <p className="mt-6 text-lg text-slate-600">
          Hear from clients who have bought, sold, or invested with us across Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex gap-1 mb-3" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-amber-500">
                  ★
                </span>
              ))}
            </div>
            <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4">
              <p className="font-medium text-slate-900">{t.author}</p>
              <p className="text-sm text-slate-500">{t.location}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
