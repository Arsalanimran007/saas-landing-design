import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "SaaS Landing Page — Portfolio Project by Arsalan",
  description:
    "A clean and modern SaaS landing page built with Next.js and Framer Motion — created as part of a portfolio project.",
  keywords: ["SaaS", "Landing Page", "Next.js", "Portfolio", "Framer Motion"],
  authors: [{ name: "Arsalan Imran" }],
  metadataBase: new URL("https://your-portfolio-site.com"), // replace with your domain
  openGraph: {
    title: "SaaS Landing Page",
    description:
      "A simple and elegant SaaS landing page design, part of a portfolio project by Arsalan.",
    url: "https://your-portfolio-site.com/saas-landing",
    siteName: "Arsalan's Portfolio",
    images: [
      {
        url: "https://your-portfolio-site.com/og-image.jpg", // optional
        width: 1200,
        height: 630,
        alt: "SaaS Landing Page Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Landing Page",
    description:
      "A clean SaaS UI layout built with Next.js and Tailwind CSS — portfolio piece by Arsalan.",
    site: "@yourtwitter", // optional
    creator: "@yourtwitter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={clsx(dmSans.variable, "antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
