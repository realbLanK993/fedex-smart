import { TeamMemberCard } from "@/components/common/team-member";
import { teamData } from "@/lib/data";

export default function TeamsPage() {
  return (
    <div className="defined-width mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
        Our Core Team
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
        Meet the dedicated faculty members from various departments across IIT
        Madras who drive the research and innovation at the FedEx SMART Centre.
      </p>

      {/* Team Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData.map((member) => (
          <TeamMemberCard
            key={member.id} // Use a unique ID from your data
            imageUrl={member.imageUrl} // Will show placeholder if undefined
            name={member.name}
            title={member.title}
            profileLink={member.profileLink}
          />
        ))}
      </div>
    </div>
  );
}
