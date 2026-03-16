import siteData from "@/data/site.json";
import listingsData from "@/data/listings.json";
import teamData from "@/data/team.json";
import testimonialsData from "@/data/testimonials.json";
import servicesData from "@/data/services.json";
import areasData from "@/data/areas.json";

export type Listing = {
  id: string;
  slug: string;
  title: string;
  location: string;
  areaSlug: string;
  type: "apartment" | "house" | "commercial";
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  featured: boolean;
  description: string;
  features: string[];
  images: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Area = {
  slug: string;
  name: string;
  country: string;
  description: string;
  listingCount: number;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  currency: string;
  currencyNote: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    timezone: string;
  };
  social: Record<string, string>;
};

export const site: SiteConfig = siteData as SiteConfig;
export const listings: Listing[] = listingsData as Listing[];
export const team: TeamMember[] = teamData as TeamMember[];
export const testimonials: Testimonial[] = testimonialsData as Testimonial[];
export const services: Service[] = servicesData as Service[];
export const areas: Area[] = areasData as Area[];

export function getFeaturedListings(): Listing[] {
  return listings.filter((l) => l.featured);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getListingsByArea(areaSlug: string): Listing[] {
  return listings.filter((l) => l.areaSlug === areaSlug);
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
