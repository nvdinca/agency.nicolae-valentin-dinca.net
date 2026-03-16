import type { Metadata } from "next";
import { site, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our story, mission, and team. Premium real estate services for international clients across Europe.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900">About us</h1>
        <p className="mt-6 text-lg text-slate-600">
          {site.name} was founded to serve clients who operate across borders. Whether you are
          relocating, investing, or looking for a second home, we provide the same level of
          professionalism and local expertise in every market we cover.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-slate-900">Our mission</h2>
        <p className="mt-2 text-slate-600">
          To be the most trusted real estate partner for international clients, combining
          local knowledge with global standards of service, transparency, and integrity.
        </p>
        <h2 className="mt-12 text-2xl font-bold text-slate-900">Our values</h2>
        <ul className="mt-2 list-disc list-inside space-y-2 text-slate-600">
          <li>Client-first: your goals and timeline guide every step</li>
          <li>Transparency: clear communication and no hidden fees</li>
          <li>Expertise: deep local knowledge in every market we serve</li>
          <li>Integrity: we only recommend what we would choose ourselves</li>
        </ul>
      </div>

      <h2 className="mt-16 text-2xl font-bold text-slate-900">Our team</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
            <div className="aspect-[3/4] bg-slate-200 relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm text-primary-700">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
