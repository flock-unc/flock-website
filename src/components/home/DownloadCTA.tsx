import Button from "@/components/ui/Button";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="bg-flock py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to find your flock?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Download the app and see what&apos;s happening around campus right
          now.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#" variant="secondary">
            App Store
          </Button>
          <Button href="#" variant="secondary">
            Google Play
          </Button>
        </div>
      </div>
    </section>
  );
}
