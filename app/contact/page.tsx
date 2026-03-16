"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const HONEYPOT_FIELD = "website_url";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    [HONEYPOT_FIELD]: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const honeypot = form.querySelector<HTMLInputElement>(`[name="${HONEYPOT_FIELD}"]`);
    if (honeypot?.value) return;
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Contact us</h1>
          <p className="mt-6 text-slate-600">
            Whether you are looking to buy, sell, let, or invest, we are here to help. Send us a
            message and we will get back to you within 24 hours.
          </p>
          <div className="mt-10 space-y-4">
            <p className="text-sm text-slate-500">{site.contact.timezone}</p>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-primary-700 font-medium hover:text-primary-800"
              >
                {site.contact.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="text-primary-700 font-medium hover:text-primary-800"
              >
                {site.contact.phone}
              </a>
            </p>
            <p className="text-slate-600">{site.contact.address}</p>
          </div>
          <div className="mt-10 rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
            <iframe
              title="Office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.259979996383!2d-0.127758323459817!3d51.50744531760966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1635000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
          {submitted ? (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <p className="font-medium">Thank you for your message.</p>
              <p className="text-sm mt-1">
                This is a portfolio demo. In a real project, the form would send an email or save
                to a database.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
                <label htmlFor={HONEYPOT_FIELD}>Leave empty</label>
                <input
                  id={HONEYPOT_FIELD}
                  name={HONEYPOT_FIELD}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData[HONEYPOT_FIELD]}
                  onChange={(e) => setFormData((prev) => ({ ...prev, [HONEYPOT_FIELD]: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                >
                  <option value="">Select...</option>
                  <option value="buy">I want to buy</option>
                  <option value="sell">I want to sell</option>
                  <option value="let">I want to let</option>
                  <option value="invest">Investment enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md bg-primary-700 text-white px-4 py-3 text-sm font-medium hover:bg-primary-800 transition"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
