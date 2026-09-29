"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Getting Pregnant",
    href: "/getting-pregnant",
    children: [
      { label: "Before you begin", href: "/getting-pregnant#before" },
      { label: "Am I pregnant?", href: "/getting-pregnant#signs" },
      { label: "Ovulation calculator", href: "/getting-pregnant#ovulation" },
      { label: "Fertility support", href: "/getting-pregnant#fertility" },
    ],
  },
  {
    label: "Pregnancy & Birth",
    href: "/pregnancy",
    children: [
      { label: "Week by week", href: "/pregnancy#week-by-week" },
      { label: "Due date calculator", href: "/due-date" },
      { label: "Diet and health", href: "/pregnancy#health" },
      { label: "Birth preparation", href: "/pregnancy#birth" },
      { label: "Hospital bag checklist", href: "/checklist" },
      { label: "Miscarriage and loss", href: "/support" },
    ],
  },
  {
    label: "Baby Names",
    href: "/baby-names",
    children: [
      { label: "Name finder", href: "/baby-names" },
      { label: "Boys' name trends", href: "/baby-names?gender=boy" },
      { label: "Girls' name trends", href: "/baby-names?gender=girl" },
      { label: "Regional names", href: "/guides/regional-baby-names" },
      { label: "Names by origin", href: "/guides/baby-name-origins" },
      { label: "Celebrity names", href: "/guides/celebrity-baby-names" },
      { label: "Name trends", href: "/guides/baby-name-trends" },
    ],
  },
  {
    label: "Baby",
    href: "/baby",
    children: [
      { label: "Month by month", href: "/baby#milestones" },
      { label: "Feeding", href: "/baby#feeding" },
      { label: "Sleep", href: "/baby#sleep" },
      { label: "Weaning", href: "/guides/weaning" },
      { label: "Safer sleep", href: "/guides/safer-sleep" },
      { label: "Postnatal depression", href: "/guides/postnatal-depression" },
    ],
  },
  {
    label: "Toddler",
    href: "/toddler",
    children: [
      { label: "Development stages", href: "/toddler#development" },
      { label: "Behaviour", href: "/toddler#behaviour" },
      { label: "Activities", href: "/toddler#activities" },
      { label: "Immunisations", href: "/guides/toddler-immunisations" },
    ],
  },
  { label: "Family", href: "/family", children: [
    { label: "Family overview", href: "/family" },
    { label: "A to Z of family illness", href: "/guides/family-illness-a-z" },
    { label: "All guides", href: "/guides" },
  ] },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-mist"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
  <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
  <path d="M5 21h14" />
</svg>
            </div>
            <span className="font-heading text-xl font-semibold tracking-tight text-ink">
              bounty
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate hover:text-ink transition-colors rounded-lg hover:bg-mist/60"
                >
                  {item.label}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-56">
                    <div className="bg-white rounded-xl shadow-lg border border-mist/80 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate hover:text-ink hover:bg-mist/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

                    {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div 
              className={`relative flex items-center h-10 transition-all duration-300 ease-out overflow-hidden rounded-full ${
                searchOpen ? "w-48 sm:w-64 bg-mist shadow-inner" : "w-10 bg-transparent hover:bg-mist/60"
              }`}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center text-slate hover:text-ink z-10 transition-colors"
                aria-label={searchOpen ? "Close search" : "Open search"}
              >
                {searchOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                )}
              </button>
              
              <form role="search" action="/search" className="flex-1 flex items-center w-full h-full pl-10 pr-4" onSubmit={(e) => { if(!searchOpen) e.preventDefault(); }}>
                <input
                  type="search"
                  name="q"
                  placeholder="Search..."
                  className={`w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate/60 transition-opacity duration-300 ${
                    searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  tabIndex={searchOpen ? 0 : -1}
                />
              </form>
            </div>
            <Link
              href="/login"
              className="hidden md:inline-block text-sm font-medium text-slate hover:text-ink transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="hidden md:inline-flex items-center h-9 px-4 text-sm font-semibold text-white bg-sage hover:bg-sage-dark rounded-full transition-colors"
            >
              Join free
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-mist/60 text-slate"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>

        
                  className="text-slate hover:text-ink"
                  aria-label="Close search"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-mist">
              <span className="font-heading text-lg font-semibold">bounty</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-mist text-slate"
                aria-label="Close menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-5">
              {navItems.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium text-ink border-b border-mist/60"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="p-5 border-t border-mist space-y-3">
              <Link
                href="/register"
                className="flex items-center justify-center h-11 bg-sage hover:bg-sage-dark text-white font-semibold rounded-full transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Join free
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center h-11 border border-mist text-slate font-medium rounded-full hover:bg-mist/50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
