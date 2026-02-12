import type { TeamMember as TeamMemberType } from "@/lib/constants";

export default function TeamMember({ member }: { member: TeamMemberType }) {
  return (
    <div className="text-center">
      <div className="mx-auto h-32 w-32 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-muted text-sm">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          "Photo"
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{member.name}</h3>
      <p className="text-muted">{member.role}</p>
    </div>
  );
}
