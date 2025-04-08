import { TeamMemberCard } from "@/components/common/team-member";
import { TeamMember } from "@/lib/types";

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Prof. Arshinder Kaur",
    title: "Professor, Dept. of Management Studies | PI, Sustainability",
    profileLink: "https://doms.iitm.ac.in/index.php/arshinder-kaur", // Replace with actual links from your site data
  },
  {
    id: 2,
    name: "Prof. C Rajendran",
    title: "Professor, Dept. of Management Studies | Co-PI, Sustainability",
    profileLink: "https://doms.iitm.ac.in/index.php/prof-c-rajendran", // Replace link
  },
  {
    id: 3,
    name: "Prof. R P Sundararaj",
    title: "Professor, Dept. of Management Studies | Co-PI, Sustainability",
    profileLink: "https://doms.iitm.ac.in/index.php/prof-r-p-sundararaj", // Replace link
  },
  {
    id: 4,
    name: "Prof. Nargis Pervin",
    title:
      "Associate Professor, Dept. of Management Studies | Co-PI, Sustainability",
    profileLink: "https://doms.iitm.ac.in/index.php/dr-nargis-pervin", // Replace link
  },
  {
    id: 5,
    name: "Prof. Vaibhav Chawla",
    title:
      "Assistant Professor, Dept. of Management Studies | Co-PI, Sustainability",
    profileLink: "https://doms.iitm.ac.in/index.php/dr-vaibhav-chawla", // Replace link
  },
  {
    id: 6,
    name: "Prof. Usha Mohan",
    title: "Associate Professor, Dept. of Civil Engg. | Co-PI, Sustainability",
    profileLink: "https://civil.iitm.ac.in/faculty/ushamohan/", // Replace link
  },
  {
    id: 7,
    name: "Prof. Chandrashekar L",
    title: "Assistant Professor, Dept. of CSE | PI, Algorithms & ML",
    profileLink: "https://www.cse.iitm.ac.in/~chandrashekhar/", // Replace link
  },
  {
    id: 8,
    name: "Prof. N S Narayanaswamy",
    title: "Professor, Dept. of CSE | Co-PI, Algorithms & ML",
    profileLink: "https://www.cse.iitm.ac.in/~swamy/", // Replace link
  },
  {
    id: 9,
    name: "Prof. Rupesh Nasre",
    title: "Associate Professor, Dept. of CSE | Co-PI, Algorithms & ML",
    profileLink: "https://www.cse.iitm.ac.in/~rupesh/", // Replace link
  },
  // Add ALL other faculty members listed in your core team...
  {
    id: 10,
    name: "Prof. B. Ravindran",
    title: "Professor, Dept. of CSE | Head, RBCDSAI", // Role might need adjustment
    profileLink: "https://www.cse.iitm.ac.in/~ravi/",
  },
  {
    id: 11,
    name: "Prof. Anil Prabhakar",
    title: "Professor, Dept. of Electrical Engg. | Co-PI, Algorithms & ML",
    profileLink: "https://www.ee.iitm.ac.in/anilpr/",
  },
  {
    id: 12,
    name: "Prof. Rahul Marathe",
    title: "Associate Professor, Dept. of CSE | Co-PI, Algorithms & ML",
    profileLink: "https://www.cse.iitm.ac.in/~marathe/",
  },
  {
    id: 13,
    name: "Prof. Babji Srinivasan",
    title: "Associate Professor, Dept. of Chemical Engg. | PI, Worker Wellness",
    profileLink: "https://chemeng.iitm.ac.in/babjis/",
  },
  {
    id: 14,
    name: "Prof. S R Chakravarthy",
    title: "Professor, Dept. of Aerospace Engg. | Co-PI, Infrastructure",
    profileLink: "https://aero.iitm.ac.in/personnel/dr-s-r-chakravarthy/",
  },
  {
    id: 15,
    name: "Prof. Rajagopalan Srinivasan",
    title: "Professor, Dept. of Chemical Engg. | Co-PI, Worker Wellness",
    profileLink: "https://chemeng.iitm.ac.in/raj/",
  },
  {
    id: 16,
    name: "Prof. Gitakrishnan Ramadurai",
    title: "Professor, Dept. of Civil Engg. | PI, Infrastructure",
    profileLink: "https://civil.iitm.ac.in/faculty/gitakrishnan/",
  },

  // ... continue for all faculty listed in the PPT Core Team
];

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
