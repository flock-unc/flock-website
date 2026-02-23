import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flock-unc.github.io/flock-website"),
  title: "Flock — Find Your Flock",
  description:
    "See where people are. Find your friends. Discover what's happening around campus in real-time.",
  openGraph: {
    title: "Flock — Find Your Flock",
    description:
      "Real-time social heatmap for college campuses. Now live at UNC Chapel Hill.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flock — Find Your Flock",
    description:
      "Real-time social heatmap for college campuses. Now live at UNC Chapel Hill.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
