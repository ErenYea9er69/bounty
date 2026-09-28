"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-md mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-3">Contact us</h1>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Questions about membership, the app, or anything else? Send us a message and we'll get back to you.
        </p>

        {sent ? (
          <div className="bg-sage/5 border border-sage/20 rounded-2xl p-6 text-center">
            <h2 className="font-heading text-lg text-ink mb-2">Message sent</h2>
            <p className="text-sm text-slate">Thanks for reaching out. This is a demo form, so no message was actually sent.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Name</label>
              <input id="name" type="text" required className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
              <input id="email" type="email" required className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
              <textarea id="message" rows={5} required className="w-full px-4 py-3 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full h-12 bg-sage hover:bg-sage-dark text-white font-semibold rounded-xl transition-colors text-sm">
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
