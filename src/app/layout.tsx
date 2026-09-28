import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { business } from "@/lib/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Idea Dental — General Dentistry in Houston, TX",
  description:
    "Idea Dental provides general, cosmetic, restorative, and orthodontic dentistry in Houston, Texas, for patients of all ages. Hablamos Español.",
};

// LocalBusiness/Dentist structured data built only from verified NAP + hours.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  telephone: "+1-832-664-8640",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77076",
    addressCountry: "US",
  },
  url: "https://www.ideadentistry.com/",
  sameAs: business.social.map((s) => s.href),
  openingHoursSpecification: [
    { dayOfWeek: "Monday", opens: "10:00", closes: "16:00" },
    { dayOfWeek: ["Tuesday", "Wednesday"], opens: "10:00", closes: "18:00" },
    { dayOfWeek: "Thursday", opens: "11:00", closes: "16:00" },
  ].map((h) => ({ "@type": "OpeningHoursSpecification", ...h })),
  knowsLanguage: ["en", "es"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
