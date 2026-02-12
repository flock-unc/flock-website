import type { Feature } from "@/lib/constants";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="rounded-2xl bg-white p-8 border border-cream-dark">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-flock-light">
        <Icon className="h-6 w-6 text-flock-dark" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h3>
      <p className="mt-2 text-muted leading-relaxed">{feature.description}</p>
    </div>
  );
}
