import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { HERO_FEATURES } from "@/lib/constants";

export default function FeatureHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <SectionHeading
          title="Why Flock?"
          subtitle="Real-time social awareness for your campus life"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {HERO_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-cream p-8 text-center border border-cream-dark"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-flock-light">
                  <Icon className="h-7 w-7 text-flock-dark" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
