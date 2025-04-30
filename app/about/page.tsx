import AboutHeader from "@/components/common/about-header-img";
import { OurImpactCard } from "@/components/common/impact-card";
import { HeartPulse, Leaf, Lightbulb, TrendingUp } from "lucide-react";
export default function About() {
  const impactData = [
    {
      icon: <Leaf />, // Icon for Sustainability
      color: "text-green-500",
      title: "Environmental Sustainability",
      description:
        "Quantifiably reducing carbon emissions, promoting green practices, and developing tools aligned with SDG13 towards Net Zero logistics.",
    },
    {
      icon: <TrendingUp />,
      color: "text-blue-500",
      title: "Operational Efficiency & Resilience",
      description:
        "Driving performance gains and supply chain robustness through AI, optimization, multimodal operations, and resilient frameworks.",
    },
    {
      icon: <HeartPulse />,
      color: "text-red-500",
      title: "Worker Well-being & Safety",
      description:
        "Improving workforce health, safety, and experience via data insights, ergonomics, cognitive monitoring, and trust-building tech.",
    },
    {
      icon: <Lightbulb />,
      color: "text-yellow-500",
      title: "Innovation & Knowledge",
      description:
        "Creating usable tech solutions, advancing research, fostering collaboration, and building sector capacity via training and knowledge sharing.",
    },
  ];
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-32">
      <AboutHeader />
      <main className="flex flex-col gap-32 justify-center items-center mb-32">
        <p className="text-center text-lg">
          The FedEx SMART (Supply Chain Modelling, Algorithms, Research and
          Technology) Center, hosted at the globally renowned Indian Institute
          of Technology Madras (IIT Madras), stands as a beacon of innovation in
          the logistics and supply chain domain. We are more than just a
          research center; we are a dynamic ecosystem where academic rigor meets
          industry expertise.
        </p>
        {/* --- Vision & Mission Section --- */}
        {/* Add a subtle background pattern/texture to the section if desired */}
        {/* Example using a very light repeating radial gradient */}
        <section className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Our Vision</h2>
            <p className="text-lg text-justify ">
              Our vision is to be at the forefront of the emerging R&amp;D
              landscape at the heart of advanced logistics solutions, leveraging
              advanced technologies to impact efficiency, sustainability, and
              organizational excellence across the supply chain ecosystem. To
              consistently empower our team and stakeholders with the
              application of best practices while creating a repository of
              academic and industrial expertise. To constantly work towards
              building structured frameworks that foster a system of
              standardization, efficiency, strategic decision-making,
              collaboration, and knowledge sharing.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
            <p className=" text-lg text-justify">
              The mission of the FedEx IITM Center of Excellence is to create a
              beacon of excellence that impacts the global industrial landscape
              with cutting-edge sustainable solutions while working towards a
              Net Zero Carbon footprint. It is our endeavour to build powerful
              collaborations between intellectual academia and industry,
              building innovations that push the boundaries of technology and
              innovation. Through a research-driven approach, experiential
              learning, and the development of next-generation technologies, we
              aim to bridge the gaps in the supply chain logistics space.  Our
              drive is geared towards addressing current real-world logistics
              challenges and empowering organizations, researchers, academia,
              and students to thrive in an increasingly interconnected world.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          {" "}
          {/* Optional subtle background */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Translating cutting-edge research into measurable positive change
              across the logistics ecosystem.
            </p>
          </div>
          {/* Grid layout for the cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impactData.map((impact, index) => (
              <OurImpactCard
                key={index} // Essential key prop for mapping
                color={impact.color}
                icon={impact.icon}
                title={impact.title}
                description={impact.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
