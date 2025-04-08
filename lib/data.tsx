// src/data/researchDetailsData.ts
import {
  CommonPageProps,
  EventItem,
  OpportunityItem,
  ResearchListItem,
  TeamMember,
} from "@/lib/types"; // Assuming your type definition is here

// Helper function to create faculty objects easily (Adjust departments/institutions as needed)
const createFaculty = (
  name: string,
  designation = "Professor",
  department = "Multiple Departments Involved"
) => ({
  name: `Prof. ${name}`,
  designation,
  location: { department, institution: "IIT Madras" },
});

// Define the detailed data for each research slug
export const researchDetailsData: { [key: string]: CommonPageProps } = {
  "digital-sustainable-supply-chain": {
    // Slug for P1
    title: "Digital and Sustainable Supply Chain Modelling & Analytics",
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link:
      "https://images.pexels.com/photos/4342127/pexels-photo-4342127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Sustainable logistics concept
    content: `
          <p>This flagship project focuses on integrating sustainability and digital transformation into supply chain management. Key objectives include:</p>
          <ul class="list-disc space-y-2 pl-6 my-4">
            <li>Developing predictive models for critical factors like lead time estimation, customer demand forecasting, and capacity planning using AI and ML techniques.</li>
            <li>Creating frameworks for end-to-end optimization, integrating planning, production, inventory, distribution, and routing.</li>
            <li>Exploring digital twin technologies and platforms for seamless tracking, monitoring, and optimization of shipments, warehousing, and packaging globally.</li>
            <li>Assessing and improving multi-modal global logistics, identifying inefficiencies and enhancing collaboration among stakeholders (governments, industries).</li>
            <li>Building supply chain resilience through route diversification and robust risk management frameworks.</li>
            <li>Incorporating Environmental, Social, and Governance (ESG) factors, developing frameworks for socially responsible supply chains, and understanding the role of digital tools in worker empowerment and well-being.</li>
            <li>Optimizing specific areas like Air Cargo operations and mining customer voice data for actionable insights.</li>
          </ul>
          <p>The project aims to provide actionable models, tools, and frameworks aligned with sustainability goals (like SDG13) for a greener and more efficient logistics sector.</p>
        `, // Combined objectives from PPT/website text
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Arshinder Kaur",
        "Professor",
        "Dept. of Management Studies (PI)"
      ),
      createFaculty("C Rajendran", "Professor", "Dept. of Management Studies"),
      createFaculty(
        "R P Sundararaj",
        "Professor",
        "Dept. of Management Studies"
      ),
      createFaculty(
        "Usha Mohan",
        "Associate Professor",
        "Dept. of Civil Engg."
      ),
      createFaculty(
        "Nargis Pervin",
        "Associate Professor",
        "Dept. of Management Studies"
      ),
      createFaculty(
        "Vaibhav Chawla",
        "Assistant Professor",
        "Dept. of Management Studies"
      ),
    ],
  },

  "human-machine-collaboration-wellness": {
    // Slug for P2
    title:
      "Holistic Human-Machine Collaboration with Biomedical-Cognitive Measures",
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link:
      "https://images.pexels.com/photos/844167/pexels-photo-844167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Worker with tech/wearable
    content: `
          <p>This project focuses on enhancing the well-being, safety, and performance of the logistics workforce through advanced human-machine interaction and physiological monitoring. Core areas include:</p>
          <ul class="list-disc space-y-2 pl-6 my-4">
            <li><strong>Worker Health Management:</strong> Monitoring physical fatigue using bio-signals (e.g., via smart insoles with FSR/IMU sensors assessing load distribution, gait, posture) and estimating cognitive workload, vigilance, and mental fatigue using eye-tracking parameters.</li>
            <li><strong>Advanced Worker Training:</strong> Synchronizing data from processes, automation systems, and human activities to identify areas for improvement. Utilizing VR environments for immersive training, process optimization, and safety drills. Providing real-time visual/audio feedback and assistance.</li>
            <li><strong>Human-Machine Teaming:</strong> Developing algorithms for collaborative robots (COBOTS) to effectively resolve human-human and human-machine conflicts. Enabling dynamic task/work switching between humans and machines based on situation awareness and task significance.</li>
            <li><strong>Safety Monitoring Technologies:</strong> Implementing real-time systems like AI-powered PPE compliance detection, ergonomic posture analysis for injury prevention, and AI-driven driver safety monitoring (drowsiness, distraction detection).</li>
          </ul>
          <p>The ultimate goal is to create safer, healthier, and more efficient work environments by seamlessly integrating technology to support human capabilities and mitigate risks.</p>
        `, // Combined objectives and tech highlights
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Babji Srinivasan",
        "Associate Professor",
        "Dept. of Chemical Engg. (PI)"
      ),
      createFaculty(
        "Rajagopalan Srinivasan",
        "Professor",
        "Dept. of Chemical Engg."
      ),
      // Ramadurai could also be relevant for driver safety aspects
    ],
  },

  "accelerating-learning-algorithms": {
    // Slug for P3
    title: "Accelerating Learning and Algorithms for Logistics Problems",
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Code/Abstract AI
    content: `
          <p>This project aims to develop sophisticated algorithms, machine learning techniques, and software systems to significantly improve the efficiency and decision-making capabilities within the logistics domain. Key focus areas involve:</p>
          <ul class="list-disc space-y-2 pl-6 my-4">
            <li><strong>Scalable Optimization Algorithms:</strong> Tackling complex, NP-hard problems like the Capacitated Vehicle Routing Problem (CVRP) and 3D bin packing using advanced techniques, including parallelization for improved scalability.</li>
            <li><strong>Reinforcement Learning (RL) Applications:</strong> Developing RL agents for dynamic optimization tasks, particularly focusing on improving railway network efficiency through intelligent train dispatching and routing, utilizing realistic simulators (OSRD, Flatland). Enhancing profitability and reducing administrative load in linehaul routing.</li>
            <li><strong>Predictive Analytics:</strong> Building models for demand forecasting, employee requirement forecasting, capacity planning, and predictive shipment allocation between different service types.</li>
            <li><strong>Quantum Machine Learning:</strong> Exploring hybrid quantum-classical algorithms to potentially find better or faster solutions for computationally intensive optimization problems in route planning and packing.</li>
            <li><strong>Software Systems & Platforms:</strong> Creating software modules, APIs, and integrated platforms incorporating optimizations (route planning, container sharing, scheduling), data analysis (consignment flow, customer feedback mining), and prediction capabilities. Exploring frameworks like Open Network for Logistics.</li>
            <li><strong>AI-driven Services:</strong> Developing AI-based tools for logistics-specific customer service and electronic Submission Request Gateway (eSRG) processes.</li>
          </ul>
          <p>The project aims to deliver impactful software implementations and fundamental research contributions to enhance various facets of logistics operations.</p>
        `, // Combined objectives and specific techniques
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: [
      createFaculty(
        "Chandrashekar Lakshminarayanan",
        "Assistant Professor",
        "Dept. of CSE (PI)"
      ),
      createFaculty("N S Narayanaswamy", "Professor", "Dept. of CSE"),
      createFaculty("Rupesh Nasre", "Associate Professor", "Dept. of CSE"),
      createFaculty("Anil Prabhakar", "Professor", "Dept. of Electrical Engg."),
      createFaculty("Rahul Marathe", "Associate Professor", "Dept. of CSE"),
      // Ravindran might be involved via RBCDSAI
    ],
  },

  "autonomous-delivery-integration": {
    // Slug for P4
    title: "Development of Modules for Integrating Autonomous Delivery Agents",
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link:
      "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Drone/Delivery Robot
    content: `
          <p>As autonomous delivery vehicles like drones and rovers become more prevalent, this project focuses on creating the necessary infrastructure and integration modules to enable their seamless and efficient adoption within existing logistics frameworks. Objectives include:</p>
          <ul class="list-disc space-y-2 pl-6 my-4">
            <li><strong>Integration Module Development:</strong> Building specialized software and hardware interface modules to bridge the gap between autonomous vehicle operators, logistics companies, and regulators.</li>
            <li><strong>Operational Frameworks:</strong> Designing and testing operational models for various autonomous systems, particularly focusing on drones for mid-mile (e.g., utilizing high-payload vehicles like the ePlane e100) and last-mile deliveries, including concepts like delivery from 'Gateways' to local pickup points.</li>
            <li><strong>Regulatory Compliance & Safety:</strong> Ensuring developed systems and operational procedures adhere to current and emerging regulatory requirements and maintain high safety standards.</li>
            <li><strong>Electric Vehicle (EV) Logistics Optimization:</strong> Optimizing EV fleet size (sub-1 ton to trailers) and charging infrastructure (location, type) for different distribution ranges, considering trip patterns, dwell times, and lifecycle costs/emissions.</li>
            <li><strong>Delivery Agent Well-being Study:</strong> Conducting comprehensive data-driven analysis (surveys, sensors, dashcams) of delivery associates' well-being across different vehicle types, shifts, and regions, and evaluating the impact of interventions.</li>
          </ul>
          <p>The project aims to facilitate the practical integration of advanced delivery vehicles, improving efficiency, reducing carbon footprint, and ensuring operational viability.</p>
        `, // Combined objectives and EV/Drone details
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Gitakrishnan Ramadurai",
        "Professor",
        "Dept. of Civil Engg. (PI)"
      ),
      createFaculty(
        "S R Chakravarthy",
        "Professor",
        "Dept. of Aerospace Engg."
      ),
      // Faculty from P2 might be involved in delivery agent well-being study
    ],
  },

  // --- Details for Highlighted Areas (Derived from Projects) ---

  "rl-rail-network": {
    title: "Reinforcement Learning for Rail Network Efficiency",
    date: "Ongoing Research",
    type: "Research Area",
    header_img_link:
      "https://images.pexels.com/photos/259819/pexels-photo-259819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Train track/Signal
    content: `
            <p>This research focuses on applying Reinforcement Learning (RL) to address inefficiencies in railway logistics, particularly the low speed and priority often given to freight trains in India. The goal is to develop RL-based systems that can provide real-time recommendations for train dispatching (reordering at junctions/stations) and routing to optimize network throughput, reduce delays, and improve overall efficiency.</p>
            <p>Key methodologies include:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li>Utilizing realistic, open-source railway simulators like OSRD (Open Source Railways Designer) and Flatland to create complex environments for training RL agents.</li>
                <li>Developing sophisticated RL algorithms capable of handling stochastic delays, complex network topologies, and varying traffic conditions.</li>
                <li>Starting with smaller scale problems (synthetic and real-world) and scaling up towards the complexity of the Indian Railways network.</li>
                <li>Evaluating the translational impact of RL-driven recommendations on timetabling and dynamic operations.</li>
            </ul>
            <p>This work falls under the broader 'Algorithms & ML' vertical, aiming to leverage AI for significant improvements in rail freight logistics.</p>
        `,
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Chandrashekar Lakshminarayanan",
        "Assistant Professor",
        "Dept. of CSE (Lead)"
      ),
      createFaculty("N S Narayanaswamy", "Professor", "Dept. of CSE"),
      createFaculty("Rupesh Nasre", "Associate Professor", "Dept. of CSE"),
    ],
  },

  "drone-logistics-operations": {
    title: "Drone Delivery Operations & Feasibility (Mid/Last-Mile)",
    date: "Ongoing Research",
    type: "Research Area",
    header_img_link:
      "https://images.pexels.com/photos/1320694/pexels-photo-1320694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Drone flying over landscape
    content: `
            <p>This research investigates the practical application and operational models for drone-based delivery within the logistics network, focusing on both mid-mile and last-mile scenarios. It explores the potential to reconfigure traditional logistics flows by leveraging aerial capabilities.</p>
            <p>Key aspects include:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li><strong>Mid-Mile Feasibility:</strong> Assessing the viability of using higher payload drones (e.g., targeting 100kg payload capacity, potentially like the ePlane e100 under development) to transport goods between distribution centers or from distribution centers to 'Gateways' closer to urban areas, potentially reducing reliance on expensive central dispatch centers.</li>
                <li><strong>Last-Mile Innovation:</strong> Designing models where drones deliver from distribution centers or Gateways to localized, potentially mobile or minimally staffed, pickup points for final delivery, optimizing costs associated with last-mile nodes.</li>
                <li><strong>Integration Modules:</strong> Developing the necessary software and communication protocols for seamless integration between logistics service providers, drone operators (UAS operators), and regulatory bodies.</li>
                <li><strong>Optimization Problems:</strong> Addressing complex routing and scheduling challenges like the min-cost parallel drone scheduling vehicle routing problem, energy-constrained multi-visit TSP with drones, and locating optimal landing/rendezvous points.</li>
                <li><strong>Regulatory Adherence:</strong> Ensuring all proposed models and technologies align with current drone regulations (e.g., MTOW limits).</li>
            </ul>
            <p>This research is part of the 'Logistics Infrastructure' vertical, aiming to integrate advanced aerial vehicles into the logistics ecosystem effectively.</p>
        `,
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Gitakrishnan Ramadurai",
        "Professor",
        "Dept. of Civil Engg. (Lead)"
      ),
      createFaculty(
        "S R Chakravarthy",
        "Professor",
        "Dept. of Aerospace Engg."
      ),
    ],
  },

  "ev-fleet-charging-optimization": {
    title: "EV Fleet Size & Charging Network Optimization",
    date: "Ongoing Research",
    type: "Research Area",
    header_img_link:
      "https://images.pexels.com/photos/7195617/pexels-photo-7195617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Electric truck charging
    content: `
            <p>With the growing push towards electrification in logistics, this research focuses on optimizing the deployment of Electric Vehicle (EV) fleets and the supporting charging infrastructure across different operational scales: city (last-mile, sub-1 ton), regional (mid-mile, sub-12 ton), and national (long-distance trucking).</p>
            <p>The methodology involves:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li>Estimating spatial trip patterns and trip length distributions for different vehicle types and operational contexts.</li>
                <li>Utilizing real-world data on truck operations, including typical routes, dwell times, and charging/discharging characteristics of relevant EV models.</li>
                <li>Developing optimization models (potentially using heuristic algorithms and simulation) to determine the optimal EV battery sizes and fleet sizes concurrently with the strategic placement and types (e.g., speed, capacity) of charging facilities.</li>
                <li>Optimizing routing strategies specifically for EV constraints (range, charging time).</li>
                <li>Exploring various objective functions beyond cost minimization, such as Life Cycle Assessment (LCA) emissions, energy consumption, and overall lifecycle cost.</li>
            </ul>
            <p>This research, part of the 'Logistics Infrastructure' vertical, aims to provide data-driven tools for planning efficient and sustainable EV adoption in logistics.</p>
        `,
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Gitakrishnan Ramadurai",
        "Professor",
        "Dept. of Civil Engg. (Lead)"
      ),
      // Potentially faculty from Electrical Engg. or Energy Systems
    ],
  },

  "worker-wellness-technologies": {
    title: "Technologies for Logistics Worker Wellness & Safety",
    date: "Ongoing Research",
    type: "Research Area",
    header_img_link:
      "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Wearable tech/Safety gear
    content: `
            <p>This area focuses on the development and application of specific technologies designed to directly monitor, protect, and enhance the well-being and safety of workers in demanding logistics environments like warehouses and driving.</p>
            <p>Key technologies under development/investigation include:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li><strong>Smart Insoles:</strong> Embedding FSR (Force Sensitive Resistor) and IMU (Inertial Measurement Unit) sensors in footwear to track foot pressure, gait cycle, posture, and alignment. This data helps assess load distribution, detect abnormalities, monitor fatigue, and prevent posture-related injuries.</li>
                <li><strong>AI-Powered PPE Compliance Monitoring:</strong> Using camera systems and computer vision algorithms for real-time detection of correct Personal Protective Equipment (PPE) usage (helmets, vests, goggles, etc.), triggering alerts for non-compliance in high-risk areas.</li>
                <li><strong>Virtual Reality (VR) Warehouse Simulation:</strong> Creating immersive virtual environments for layout testing, worker training (safe practice of tasks), process optimization trials, and emergency safety drills without real-world risks.</li>
                <li><strong>Eye-Tracking for Cognitive Analytics:</strong> Employing eye-tracking glasses or systems to monitor workers' focus, cognitive load, and visual attention patterns, aiming to enhance safety, reduce errors, improve task efficiency, and inform targeted training.</li>
                <li><strong>Warehouse Posture Detection:</strong> Real-time monitoring using computer vision to detect improper lifting postures or repetitive strain movements, providing ergonomic feedback to prevent injuries and improve techniques.</li>
                <li><strong>AI Driver Safety Monitoring:</strong> Analyzing driver facial cues, eye movements, and driving patterns via in-cab cameras to detect drowsiness, inattentiveness, and unsafe behaviors, potentially integrated with collision prevention alerts or interventions.</li>
            </ul>
            <p>Falling under the 'Logistics Worker Wellness' vertical, this research seeks practical technological solutions for improving human health and safety within the supply chain.</p>
        `,
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Babji Srinivasan",
        "Associate Professor",
        "Dept. of Chemical Engg. (Lead)"
      ),
      createFaculty(
        "Rajagopalan Srinivasan",
        "Professor",
        "Dept. of Chemical Engg."
      ),
      createFaculty(
        "Gitakrishnan Ramadurai",
        "Professor",
        "Dept. of Civil Engg."
      ), // Relevant for driver/delivery agent aspects
    ],
  },

  "sustainable-resilient-last-mile": {
    title: "Sustainable & Resilient Last-Mile Distribution Framework",
    date: "Ongoing Research",
    type: "Research Area",
    header_img_link:
      "https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Delivery van in city traffic
    content: `
            <p>Last-mile distribution is often the most complex and costly part of the supply chain, with significant environmental and social impacts. This research aims to develop a holistic system design framework enabling logistics operators to establish strategies that are both sustainable and resilient.</p>
            <p>The framework integrates:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li><strong>Three Pillars of Sustainability:</strong> Explicitly balancing Economic Viability (total distribution costs), Environmental Efficiency (GHG and pollutant emissions per delivery), and Social Equity (spatial distribution of externalities like congestion, noise, emissions).</li>
                <li><strong>Four Dimensions of Resilience (R4 Framework):</strong> Ensuring strategies can handle disruptions by being Robust (withstanding shocks), Redundant (having substitutable elements), Resourceful (diagnosing and initiating solutions), and Rapid (restoring functionality quickly).</li>
                <li><strong>Component Models:</strong> Consolidating econometric consumer behaviour models, distribution-agnostic continuous approximation frameworks (for cost/emission estimation), and domain-agnostic R4 resilience assessment methods.</li>
            </ul>
            <p>The objective is to provide e-retailers and policymakers with actionable, data-driven insights to design last-mile systems capable of handling routine fluctuations and major disruptions while balancing economic, environmental, and social goals. This work contributes to both the 'Supply Chain Sustainability' and 'Logistics Infrastructure' verticals.</p>
        `,
    links: {
      /* Placeholder links */ common: "#",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    faculty: [
      createFaculty(
        "Gitakrishnan Ramadurai",
        "Professor",
        "Dept. of Civil Engg. (Lead)"
      ),
      // Likely involves PhD student Anmol Pahwa mentioned in PPT
      createFaculty(
        "Arshinder Kaur",
        "Professor",
        "Dept. of Management Studies"
      ), // For sustainability aspects
    ],
  },
  // Add entries for "air-cargo-optimization", "customer-voice-mining" etc. following the same pattern,
  // extracting details from the relevant project descriptions (mainly P1).
};

// src/data/eventsData.ts

// Populate with data from PPT and planned events
export const eventsData: EventItem[] = [
  // --- Past Events (Order doesn't matter here, we'll sort later) ---
  {
    id: "seminar-rodrigues",
    title:
      "The 21st Century Lean-Agile Global Supply Chains: Nexus between Business & Technology",
    description:
      "Exploring the intersection of modern supply chain strategies and technological advancements.",
    tag: "Seminar",
    date: new Date("2024-10-10"), // From PPT
    speaker: "Mr. Allan Rodrigues",
    affiliation:
      "MD, The Business Binnacle Ltd (Retired Commander, Indian Navy)",
    img_link:
      "https://images.pexels.com/photos/1181344/pexels-photo-1181344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Global/Tech/Business
    learn_more_link: "#", // Add link if available
  },
  {
    id: "seminar-ganesh",
    title:
      "Intensify Brilliance in Supply Chain and Logistics with Gen AI Models",
    description:
      "Dr. K Ganesh discussed how Generative AI can revolutionize supply chain and logistics operations.",
    tag: "Seminar",
    date: new Date("2024-05-31"), // From Website Content
    speaker: "Dr. K Ganesh",
    affiliation:
      "Partner & Global Lead of MSC Center of Competence, McKinsey & Company",
    img_link:
      "https://images.pexels.com/photos/17483870/pexels-photo-17483870/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-proje.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: AI/Abstract
    learn_more_link: "#",
  },
  {
    id: "seminar-doreswamy",
    title: "Applications of Optimization in Business",
    description:
      "Ms. Goda Doreswamy shared insights on practical applications of optimization techniques in a business context.",
    tag: "Seminar",
    date: new Date("2024-04-25"), // From Website Content
    speaker: "Ms. Goda Doreswamy",
    affiliation: "VP, Data Science, Swiggy",
    img_link:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Charts/Analytics
    learn_more_link: "#",
  },
  {
    id: "seminar-thakkar",
    title:
      "Emerging challenges and Opportunities in the Transportation and Logistics sector",
    description:
      "Prof. Jitesh Thakkar provided an overview of the current landscape and future trends in transportation and logistics.",
    tag: "Seminar",
    date: new Date("2024-04-18"), // From Website Content
    speaker: "Prof. Jitesh J Thakkar",
    affiliation: "Prof & Dean (Academics), Gati Shakti Vishwavidyalaya",
    img_link:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Logistics/Infrastructure
    learn_more_link: "#",
  },
  {
    id: "seminar-goyal",
    title: "Unified Logistics Interface Platform (ULIP): a game changer?",
    description:
      "Mr. Vinay Goyal discussed the potential impact of ULIP on the Indian logistics ecosystem.",
    tag: "Seminar",
    date: new Date("2024-04-05"), // From Website Content
    speaker: "Mr. Vinay Goyal",
    affiliation: "Founder & CEO, Instavans Logistics (P) Ltd",
    img_link:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Platform/Interface/India Map
    learn_more_link: "#",
  },
  {
    id: "seminar-akella",
    title: "Interesting Logistics Problems in India",
    description:
      "Mr. Brahmayya Akella highlighted unique challenges and problems within the Indian logistics context.",
    tag: "Seminar",
    date: new Date("2024-03-28"), // From Website Content
    speaker: "Mr. Brahmayya Akella",
    affiliation:
      "Co-founder & Chief Strategy Officer, Mera Transport Exchange (p) Ltd",
    img_link:
      "https://images.pexels.com/photos/163726/logistics-network-business-industry-163726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Map/Network India
    learn_more_link: "#",
  },
  {
    id: "seminar-yamarthy",
    title: "Career in Logistics & Essence of Upskilling",
    description:
      "Mr. Ravikanth Yamarthy discussed career paths in logistics and the importance of continuous learning.",
    tag: "Seminar",
    date: new Date("2024-07-01"), // Placeholder Date - Update if known
    speaker: "Mr. Ravikanth Yamarthy",
    affiliation: "CEO, Logistics Sector Skill Council",
    img_link:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: People/Learning/Career
    learn_more_link: "#",
  },
  {
    id: "seminar-kadavan",
    title: "The Future of Logistics: Technology-Driven Solutions",
    description:
      "Mr. Vinod Alex Kadavan explored how technology is shaping the future of the logistics industry.",
    tag: "Seminar",
    date: new Date("2024-08-01"), // Placeholder Date - Update if known
    speaker: "Mr. Vinod Alex Kadavan",
    affiliation: "Director-Sea Vantage, Founder - Insites Technology",
    img_link:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Future Tech/Abstract
    learn_more_link: "#",
  },

  // --- Upcoming/Planned Events ---
  {
    id: "hackathon-shastra-2025",
    title: "Logistics Innovation Challenge @ Shastra 2025",
    description:
      "A grand challenge hackathon focused on solving pressing logistics problems using data and technology. Details coming soon!",
    tag: "Hackathon",
    date: new Date("2025-01-15"), // Placeholder Date in Jan 2025
    img_link:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Code/Hackathon
    learn_more_link: "#", // Update when details available
  },
  {
    id: "seminar-mohan-asu",
    title: "Seminar by Redington Srinivasan International Visiting Chair",
    description:
      "Prof. Gopalakrishnan Mohan from Arizona State University will deliver a seminar (topic TBA).",
    tag: "Seminar",
    date: new Date("2025-02-01"), // Placeholder Future Date - Update when scheduled
    speaker: "Prof. Gopalakrishnan Mohan",
    affiliation: "Arizona State University, WPC School of Business",
    img_link:
      "https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Speaker/University/Global
    learn_more_link: "#",
  },
  // Add workshops or other events mentioned if applicable
];

// Define categories for filtering
export const eventCategories: EventItem["tag"][] = [
  "Seminar",
  "Workshop",
  "Hackathon",
  "Other",
];

// Populate with types of opportunities based on Centre's activities
export const opportunitiesData: OpportunityItem[] = [
  {
    id: "intern-summer-2024", // Specific ID
    title: "Summer Internship (May-July 2024)", // Specific Title
    type: "Internship",
    status: "Completed", // Updated status
    description:
      "The application window for the 2024 Summer Internship is now closed. 24 candidates were selected to work on projects across various domains.",
    // Store the list here if needed for a detail view later, but keep main description concise.
    details: `Selected Candidates:\nArshit Nimit Mankodi, Mohd Owais Siddiqui, Sharanyaa A, Vignesh Senthilnathan, Anishwar R, Soorya S, Reshma K, Vidhyamahaasree D, Dhanush Sivasarathi K, Y Kumari Sai Teja, Krishnanunni U J, Sathyadharini S, Balamurali Senthil Velan, Nivedya Madhu, Harsh Chordia, Srivarshan AM, Pawar Devesh Pramod, Keyur Dhananjay Joshi, Chinmay Gurujee, Aditya Chincholkar, Vignesh Aravindh B, Pandiri Veeresh Kumar, K. Harsha Vardhan, S. Sundar Subramanian`,
    link: "#", // No active link as it's closed
  },
];

// Extract unique types for the filter dropdown
export const opportunityTypes = [
  "All Opportunities",
  ...Array.from(new Set(opportunitiesData.map((item) => item.type))),
];

export const researchListData: ResearchListItem[] = [
  // --- Main 5-Year Projects ---
  {
    id: "p1",
    title: "Digital and Sustainable Supply Chain Modelling & Analytics",
    vertical: "Supply Chain Sustainability",
    slug: "digital-sustainable-supply-chain",
  },
  {
    id: "p2",
    title:
      "Holistic Human-Machine Collaboration with Biomedical-Cognitive Measures",
    vertical: "Logistics Worker Wellness",
    slug: "human-machine-collaboration-wellness",
  },
  {
    id: "p3",
    title: "Accelerating Learning and Algorithms for Logistics Problems",
    vertical: "Algorithms & ML",
    slug: "accelerating-learning-algorithms",
  },
  {
    id: "p4",
    title: "Development of Modules for Integrating Autonomous Delivery Agents",
    vertical: "Logistics Infrastructure",
    slug: "autonomous-delivery-integration",
  },

  // --- Key Research Highlights (Derived from PPT/Website Content & detailed data) ---
  {
    id: "rl-rail-network", // Consistent ID
    title: "Reinforcement Learning for Rail Network Efficiency", // Consistent Title
    vertical: "Algorithms & ML",
    slug: "rl-rail-network", // Consistent Slug
  },
  {
    id: "drone-logistics-operations", // Consistent ID
    title: "Drone Delivery Operations & Feasibility (Mid/Last-Mile)", // Consistent Title
    vertical: "Logistics Infrastructure",
    slug: "drone-logistics-operations", // Consistent Slug
  },
  {
    id: "ev-fleet-charging-optimization", // Consistent ID
    title: "EV Fleet Size & Charging Network Optimization", // Consistent Title
    vertical: "Logistics Infrastructure",
    slug: "ev-fleet-charging-optimization", // Consistent Slug
  },
  {
    id: "worker-wellness-technologies", // Added
    title: "Technologies for Logistics Worker Wellness & Safety",
    vertical: "Logistics Worker Wellness",
    slug: "worker-wellness-technologies", // Added - Ensure this key exists in researchDetailsData
  },
  {
    id: "sustainable-resilient-last-mile", // Added
    title: "Sustainable & Resilient Last-Mile Distribution Framework",
    vertical: "Supply Chain Sustainability", // Or Infrastructure
    slug: "sustainable-resilient-last-mile", // Added - Ensure this key exists in researchDetailsData
  },
];

export const researchVerticals = [
  "All Research",
  ...Array.from(new Set(researchListData.map((item) => item.vertical))),
];

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
