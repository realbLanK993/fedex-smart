import { TeamMemberCard } from "@/components/common/team-member";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs components
import { teamCategories, teamData } from "@/lib/data";

export default function TeamPage() {
  // Renamed component function

  return (
    <div className="defined-width px-4 py-16 md:py-24">
      {" "}
      {/* Increased top padding */}
      <section className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
          Our Core Team
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Meet the dedicated faculty members from various departments across IIT
          Madras who drive the research and innovation at the FedEx SMART
          Centre.
        </p>
      </section>
      <Tabs defaultValue={teamCategories[0].value} className="w-full">
        {" "}
        {/* Default to first category */}
        {/* Tab Navigation List */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-10 h-auto">
          {" "}
          {/* Responsive grid for tabs */}
          {teamCategories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="py-2.5"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Tab Content Panels */}
        {teamCategories.map((category) => (
          <TabsContent
            key={category.value}
            value={category.value}
            className="mt-0"
          >
            {" "}
            {/* Removed default margin-top */}
            {/* Filter team data for the current tab */}
            {(() => {
              // IIFE to handle filtering and rendering
              const filteredTeam = teamData.filter(
                (member) => member.category === category.value
              );

              if (filteredTeam.length > 0) {
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTeam.map((member) => (
                      <TeamMemberCard
                        key={member.id}
                        imageUrl={member.imageUrl}
                        name={member.name}
                        title={member.title}
                        profileLink={member.profileLink}
                      />
                    ))}
                  </div>
                );
              } else {
                // Optional: Message if a category has no members yet
                return (
                  <p className="text-center text-muted-foreground py-10">
                    Information for the {category.label} will be updated soon.
                  </p>
                );
              }
            })()}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
