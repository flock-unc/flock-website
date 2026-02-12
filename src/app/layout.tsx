import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flock — Find Your Flock",
  description:
    "See where people are. Find your friends. Discover what's happening around campus in real-time.",
  openGraph: {
    title: "Flock — Find Your Flock",
    description:
      "Real-time social heatmap for college campuses. Now live at UNC Chapel Hill.",
    type: "website",
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
