import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block rounded-full bg-flock-light px-4 py-1.5 text-sm font-semibold text-flock-dark mb-8">
          Now live at UNC Chapel Hill
        </span>

        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Find Your <span className="text-flock">Flock</span>
        </h1>
        <p className="mt-6 text-lg text-muted-dark max-w-2xl mx-auto sm:text-xl">
          See where people are gathering. Find your friends. Discover
          what&apos;s happening around campus in real-time.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#download" variant="primary">
            Download the App
          </Button>
          <Button href="/features" variant="outline">
            See Features
          </Button>
        </div>

        {/* Phone mockup placeholder */}
        <div className="mt-16 mx-auto max-w-xs">
          <div className="aspect-[9/16] rounded-3xl bg-white border border-cream-dark shadow-lg flex items-center justify-center text-muted text-sm">
            App Screenshot
          </div>
        </div>
      </div>
    </section>
  );
}
