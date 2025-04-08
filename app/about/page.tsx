import { OurImpactCard } from "@/components/common/impact-card";
import {
  Cog,
  Cpu,
  Handshake,
  HeartPulse,
  Leaf,
  Lightbulb,
  Recycle,
  Target,
  TrendingUp,
  Truck,
  Zap,
} from "lucide-react";
import Image from "next/image";

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
      <header className="flex justify-center items-center relative w-full rounded-xl p-8">
        <h1 className="text-3xl font-semibold max-w-[500px] absolute z-[1] top-8 left-8">
          Pioneering Sustainable & Intelligent Logistics Solutions
        </h1>
        <div className="w-[400px] h-[600px] relative">
          <Image
            src={"/warehouse-worker.jpg"}
            alt="Warehouse worker walking."
            width={800}
            height={1280}
            className="w-full"
          />
        </div>
        <h1 className="text-3xl max-w-[500px] font-semibold absolute z-[1] bottom-8 right-8 text-right">
          FedEx SMART
          <p>Smarter. Greener. Healthier.</p>
        </h1>
      </header>
      <main className="flex flex-col gap-32 justify-center items-center mb-32">
        <p className="text-center text-lg">
          The FedEx SMART (Supply Chain Modelling, Algorithms, Research and
          Technology) Centre, hosted at the globally renowned Indian Institute
          of Technology Madras (IIT Madras), stands as a beacon of innovation in
          the logistics and supply chain domain. We are more than just a
          research centre; we are a dynamic ecosystem where academic rigor meets
          industry expertise.
        </p>
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
