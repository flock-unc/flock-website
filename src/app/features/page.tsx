import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/features/FeatureCard";
import { ALL_FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Features — Flock",
  description: "Discover all the features that make Flock the best way to find your friends and explore campus.",
};

export default function FeaturesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Features"
          subtitle="Everything you need to stay connected and find the action on campus"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
