import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://masumkamal.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md. Masum Kamal — Graphic Designer",
    template: "%s · Md. Masum Kamal",
  },
  description:
    "Md. Masum Kamal is a graphic designer crafting brand identities, social media creatives, and print design with a sharp eye for typography and color.",
  keywords: [
    "Md. Masum Kamal",
    "Graphic Designer",
    "Brand Identity",
    "Social Media Design",
    "Print Design",
    "Logo Design",
    "Bangladesh Designer",
  ],
  authors: [{ name: "Md. Masum Kamal" }],
  creator: "Md. Masum Kamal",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Md. Masum Kamal — Graphic Designer",
    description:
      "Brand identity, social media creatives, and print design — crafted with intention.",
    siteName: "Md. Masum Kamal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Masum Kamal — Graphic Designer",
    description:
      "Brand identity, social media creatives, and print design — crafted with intention.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Masum Kamal",
    jobTitle: "Graphic Designer",
    url: siteUrl,
    worksFor: { "@type": "Organization", name: "WebBriks" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Gaibandha Government College" },
    knowsAbout: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Branding",
      "Typography",
      "Print Design",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {children}
      </body>
    </html>
  );
}
