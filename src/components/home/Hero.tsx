import Image from "next/image";
import Button from "@/components/ui/Button";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-flock-light px-4 py-1.5 text-sm font-semibold text-flock-dark mb-8">
              Now live at UNC Chapel Hill
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Find Your <span className="text-flock">Flock</span>
            </h1>
            <p className="mt-6 text-lg text-muted-dark max-w-2xl sm:text-xl">
              See where people are gathering. Find your friends. Discover
              what&apos;s happening around campus in real-time.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
              <Button href="#download" variant="primary">
                Download the App
              </Button>
              <Button href="/features" variant="outline">
                See Features
              </Button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="w-full max-w-xs flex-shrink-0">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-cream-dark">
              <Image
                src={`${BASE_PATH}/images/screenshot-login.png`}
                alt="Flock app login screen"
                width={1284}
                height={2778}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
