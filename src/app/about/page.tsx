import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MissionSection from "@/components/about/MissionSection";
import TeamMemberCard from "@/components/about/TeamMember";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — Flock",
  description: "Learn about the team behind Flock and why we built it.",
};

export default function AboutPage() {
  return (
    <>
      <MissionSection />

      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading title="The Team" />
          <div className="mt-12 flex justify-center gap-12 flex-wrap">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
