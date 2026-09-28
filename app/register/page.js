"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20">
        <div className="max-w-md mx-auto px-5 text-center">
          <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl text-ink mb-3">
            You're all set{name ? `, ${name}` : ""}
          </h1>
          <p className="text-slate text-sm leading-relaxed mb-8">
            Welcome to Bounty. You'll find personalised guidance, tools, and updates waiting for you on your dashboard.
          </p>
          <Link
            href="/"
            className="inline-flex items-center h-11 px-6 bg-sage hover:bg-sage-dark text-white font-semibold rounded-full transition-colors text-sm"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-md mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-3">Join Bounty, it's free</h1>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Get personalised pregnancy and parenting updates, exclusive offers, and access to a caring community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">First name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">Password</label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-ink mb-2">Are you, or is your partner, pregnant?</label>
            <select
              id="status"
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-sage focus:outline-none transition-colors"
            >
              <option>Yes</option>
              <option>No, we're trying</option>
              <option>No, just exploring</option>
            </select>
          </div>
          <label className="flex items-start gap-3 text-xs text-slate pt-2">
            <input type="checkbox" className="mt-0.5 accent-sage" />
            Send me weekly development updates, offers, and news from Bounty. You can unsubscribe any time.
          </label>
          <button
            type="submit"
            className="w-full h-12 bg-sage hover:bg-sage-dark text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Create your free account
          </button>
          <p className="text-xs text-slate/60 text-center leading-relaxed pt-1">
            This is a demo form. No account is created and no data leaves your browser.
          </p>
        </form>

        <p className="text-sm text-slate text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-sage hover:text-sage-dark transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
