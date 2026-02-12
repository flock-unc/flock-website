import Hero from "@/components/home/Hero";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import AppShowcase from "@/components/home/AppShowcase";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <AppShowcase />
      <DownloadCTA />
    </>
  );
}
