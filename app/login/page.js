"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-md mx-auto px-5">
        <h1 className="font-heading text-3xl text-ink mb-3">Welcome back</h1>
        <p className="text-slate text-sm leading-relaxed mb-8">
          Log in to see your personalised pregnancy and parenting updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-blue focus:outline-none transition-colors"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-ink">Password</label>
              <button
                type="button"
                onClick={() => setError(true)}
                className="text-xs font-semibold text-blue hover:text-blue-dark transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              type="password"
              required
              className="w-full h-12 px-4 border-2 border-mist rounded-xl bg-white text-sm focus:border-blue focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <div className="bg-peach-light border border-peach/30 rounded-xl px-4 py-3 text-sm text-ink">
              This is a demo, there's no real account to log in to. Try{" "}
              <Link href="/register" className="font-semibold text-peach-dark underline">creating one</Link> instead.
            </div>
          )}

          <button
            type="submit"
            className="w-full h-12 bg-blue hover:bg-blue-dark text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-slate text-center mt-6">
          New to Bounty?{" "}
          <Link href="/register" className="font-semibold text-blue hover:text-blue-dark transition-colors">
            Join free
          </Link>
        </p>
      </div>
    </div>
  );
}
