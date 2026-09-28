import "./globals.css";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Bounty — Pregnancy & Parenthood Support",
  description:
    "Your trusted companion from bump to baby and beyond. Expert pregnancy advice, baby name inspiration, week-by-week guides, and a welcoming community of parents.",
  keywords: "pregnancy, baby, parenting, baby names, due date calculator, pregnancy week by week, toddler",
  openGraph: {
    title: "Bounty — Pregnancy & Parenthood Support",
    description: "Expert guidance from trying to conceive through to toddlerhood.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-linen text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
