import Link from "next/link";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "Getting Pregnant", href: "/getting-pregnant" },
      { label: "Pregnancy & Birth", href: "/pregnancy" },
      { label: "Baby Names", href: "/baby-names" },
      { label: "Baby 0–12 months", href: "/baby" },
      { label: "Toddler", href: "/toddler" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Due date calculator", href: "/due-date" },
      { label: "Ovulation calculator", href: "/getting-pregnant#ovulation" },
      { label: "Name finder", href: "/baby-names" },
      { label: "Baby essentials checklist", href: "/pregnancy#essentials" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About Bounty", href: "#" },
      { label: "Our history", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Advertise with us", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of use", href: "#" },
      { label: "Cookie policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-8">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:max-w-xs shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="9" r="4" fill="white" />
                  <ellipse cx="12" cy="18" rx="6" ry="4" fill="white" opacity="0.7" />
                </svg>
              </div>
              <span className="font-heading text-xl font-semibold text-white tracking-tight">
                bounty
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Your trusted companion from bump to baby and beyond. Expert-backed guidance for every step of the journey.
            </p>
            <div className="flex items-center gap-4">
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", path: <><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/></> },
                { label: "YouTube", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    {social.path || <path d={social.d} />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold text-white mb-4">{col.heading}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Bounty. A Joy Family Company. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with care for every parent.
          </p>
        </div>
      </div>
    </footer>
  );
}
