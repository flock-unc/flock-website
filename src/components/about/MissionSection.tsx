import Container from "@/components/ui/Container";

export default function MissionSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Why We Built Flock
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-dark">
          <p>
            College is supposed to be social, but figuring out where everyone is
            can feel impossible. Group chats get buried, plans fall through, and
            you end up staying in when something great was happening two blocks
            away.
          </p>
          <p>
            Flock fixes that. We built a real-time heatmap that shows you where
            people are gathering — no check-ins, no posts, just live activity.
            Add your friends, see where your crew is, and make plans on the fly.
          </p>
          <p>
            Privacy isn&apos;t an afterthought. We never track you at home or
            while driving. Your location is only shared at public venues, and
            only with people you choose. We built the privacy filtering into the
            core of the app, not bolted on after.
          </p>
          <p>
            Flock started at UNC Chapel Hill because campus is the perfect place
            for this — a walkable community where knowing where to go changes
            your night. We&apos;re building something that makes real-life
            connection easier, not another app that keeps you on your phone.
          </p>
        </div>
      </Container>
    </section>
  );
}
