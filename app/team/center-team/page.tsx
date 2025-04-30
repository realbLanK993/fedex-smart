import { TeamMemberCard } from "@/components/common/team-member";
import { teamData } from "@/lib/data";
import { getPersonDetails } from "@/lib/peopleData";
import { Person, TeamCategory } from "@/lib/types";

export default function CenterTeamPage() {
  const categoryToFilter: TeamCategory = "Center";
  const pageTitle = "Center Team";
  const pageDescription =
    "Meet the dedicated team responsible for the day-to-day operations, project management, and administrative support of the FedEx SMART Centre.";

  // Filter team data for this specific category
  const centerTeam = teamData.filter(
    (member) => member.category === categoryToFilter
  );

  return (
    <main className="defined-width px-4 py-16 md:py-24">
      {/* Header Section */}
      <section className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg text-muted-foreground">{pageDescription}</p>
      </section>

      {/* Team Grid Section */}
      <section>
        {centerTeam.length > 0 ? (
          // Use a potentially smaller grid if fewer members expected
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {centerTeam.map((member) => {
              // Use the helper function for safer lookup
              const personDetails: Person | null = getPersonDetails(
                member.personId
              );

              // If personDetails is null (ID wasn't found in peopleData), skip rendering
              if (!personDetails) {
                console.warn(
                  `Data integrity issue: Person details not found for ID: ${member.personId} on Center Team page.`
                ); // Optional warning
                return null;
              }

              // Render the card if details were found
              return (
                <TeamMemberCard
                  key={member.id} // Use unique ID from TeamMemberRef
                  person={personDetails}
                  roleTitle={member.roleTitle} // Use specific role title if available
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-10">
            Center team information will be updated soon.
          </p>
        )}
      </section>
    </main>
  );
}
