// src/data/researchDetailsData.ts
import {
  CommonPageProps,
  EventItem,
  OpportunityItem,
  Person,
  ResearchListItem,
  TeamCategory,
  TeamMemberRef,
  VerticalData,
} from "@/lib/types"; // Assuming your type definition is here
import { Cpu, HeartPulse, Leaf, Truck } from "lucide-react";
import { getPersonDetails } from "./peopleData";

// Helper function to create faculty objects easily (Adjust departments/institutions as needed)
const createFaculty = (
  name: string,
  designation = "Professor",
  department?: string,
  institution = "IIT Madras"
) => ({
  name: `${name}`,
  designation,
  location: { department, institution },
});

// Define the detailed data for each research slug
// const createFacultyList = (profNames: string[]): Faculty[] => {
//   return profNames.map((name) => {
//     const cleanedName = name.replace(/^(Professor|Profesor)\s+/i, "").trim();
//     return {
//       name: `Prof. ${cleanedName}`, // Standardize prefix
//       // NOTE: Designation/Department info is NOT consistently in this text file per professor
//       // So we provide generic defaults here. Use peopleData if more detail is needed.
//       designation: "Professor / Faculty", // Generic designation
//       location: { department: "IIT Madras", institution: "IIT Madras" },
//     };
//   });
// };

// Helper to create researcher list string
const formatResearchers = (researcherNames: string[] | undefined): string => {
  if (!researcherNames || researcherNames.length === 0) return "";
  return `<p class="mt-4"><strong>Researchers:</strong> ${researcherNames.join(
    ", "
  )}</p>`;
};

const getFacultyByIds = (ids: string[]): Person[] => {
  return ids
    .map((id) => getPersonDetails(id)) // Use the helper function
    .filter((person): person is Person => person !== null); // Type guard to filter nulls
};

// Define the detailed data, now using faculty array populated by IDs
export const researchDetailsData: { [key: string]: CommonPageProps } = {
  // --- P1: Digital and Sustainable Supply Chain ---
  "digital-sustainable-supply-chain": {
    title: "Digital and Sustainable Supply Chain Modelling & Analytics", // Title from your P1 description
    date: "Ongoing Research Project (5-Year)", // Contextual date
    type: "Research Project", // Contextual type
    header_img_link: "/slide-pics/supply-chain-sustainability.webp", // Placeholder image path
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
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" }, // Placeholder links
    faculty: getFacultyByIds([
      "arshinder-kaur", // Corresponds to Arshinder Kaur (PI)
      "c-rajendran", // Corresponds to C Rajendran
      "rp-sundararaj", // Corresponds to R P Sundararaj
      "usha-mohan", // Corresponds to Usha Mohan
      "nargis-pervin", // Corresponds to Nargis Pervin
      "vaibhav-chawla", // Corresponds to Vaibhav Chawla
    ]),
  },

  // --- P2: Human-Machine Collaboration & Wellness ---
  "human-machine-collaboration-wellness": {
    title:
      "Holistic Human-Machine Collaboration with Biomedical-Cognitive Measures", // Title from your P2 description
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link: "/slide-pics/worker-wellness.webp", // Placeholder image path
    content: `
            <p>This project focuses on enhancing the well-being, safety, and performance of the logistics workforce through advanced human-machine interaction and physiological monitoring. Core areas include:</p>
            <ul class="list-disc space-y-2 pl-6 my-4">
                <li><strong>Worker Health Management:</strong> Monitoring physical fatigue using bio-signals (e.g., via smart insoles with FSR/IMU sensors assessing load distribution, gait, posture) and estimating cognitive workload, vigilance, and mental fatigue using eye-tracking parameters.</li>
                <li><strong>Advanced Worker Training:</strong> Synchronizing data from processes, automation systems, and human activities to identify areas for improvement. Utilizing VR environments for immersive training, process optimization, and safety drills. Providing real-time visual/audio feedback and assistance.</li>
                <li><strong>Human-Machine Teaming:</strong> Developing algorithms for collaborative robots (COBOTS) to effectively resolve human-human and human-machine conflicts. Enabling dynamic task/work switching between humans and machines based on situation awareness and task significance.</li>
                <li><strong>Safety Monitoring Technologies:</strong> Implementing real-time systems like AI-powered PPE compliance detection, ergonomic posture analysis for injury prevention, and AI-driven driver safety monitoring (drowsiness, distraction detection).</li>
            </ul>
            <p>The ultimate goal is to create safer, healthier, and more efficient work environments by seamlessly integrating technology to support human capabilities and mitigate risks.</p>
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "babji-srinivasan", // Corresponds to Babji Srinivasan (PI)
      "rajagopalan-srinivasan", // Corresponds to Rajagopalan Srinivasan
    ]),
  },

  // --- P3: Accelerating Learning & Algorithms ---
  "accelerating-learning-algorithms": {
    title: "Accelerating Learning and Algorithms for Logistics Problems", // Title from your P3 description
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link: "/slide-pics/ml-algo.webp", // Placeholder image path
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
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "chandrashekar-l", // Corresponds to Chandrashekar Lakshminarayanan (PI)
      "ns-narayanaswamy", // Corresponds to N S Narayanaswamy
      "rupesh-nasre", // Corresponds to Rupesh Nasre
      "anil-prabhakar", // Corresponds to Anil Prabhakar
      "rahul-marathe", // Corresponds to Rahul Marathe
      "b-ravindran", // Corresponds to B. Ravindran (Inferred involvement)
    ]),
  },

  // --- P4: Autonomous Delivery Integration ---
  "autonomous-delivery-integration": {
    title: "Development of Modules for Integrating Autonomous Delivery Agents", // Title from your P4 description
    date: "Ongoing Research Project (5-Year)",
    type: "Research Project",
    header_img_link: "/slide-pics/logistics-infra.webp", // Placeholder image path
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
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "gitakrishnan-ramadurai", // Corresponds to Gitakrishnan Ramadurai (PI)
      "satya-r-chakravarthy", // Corresponds to S R Chakravarthy
    ]),
  },
  "customer-email-analysis": {
    title: "Customer Email Analysis",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/email-llama.jpg", // Dummy Image Path
    content: `
            <p>The project involved analysing customer email to procure insights, streamline requests and automate customer support workflows. The objective was to create the LLAMA Model that could generate a prompt-based classification for emails, identify text elements that need to be preserved and maintain a context- aware approach to this classification.</p>
            <p>The process of the project involved identifying key factors for ground truth labelling for emails, studying LLAMA model exploration, studying preprocessing details and identifying the key technical takeaways. Students explored various areas like delivery services, shipment tracking, privacy and delivery issues to understand the possibilities of applying the LLAMA Model.</p>
            ${formatResearchers([
              "Aditi Deo Singh (Masters)",
              "Bhavya Dhingra (MBA)",
              "sunkeswaram Sreeja (Btech)",
              "Y Kumari Sai Teja (Btech)",
              "Krishnanunni (Btech)",
              "Kurian Philip (MBA)",
            ])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "nargis-pervin",
      "vaibhav-chawla",
      "c-rajendran",
    ]),
  },

  "transshipment-hub-india": {
    title: "Making India a Global Transshipment Hub",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/transshipment.jpg",
    content: `
            <p>The problem statement of this project presented challenges like gaps in policies, regulations, operational efficiency and security measures. The students explored key focus areas like airport infrastructure, customs clearance, security screening, sorting & segregation and IT capability.</p>
            <p>Research Methodology included on-site visits, focussed interviews with key stakeholders and report analysis. A research-driven approach was implemented to understand various transhipment processes, and to study literature-based data regarding policies, challenges and regulatory frameworks.</p>
            ${formatResearchers([
              "Deepthi Ramesh (Masters)",
              "Santhosh Kumar B (MBA)",
              "Dr. Kelitha",
            ])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["arshinder-kaur"]),
  },

  "employee-wellbeing-logistics": {
    title: "Employee Well-being in Logistics Sector",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/wellbeing.jpg",
    content: `
            <p>An interesting project that included questionnaire development using statistical methods. The problem statement included challenges in the logistics sector across different employment levels and the need to build more tools that could differentiate between wellness and well-being measures for logistics workers.</p>
            <p>The students developed a construct that clearly identified the parameters ‘employee wellness’ and ‘employee well-being’ and used this construct to propose applications. Methodology for this project included Exploratory Factory Analysis (EFA), Confirmatory Factor Analysis (CFA), Reliability Analysis and Construct Validity Analysis and the Final Reporting.</p>
            ${formatResearchers(["Deepthi Ramesh (Masters)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "usha-mohan",
      "vaibhav-chawla",
      "arshinder-kaur",
    ]),
  },

  "multimodal-logistics-challenges": {
    title: "Issues and Challenges in Multi-Modal Logistics in India",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/multimodal.jpg",
    content: `
            <p>Project highlights included exploring infrastructure gaps, regulatory hurdles, operational costs, lack of skilled workforce, technological challenges and environmental concerns.</p>
            <p>Students studied the possibilities of routes, types of transport, their feasibility and efficiency outcomes.</p>
            ${formatResearchers(["Kadam (Masters)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["arshinder-kaur"]),
  },

  "emission-optimizing-cvrp": {
    title: "Emission-Optimizing CVRP",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/cvrp.jpg",
    content: `
            <p>This project explored modelling the effect of various parameters on carbon emissions. The students studied estimated emissions and how emission rates connect with different routes. The approach also included permitting dynamic updates to selected parameters based on traffic.</p>
            <p>A research-driven method was adopted, and the project progressed to developing the Comprehensive Modal Emission Model to further the study. This included exploring possibilities of computing on a ‘minimum spanning tree’ and other techniques like DFS/BFS, k-NN tree, and divide and conquer based grid. This approach enabled the further study of capacitated vehicle routing at a million scale.</p>
            <p>The students explored using quantum and classical annealers to identify feasible solutions for route optimization and 3D bin packing. The project's objective also included quadratic unconstrained binary optimization, comparative study of different heuristic solvers, and possible solutions.</p>
            ${formatResearchers([
              "Adithya (Masters)",
              "Priyanga K(Masters)",
              "Himabinduna(Btech)",
              "Isha(Btech)",
              "Rahul (Mtech)",
            ])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds([
      "chandrashekar-l",
      "anil-prabhakar",
      "rupesh-nasre",
      "ns-narayanaswamy",
    ]),
  },

  "ev-charging-fleet-optimization": {
    title: "Optimal EV charging networks and EV fleet size",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/e-fleet.jpg",
    content: `
            <p>Students identified a Vehicle Routing problem and aligned solutions according to the EV fleet size. The proposed solution included approaches to data collection, VRP formulation, a simulation model using real-world data like driver characteristics and charging characteristics.</p>
            <p>The students analysed areas like C2G emissions, WTT emissions to contribute to the simulation model. The project’s proposal considered an optimized fleet size, vehicle type, an optimized charging infrastructure type, various locations, and optimized routing for vehicles.</p>
            ${formatResearchers(["Rokom Perme (PhD)", "Samrudh R (Mtech)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["gitakrishnan-ramadurai"]),
  },

  "sustainable-resilient-last-mile": {
    title:
      "Sustainable and Resilient Last-Mile Distribution: A Holistic System Design Framework",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/sustainable-lastmile.jpg",
    content: `
            <p>In this project, students analysed problems like the impact of internet usage on the growth of e-commerce and how it influenced the behaviour of consumers and ultimately consumer purchases. The rise in demand for JIT deliveries, which significantly impacted increased distribution cost, increased distribution emissions, greenhouse gas and other pollutants.</p>
            <p>The project included the study of sustainable possibilities that could address these problems. The students aligned the feasibility of using electric delivery vehicles, light-delivery vehicles, crowd-sourced delivery, autonomous, and unmanned systems to integrate demand and supply. The developed holistic system design considered the demand and supply modules, which enabled sustainable and resilient last-mile distribution.</p>
            ${formatResearchers(["Blessy(PhD)"])}
            <p class="mt-4 text-sm italic">Note: Project description mentions 'Professor Anmol'. Assuming primary faculty based on related work.</p>
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["gitakrishnan-ramadurai", "arshinder-kaur"]), // Manually assigned based on note
  },

  "drone-delivery-feasibility-india": {
    title: "Feasibility of drone deliveries in India",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/drone-feasibility.jpg",
    content: `
            <p>The project analysed sustainable logistics in India and considered the feasibility of drones for last-mile and rural deliveries.</p>
            ${formatResearchers([
              "Varun Mathivadan (Mtech)",
              "Abirami S (Masters)",
            ])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["satya-r-chakravarthy"]),
  },

  "autonomous-agent-integration-modules": {
    title:
      "Development of Modules capable of integrating with the current infrastructure to enable autonomous Delivery Agents to adopt Advanced Delivery Vehicle",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/autonomous-module.jpg",
    content: `
            <p>Students analysed the impact of logistics efficiency from autonomous delivery vehicles like drones, considering the integration challenges that it presented. The objective included the development of modules that could leverage the management of autonomous delivery agents.</p>
            <p>These modules enabled organizations that had struggled with logistics efficiency to adopt advanced delivery vehicles for multi-modal transport.</p>
            ${formatResearchers([
              "Abirami S(Masters)",
              "Varun Mathivadan (Mtech)",
            ])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["satya-r-chakravarthy"]),
  },

  "vision-based-warehouse-safety": {
    title:
      "Vision-based approaches for monitoring warehouse worker safety and performance",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/vision-safety.jpg",
    content: `
            <p>The project analysed the possibilities of developing systems and processes that ensured worker safety in warehouses and logistics facilities. Automated risk assessments, operational efficiency, and data-driven insights were analysed to create an advanced AI ergonomics platform that enabled improved efficiencies across all sectors.</p>
            ${formatResearchers(["Manoj Shyam (Masters)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["rajagopalan-srinivasan", "babji-srinivasan"]),
  },

  "wearable-sensors-worker-fatigue": {
    title:
      "Wearable sensors for monitoring fatigue and performance of warehouse workers",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/wearable.jpg",
    content: `
            <p>An interesting project that studied real-time data like heart rate, skin temperature, and locomotion patterns to understand worker fatigue in real-time scenarios. A predictive analysis report presented how these parameters could help understand the reasons and possible times for worker fatigue and thereby help prevent it.</p>
            <p>Students presented possible solutions that empowered workers to avoid fatigue and improve productivity.</p>
            ${formatResearchers(["Karthikeyan (PhD)", "Shyam Sivam (SPO)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["rajagopalan-srinivasan", "babji-srinivasan"]),
  },

  "vr-warehouse-simulation": {
    title: "Virtual simulation of various operations in the warehouse",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/vr-warehouse.jpg",
    content: `
            <p>The impact of virtual reality in the real world is undeniable, and the students have leveraged its capabilities to enhance warehouse operations to empower employees, improve logistics, and simulate real-world warehouse problems.</p>
            <p>The endless capabilities of VR have made it possible to develop successful models for training and safety simulation, warehouse process optimization, cognitive workload, and ergonomic assessment.</p>
            ${formatResearchers(["Jegatheeswari D (masters)"])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["rajagopalan-srinivasan", "babji-srinivasan"]),
  },

  "sarathi-ai-driver-monitoring": {
    title: "Sarathi AI - Driver monitoring system",
    date: "Research Project",
    type: "Research",
    header_img_link: "/research/sarathi-ai.jpg",
    content: `
            <p>A cutting-edge technology-driven solution was developed to enhance safety, efficiency, and compliance in warehouse and logistics operations. Students presented methods like measuring and monitoring performance, tracking by remote, and integration of an alarm when required.</p>
            <p>The project included features like fatigue and distraction detection, speed and route monitoring, proximity and collision warnings, seatbelt and posture detection, AI-based behavioural analysis, real-time data and reporting, and environmental monitoring.</p>
            ${formatResearchers(["Thasnimol (PhD)"])}
       `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["rajagopalan-srinivasan", "babji-srinivasan"]),
  },

  // --- Short Term Projects ---
  "demand-capacity-forecasting": {
    title: "Demand Analysis, Capacity planning and Forecasting Models",
    date: "Short Term Project",
    type: "Short Term Project",
    header_img_link: "/research/demand-forecast.jpg",
    content: `
            <p>This project focuses on optimizing operations within a business by assessing the demand, planning capacity accordingly, and using forecasting models to predict future needs. The problem statement focussed on precise capacity planning and accurately forecasting demand.</p>
            <p>The objective of the project is to develop a python-based demand forecasting model that integrates harmonic analysis, linear regression and time series feature engineering to highlight complex demand patterns. With a strong focus on forecast accuracy, the project is working towards reducing operational inefficiencies and supporting strategic air network planning.</p>
            <p>The key deliverables for this project included developing a python-based forecasting model and developing comprehensive documentation. The progress of this includes a comprehensive review of state-of-the-art time series forecasting methods, Toffee-tree, which is an automatic feature engineering with 286+ trend cycles and BOFA (Bi-objective optimization with fourier-based linear regression for multi-seasonal data).</p>
            <p>The project has completed the forecasting of international shipping, engineered features capturing temporal trends and seasonality. A Harmonic Regression Model has been built, the students used MAE, RMSE and MAPE for model performance evaluation.</p>
            ${formatResearchers([])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["c-rajendran"]),
  },

  "large-scale-last-mile-delivery": {
    title: "Optimizing Large-scale Last-mile delivery",
    date: "Short Term Project (Est. Completion: June 2025)",
    type: "Short Term Project",
    header_img_link: "/research/last-mile.jpg",
    content: `
            <p>The Project focused on allocation and routing of courier personnel with the consideration of simultaneous delivery and pickup. The problem statement presented the last-mile delivery as the most difficult and cost-intensive segments of the logistics chain.</p>
            <p>A matheuristic approach was proposed to efficiently handle large-scale last-mile delivery problems. The objective of the project included development of a MILP model for clustering and routing. The students tested the matheuristic model benchmark instances from the Li & Lim dataset and presented an output for an instance with 100 nodes.</p>
            <p>The project is ongoing and is due for completion in June 2025.</p>
            ${formatResearchers([])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["c-rajendran"]),
  },

  "air-taxi-infrastructure-placement": {
    title: "Optimized infrastructure placement for air taxi system",
    date: "Short Term Project (Est. Completion: May 2025)",
    type: "Short Term Project",
    header_img_link: "/research/airtaxi.jpg",
    content: `
            <p>The objective of this project is to optimize vertiports, vertistops and customer points to improve air taxi operation, to reduce industrial impact and to understand potential applications of FedEx logistics, drone delivery networks and urban air mobility solutions.</p>
            <p>The project is planned to move forward through 5 levels and students aim for completion by May 2025. The methods of analysis used include clustering with TSP coding, MILP Math Model, Solver-Gurobi Py and Allotment Stratified.</p>
            <p>The project is proposed to move forward with a plan to expand optimization and integrate real-time data, pilot tests in cities to assess scalability, finally submit models and publish research papers.</p>
            ${formatResearchers([])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["c-rajendran"]),
  },

  "multi-echelon-network-design": {
    title: "Multi-Echelon Network Design",
    date: "Short Term Project (Est. Completion: May 2025)",
    type: "Short Term Project",
    header_img_link: "/research/multiechelon.jpg",
    content: `
            <p>The problem statement of this project highlighted product distribution challenges and is focused on developing efficient delivery paths that are based multi-echelon network design that covers state hubs, regional sort centers and micro-fulfillment centers. The multi-echelon distribution network covers the movement of goods through multiple levels before it reaches the customers.</p>
            <p>Students analyse the flow of goods through this network design and utilize the best optimization approach to achieve the objectives of the project. The objectives to meet optimization of product distribution, determine the optimal number and location of distribution centers and the establishment of a major central distribution state hub will be met by May 2025 according to the phased plan of the project.</p>
            ${formatResearchers([])}
        `,
    links: { common: "#", linkedin: "#", facebook: "#", twitter: "#" },
    faculty: getFacultyByIds(["c-rajendran"]),
  },
};

// src/data/eventsData.ts

// Populate with data from PPT and planned events
export const eventsListData: EventItem[] = [
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
    // affiliation:
    //   "MD, The Business Binnacle Ltd (Retired Commander, Indian Navy)",
    img_link: "/events/nexus-seminar.webp", // Placeholder: Global/Tech/Business
    slug: "/events/seminar-rodrigues", // Add link if available
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
    // affiliation:
    //   "Partner & Global Lead of MSC Center of Competence, McKinsey & Company",
    img_link:
      "https://images.pexels.com/photos/17483870/pexels-photo-17483870/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-proje.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: AI/Abstract
    slug: "/events/seminar-ganesh",
  },
  {
    id: "seminar-doreswamy",
    title: "Applications of Optimization in Business",
    description:
      "Ms. Goda Doreswamy shared insights on practical applications of optimization techniques in a business context.",
    tag: "Seminar",
    date: new Date("2024-04-25"), // From Website Content
    speaker: "Ms. Goda Doreswamy",
    // affiliation: "VP, Data Science, Swiggy",
    img_link: "/events/neon-ai.webp", // Placeholder: Charts/Analytics
    slug: "/events/seminar-doreswamy",
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
    // affiliation: "Prof & Dean (Academics), Gati Shakti Vishwavidyalaya",
    img_link:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Logistics/Infrastructure
    slug: "/events/seminar-thakkar",
  },
  {
    id: "seminar-goyal",
    title: "Unified Logistics Interface Platform (ULIP): a game changer?",
    description:
      "Mr. Vinay Goyal discussed the potential impact of ULIP on the Indian logistics ecosystem.",
    tag: "Seminar",
    date: new Date("2024-04-05"), // From Website Content
    speaker: "Mr. Vinay Goyal",
    // affiliation: "Founder & CEO, Instavans Logistics (P) Ltd",
    img_link:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder: Platform/Interface/India Map
    slug: "/events/seminar-goyal",
  },
  {
    id: "seminar-akella",
    title: "Interesting Logistics Problems in India",
    description:
      "Mr. Brahmayya Akella highlighted unique challenges and problems within the Indian logistics context.",
    tag: "Seminar",
    date: new Date("2024-03-28"), // From Website Content
    speaker: "Mr. Brahmayya Akella",
    // affiliation:
    //   "Co-founder & Chief Strategy Officer, Mera Transport Exchange (p) Ltd",
    img_link: "/events/logistics-problems.webp", // Placeholder: Map/Network India
    slug: "/events/seminar-akella",
  },
  {
    id: "seminar-yamarthy",
    title: "Career in Logistics & Essence of Upskilling",
    description:
      "Mr. Ravikanth Yamarthy discussed career paths in logistics and the importance of continuous learning.",
    tag: "Seminar",
    date: new Date("2024-07-01"), // Placeholder Date - Update if known
    speaker: "Mr. Ravikanth Yamarthy",
    // affiliation: "CEO, Logistics Sector Skill Council",
    img_link: "/events/career.webp", // Placeholder: People/Learning/Career
    slug: "/events/seminar-yamarthy",
  },
  {
    id: "seminar-kadavan",
    title: "The Future of Logistics: Technology-Driven Solutions",
    description:
      "Mr. Vinod Alex Kadavan explored how technology is shaping the future of the logistics industry.",
    tag: "Seminar",
    date: new Date("2024-08-01"), // Placeholder Date - Update if known
    speaker: "Mr. Vinod Alex Kadavan",
    // affiliation: "Director-Sea Vantage, Founder - Insites Technology",
    img_link: "/events/modern-tech.webp", // Placeholder: Future Tech/Abstract
    slug: "/events/seminar-kadavan",
  },

  {
    id: "opsium-shastra-2025",
    title: "OPSIUM - Operations And Supply Chain Case Completions",
    description: `The FedEx SMART Centre partnered with SHAASTRA, the annual festival of IIT Madras, to host two
key competitions focused on the logistics and supply chain sectors. As part of this initiative, OPSIUM
(Operations and Supply Chain Case Study) was introduced as a case study competition that attracted
over 500 students from prestigious institutions like IITs and IIMs.`,
    tag: "Hackathon",
    date: new Date("2025-01-04"), // Placeholder Date in Jan 2025
    img_link: "/events/opsium.png", // Placeholder: Code/Hackathon
    slug: "/events/opsium-shastra-2025", // Update when details available
  },
  {
    id: "sarc-shastra-2025",
    title: "SARC - Shaastra Aerial Robotics Challenge",
    description: `The FedEx SMART Centre partnered with SHAASTRA, IIT Madras&#39; annual engineering festival, to host
two major competitions in logistics and supply chain. One of these, the SARC (Shaastra Aerial
Robotics Challenge), focused on aerial robotics, where participants designed autonomous drones for
tasks like package delivery. Over 400 students and professionals from 40 institutions competed.`,
    tag: "Hackathon",
    date: new Date("2025-01-04"), // Placeholder Date in Jan 2025
    img_link: "/events/sarc.png", // Placeholder: Code/Hackathon
    slug: "/events/sarc-shastra-2025", // Update when details available
  },
  {
    id: "hackathon-shastra-2025",
    title: "FedEx SMART Hackathon",
    description:
      "The SMART hackathon conducted by the FedEx SMART center, IIT Madras was a remarkable success, attracting an impressive 2100 professionals and college students who developed futuristic solutions for dynamic route optimization and emission reduction.",
    tag: "Hackathon",
    date: new Date("2025-01-31"), // Placeholder Date in Jan 2025
    img_link: "/events/fedex-smart-hackathon.webp", // Placeholder: Code/Hackathon
    slug: "/events/hackathon-shastra-2025", // Update when details available
  },
  {
    id: "seminar-gopalakrishnan",
    title: "A Tale of two cities",
    description:
      "A Seminar on supply chain resilience and viability in the post-Covid world facilitated by Dr Gopalakrishnan Mohan",
    tag: "Seminar",
    speaker: "Dr Gopalakrishnan Mohan",
    date: new Date("2025-02-01"), // Placeholder Future Date - Update when scheduled
    img_link: "/events/supply-chain-modelling.webp", // Placeholder: Speaker/University/Global
    slug: "/events/a-tale-of-two-cities",
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

// Populate with types of opportunities based on Center's activities
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

// Based *only* on the provided "Projects" text file with verticals
export const researchListData: ResearchListItem[] = [
  {
    id: "customer-email-analysis",
    title: "Customer Email Analysis",
    slug: "customer-email-analysis",
    vertical: "Supply Chain Sustainability",
  },
  {
    id: "transshipment-hub-india",
    title: "Making India a Global Transshipment Hub",
    slug: "transshipment-hub-india",
    vertical: "Supply Chain Sustainability",
  },
  {
    id: "employee-wellbeing-logistics",
    title: "Employee Well-being in Logistics Sector",
    slug: "employee-wellbeing-logistics",
    vertical: "Supply Chain Sustainability",
  },
  {
    id: "multimodal-logistics-challenges",
    title: "Issues and Challenges in Multi-Modal Logistics in India",
    slug: "multimodal-logistics-challenges",
    vertical: "Supply Chain Sustainability",
  },
  {
    id: "emission-optimizing-cvrp",
    title: "Emission-Optimizing CVRP",
    slug: "emission-optimizing-cvrp",
    vertical: "Algorithms & ML",
  },
  {
    id: "ev-charging-fleet-optimization",
    title: "Optimal EV charging networks and EV fleet size",
    slug: "ev-charging-fleet-optimization",
    vertical: "Logistics Infrastructure",
  },
  {
    id: "sustainable-resilient-last-mile",
    title:
      "Sustainable and Resilient Last-Mile Distribution: A Holistic System Design Framework",
    slug: "sustainable-resilient-last-mile",
    vertical: "Logistics Infrastructure",
  }, // Vertical from file
  {
    id: "drone-delivery-feasibility-india",
    title: "Feasibility of drone deliveries in India",
    slug: "drone-delivery-feasibility-india",
    vertical: "Logistics Infrastructure",
  },
  {
    id: "autonomous-agent-integration-modules",
    title:
      "Development of Modules capable of integrating with the current infrastructure to enable autonomous Delivery Agents to adopt Advanced Delivery Vehicle",
    slug: "autonomous-agent-integration-modules",
    vertical: "Logistics Infrastructure",
  },
  {
    id: "vision-based-warehouse-safety",
    title:
      "Vision-based approaches for monitoring warehouse worker safety and performance",
    slug: "vision-based-warehouse-safety",
    vertical: "Logistics Infrastructure",
  }, // Vertical from file (Note: Content suggests Wellness)
  {
    id: "wearable-sensors-worker-fatigue",
    title:
      "Wearable sensors for monitoring fatigue and performance of warehouse workers",
    slug: "wearable-sensors-worker-fatigue",
    vertical: "Logistics Worker Wellness",
  },
  {
    id: "vr-warehouse-simulation",
    title: "Virtual simulation of various operations in the warehouse",
    slug: "vr-warehouse-simulation",
    vertical: "Logistics Worker Wellness",
  },
  {
    id: "sarathi-ai-driver-monitoring",
    title: "Sarathi AI - Driver monitoring system",
    slug: "sarathi-ai-driver-monitoring",
    vertical: "Logistics Worker Wellness",
  },
  {
    id: "integrated-warehouse-testbed",
    title: "An integrated test bed for state-of-the-art warehouse simulation",
    slug: "integrated-warehouse-testbed",
    vertical: "Logistics Worker Wellness",
  }, // Assuming related to #13
  {
    id: "demand-capacity-forecasting",
    title: "Demand Analysis, Capacity planning and Forecasting Models",
    slug: "demand-capacity-forecasting",
    vertical: "Supply Chain Sustainability",
  }, // Explicitly given as "sustai"
  {
    id: "large-scale-last-mile-delivery",
    title: "Optimizing Large-scale Last-mile delivery",
    slug: "large-scale-last-mile-delivery",
    vertical: "Supply Chain Sustainability",
  }, // Assigned based on Prof. Rajendran
  {
    id: "air-taxi-infrastructure-placement",
    title: "Optimized infrastructure placement for air taxi system",
    slug: "air-taxi-infrastructure-placement",
    vertical: "Logistics Infrastructure",
  }, // Assigned based on content (air taxi/infra)
  {
    id: "multi-echelon-network-design",
    title: "Multi-Echelon Network Design",
    slug: "multi-echelon-network-design",
    vertical: "Supply Chain Sustainability",
  }, // Assigned based on Prof. Rajendran / Network Design
];

export const researchVerticals = [
  "All Research",
  ...Array.from(new Set(researchListData.map((item) => item.vertical))),
];

export const eventDetailsData: { [key: string]: CommonPageProps } = {
  "a-tale-of-two-cities": {
    title: "A Tale of Two Cities",
    date: "February 1, 2025",
    type: "Seminar",
    header_img_link: "/events/supply-chain-modelling.webp",
    content: `
    <p>Dr. Gopalakrishnan Mohan presented a seminar on supply chain resilience and viability in the post-Covid world. The session included two contrasting case studies of U.S. cities to highlight resilience strategies and was well-received for its interactive approach.</p>
    <h3>Key Focus Areas</h3>
    <h4>Digital Transformation of Supply Chains</h4>
    <p>Discussions covered the role of AI, ML, IoT, and blockchain in supply chain management, with case studies on real-time data sharing and predictive analytics.</p>
    <h4>Sustainability and ESG in Supply Chains</h4>
    <p>The seminar addressed carbon footprints, green logistics, circular supply chains, and the impact of climate risks on sourcing and transportation.</p>
    <h4>Localisation & Regionalisation</h4>
    <p>Case studies of two cities emphasized the importance of localisation and regionalization, particularly their impact on MSMEs and startup ecosystems.</p>
  `,
    links: {
      common: "/events/a-tale-of-two-cities",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Gopalakrishnan Mohan",
        "International Visiting Chair Professor",
        "School of Technology, Innovation and Entrepreneurship",
        "Arizona State University & IIT Madras"
      ),
    ],
  },
  "hackathon-shastra-2025": {
    title: "FedEx SMART Hackathon",
    date: "January 31, 2025",
    type: "Hackathon",
    header_img_link: "/events/fedex-smart-hackathon.webp",
    content: `
    <p>The SMART hackathon conducted by the FedEx SMART center, IIT Madras was a remarkable success, attracting an impressive 2100 professionals and college students who developed futuristic solutions for dynamic route optimization and emission reduction. By utilizing real-time traffic, weather, social media, and vehicle data, participants showcased exceptional ingenuity in building original hardware prototypes to eco-friendly routing systems. FedEx's active involvement provided invaluable industry insights and real-world guidance that inspired participants to develop cutting-edge approaches.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Problem statements focused on enhanced demand forecasting and dynamic route optimization.</li>
      <li>Winning teams from IIT Madras, SNS College of Technology, and Sri Sairam Engineering College.</li>
      <li>Judges evaluated projects based on innovation, feasibility, and impact.</li>
      <li>Post-event engagement with IIT professors and students to foster collaboration.</li>
    </ul>
  `,
    links: {
      common: "/events/hackathon-shastra-2025",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    judges: [
      {
        name: "Mr Vijay Kumar",
        description: "FedEx Representative",
      },
      {
        name: "Mr Vinodh Kumar",
        description: "FedEx Representative",
      },
    ],
  },
  "sarc-shastra-2025": {
    title: "SARC - Shaastra Aerial Robotics Challenge",
    date: "January 4th, 2025",
    type: "Hackathon",
    header_img_link: "/events/sarc.png",
    content: `
    <p>
    The FedEx SMART Centre partnered with SHAASTRA, the annual festival of IIT Madras, to host two
key competitions focused on the logistics and supply chain sectors. As part of this initiative, OPSIUM
(Operations and Supply Chain Case Study) was introduced as a case study competition that attracted
over 500 students from prestigious institutions like IITs and IIMs. The challenge involved creating an
advanced demand forecasting system for FedEx. The competition, judged by FedEx experts Mr.
Mohan Singh and Mr. Vikram Anand, saw IIT Madras win first and third places, with N.L. Dalmia
Institute of Management Studies &amp; Research securing second place. The FedEx judges added value
to the event with their industry expertise, providing students with valuable guidance and insights,
transforming the competition to an inspiring and impactful experience.
    </p>
    
  `,
    links: {
      common: "/events/hackathon-shastra-2025",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    judges: [
      {
        name: "Vijay Kumar R",
        description: "Manager Shared Services",
      },
      {
        name: "S. Karthikeyan",
        description: "Manager Clearance Operations",
      },
      {
        name: "Micheal",
        description: "FedEx Representative",
      },
    ],
  },
  "opsium-shastra-2025": {
    title: "OPSIUM - Operations And Supply Chain Case Completions",
    date: "January 4th, 2025",
    type: "Hackathon",
    header_img_link: "/events/opsium.png",
    content: `
    <p>
    The FedEx SMART Centre partnered with SHAASTRA, the annual festival of IIT Madras, to host two
key competitions focused on the logistics and supply chain sectors. As part of this initiative, OPSIUM
(Operations and Supply Chain Case Study) was introduced as a case study competition that attracted
over 500 students from prestigious institutions like IITs and IIMs. The challenge involved creating an
advanced demand forecasting system for FedEx. The competition, judged by FedEx experts Mr.
Mohan Singh and Mr. Vikram Anand, saw IIT Madras win first and third places, with N.L. Dalmia
Institute of Management Studies &amp; Research securing second place. The FedEx judges added value
to the event with their industry expertise, providing students with valuable guidance and insights,
transforming the competition to an inspiring and impactful experience.
    </p>
    
  `,
    links: {
      common: "/events/hackathon-shastra-2025",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    judges: [
      {
        name: "Mr Mohan Singh",
        description: "FedEx Representative",
      },
      {
        name: "Mr Vikram Anand",
        description: "FedEx Representative",
      },
    ],
  },
  "seminar-kadavan": {
    title: "The Future of Logistics: Technology-Driven Solutions",
    date: "August 1, 2024",
    type: "Seminar",
    header_img_link: "/events/modern-tech.webp",
    content: `
    <p>Mr. Vinod Alex Kadavan explored how technology is shaping the future of the logistics industry. The seminar focused on emerging technologies like AI, IoT, and blockchain, and their role in improving efficiency and sustainability.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Significance of automation in warehouse operations and autonomous vehicles.</li>
      <li>Impact of AI/ML in predictive analytics, demand forecasting, and route optimization.</li>
      <li>Future innovations in intelligent transportation systems.</li>
      <li>Challenges of data security and privacy in technology adoption.</li>
      <li>Importance of aligning training programs to bridge talent gaps.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-kadavan",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Vinod Alex Kadavan",
        "Director & Founder",
        undefined,
        "Sea Vantage, Insites Technology"
      ),
    ],
    judges: [],
  },
  "seminar-yamarthy": {
    title: "Career in Logistics & Essence of Upskilling",
    date: "July 1, 2024",
    type: "Seminar",
    header_img_link: "/events/career.webp",
    content: `
    <p>Mr. Ravikanth Yamarthy discussed career paths in logistics and the importance of continuous learning. The seminar covered the evolving logistics landscape, from warehouses to digital highways, and emerging trends like digitization and sustainability.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Core roles in operations, procurement, planning, and analytics.</li>
      <li>Emerging fields like maritime logistics, cold chain, and green logistics.</li>
      <li>Importance of upskilling through certifications, workshops, and hands-on labs.</li>
      <li>Role of industry-institution collaborations and experiential learning.</li>
      <li>Need for soft skills like communication, leadership, and problem-solving.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-yamarthy",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Ravikanth Yamarthy",
        "CEO",
        undefined,
        "Logistics Sector Skill Council"
      ),
    ],
    judges: [],
  },
  "seminar-akella": {
    title: "Interesting Logistics Problems in India",
    date: "March 28, 2024",
    type: "Seminar",
    header_img_link: "/events/logistics-problems.webp",
    content: `
    <p>Mr. Brahmayya Akella highlighted unique challenges and problems within the Indian logistics context, focusing on inefficiencies and opportunities for innovation.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Challenges like infrastructure bottlenecks, fragmented markets, and skill gaps.</li>
      <li>Adoption of technologies like GPS, RFID, and blockchain for supply chain visibility.</li>
      <li>Customized solutions for warehousing and distribution centers.</li>
      <li>Impact of e-commerce on logistics operations.</li>
      <li>Case studies on innovative solutions applied in India and globally.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-akella",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Brahmayya Akella",
        "Co-founder & Chief Strategy Officer",
        undefined,
        "Mera Transport Exchange (P) Ltd"
      ),
    ],
    judges: [],
  },
  "seminar-goyal": {
    title: "Unified Logistics Interface Platform (ULIP): A Game Changer?",
    date: "April 5, 2024",
    type: "Seminar",
    header_img_link:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
    <p>Mr. Vinay Goyal discussed the potential impact of the Unified Logistics Interface Platform (ULIP) on the Indian logistics ecosystem. The seminar explored the evolution of UI design, benefits of unified interfaces, and implementation challenges.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Evolution of user interface design and emergence of unified platforms.</li>
      <li>Advantages of ULIP in streamlining workflows and reducing training time.</li>
      <li>Impact on user experience, business processes, and operational efficiency.</li>
      <li>Role of data integration and analytics in better decision-making.</li>
      <li>Need for National Logistics Data Services to democratize data management.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-goyal",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Vinay Goyal",
        "Founder & CEO",
        undefined,
        "Instavans Logistics (P) Ltd"
      ),
    ],
    judges: [],
  },
  "seminar-thakkar": {
    title:
      "Emerging Challenges and Opportunities in the Transportation and Logistics Sector",
    date: "April 18, 2024",
    type: "Seminar",
    header_img_link:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
    <p>Prof. Jitesh Thakkar provided an overview of the current landscape and future trends in transportation and logistics, focusing on India's emerging economy. The seminar addressed challenges like automation, supply chain disruptions, and evolving customer expectations.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Challenges from automation, sustainability, and regulatory compliance.</li>
      <li>Opportunities in digital transformation, data analytics, and e-commerce growth.</li>
      <li>Case studies illustrating strategies for addressing customer needs in India.</li>
      <li>Impact of green logistics and alternative workforce models.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-thakkar",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Jitesh J Thakkar",
        "Professor & Dean (Academics)",
        undefined,
        "Gati Shakti Vishwavidyalaya"
      ),
    ],
    judges: [],
  },
  "seminar-doreswamy": {
    title: "Applications of Optimization in Business",
    date: "April 25, 2024",
    type: "Seminar",
    header_img_link: "/events/neon-ai.webp",
    content: `
    <p>Ms. Goda Doreswamy shared insights on practical applications of optimization techniques in a business context. The seminar emphasized the role of optimization in improving efficiency, reducing costs, and gaining a competitive edge.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>Case studies showcasing optimization in supply chain management and other industries.</li>
      <li>Impact of optimization on resource allocation, production planning, and demand forecasting.</li>
      <li>Applications across manufacturing, retail, finance, healthcare, and transportation.</li>
      <li>Role of data analytics, statistical methods, ML, and AI in driving optimization.</li>
      <li>Future trends and challenges in adopting sustainable optimization approaches.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-doreswamy",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Goda Doreswamy",
        "Vice President, Data Science",
        undefined,
        "Swiggy"
      ),
    ],
    judges: [],
  },
  "seminar-ganesh": {
    title:
      "Intensify Brilliance in Supply Chain and Logistics with Gen AI Models",
    date: "May 31, 2024",
    type: "Seminar",
    header_img_link:
      "https://images.pexels.com/photos/17483870/pexels-photo-17483870/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-proje.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
    <p>Dr. K Ganesh discussed how Generative AI can revolutionize supply chain and logistics operations. The seminar covered the foundations and capabilities of GenAI models, focusing on their ability to generate novel content and predictions. Discussions highlighted GenAI's applications in predictive analytics, demand forecasting, and inventory management.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>GenAI's role in analyzing historical data and market trends for accurate demand forecasts.</li>
      <li>Optimizing inventory levels and predicting stock requirements with high accuracy.</li>
      <li>Enhancing production planning and resource allocation.</li>
      <li>Identifying areas where AI and GenAI improve efficiency, resilience, and customer experience.</li>
      <li>Future implications of GenAI in supply chain innovations.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-ganesh",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "K Ganesh",
        "Partner & Global Lead",
        undefined,
        "MSC Center of Competence, McKinsey & Company"
      ),
    ],
    judges: [],
  },
  "seminar-rodrigues": {
    title:
      "The 21st Century Lean-Agile Global Supply Chains: Nexus between Business & Technology",
    date: "October 10, 2024",
    type: "Seminar",
    header_img_link: "/events/nexus-seminar.webp",
    content: `
    <p>Mr. Allan Rodrigues explored the intersection of modern supply chain strategies and technological advancements. The seminar introduced global supply chains, their impact on geo-economies and knowledge economies, and the need for hybrid Lean-Agile models in the current market. It highlighted the role of globalization, digitalization, and technologies like real-time data, IoT, AI/ML, and blockchain.</p>
    <h3>Highlights</h3>
    <ul class="list-disc space-y-2 pl-6 my-4">
      <li>The Lean-Agile hybrid model and its adaptability for businesses.</li>
      <li>Impact of the pandemic on global supply chains and coping mechanisms.</li>
      <li>Role of technology in transforming industries via data analytics, AI, automation, and blockchain.</li>
      <li>Advantages of the Lean-Agile model with a sustainable approach.</li>
      <li>Case studies illustrating real-world applications.</li>
      <li>Challenges like data privacy, legacy system integration, and talent gaps.</li>
      <li>Integration of Industry 4.0 concepts, IoT, AI-enabled predictive analytics, and blockchain.</li>
    </ul>
  `,
    links: {
      common: "/events/seminar-rodrigues",
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
    speakers: [
      createFaculty(
        "Allan Rodrigues",
        "Managing Director",
        undefined,
        "The Business Binnacle Ltd (Retired Commander, Indian Navy)"
      ),
    ],
    judges: [],
  },
};

// --- Populate this with actual data ---
export const teamData: TeamMemberRef[] = [
  // --- Advisory Board ---
  { id: "adv01", personId: "nitin-tatiwala", category: "Advisory" },
  { id: "adv02", personId: "kami-vishwanathan", category: "Advisory" },
  {
    id: "adv-swamy",
    personId: "ns-narayanaswamy",
    category: "Advisory",
    roleTitle: "Advisory Member",
  }, // Specify advisory role
  {
    id: "adv-arshinder",
    personId: "arshinder-kaur",
    category: "Advisory",
    roleTitle: "Advisory Member",
  }, // Specify advisory role
  { id: "adv03", personId: "ashwin-mahalingam", category: "Advisory" }, // Corrected Dean ID
  { id: "adv04", personId: "manu-santhanam", category: "Advisory" },
  { id: "adv05", personId: "ashutosh-mahajan", category: "Advisory" },

  // --- Faculty Team ---
  // Add PI/Co-PI info to roleTitle where applicable
  {
    id: 1,
    personId: "arshinder-kaur",
    category: "Faculty",
    roleTitle: "Professor | PI, Sustainability",
  },
  {
    id: 2,
    personId: "c-rajendran",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Sustainability",
  },
  {
    id: 3,
    personId: "rp-sundararaj",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Sustainability",
  },
  {
    id: 4,
    personId: "nargis-pervin",
    category: "Faculty",
    roleTitle: "Associate Professor | Co-PI, Sustainability",
  },
  {
    id: 5,
    personId: "vaibhav-chawla",
    category: "Faculty",
    roleTitle: "Assistant Professor | Co-PI, Sustainability",
  },
  {
    id: 6,
    personId: "usha-mohan",
    category: "Faculty",
    roleTitle: "Associate Professor | Co-PI, Sustainability",
  },
  {
    id: 7,
    personId: "chandrashekar-l",
    category: "Faculty",
    roleTitle: "Assistant Professor | PI, Algorithms & ML",
  },
  {
    id: 8,
    personId: "ns-narayanaswamy",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Algorithms & ML",
  },
  {
    id: 9,
    personId: "rupesh-nasre",
    category: "Faculty",
    roleTitle: "Associate Professor | Co-PI, Algorithms & ML",
  },
  { id: 10, personId: "b-ravindran", category: "Faculty" }, // Can add "| Head, RBCDSAI" if desired
  {
    id: 11,
    personId: "anil-prabhakar",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Algorithms & ML",
  },
  {
    id: 12,
    personId: "rahul-marathe",
    category: "Faculty",
    roleTitle: "Associate Professor | Co-PI, Algorithms & ML",
  },
  {
    id: 13,
    personId: "babji-srinivasan",
    category: "Faculty",
    roleTitle: "Associate Professor | PI, Worker Wellness",
  },
  {
    id: 14,
    personId: "satya-r-chakravarthy",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Infrastructure",
  },
  {
    id: 15,
    personId: "rajagopalan-srinivasan",
    category: "Faculty",
    roleTitle: "Professor | Co-PI, Worker Wellness",
  },
  {
    id: 16,
    personId: "gitakrishnan-ramadurai",
    category: "Faculty",
    roleTitle: "Professor | PI, Infrastructure",
  },

  // --- Center Team (Referencing placeholders in peopleData) ---
  { id: "ctr01", personId: "center-admin", category: "Center" },
  { id: "ctr02", personId: "center-pm", category: "Center" },
  { id: "ctr02", personId: "center-content-writer", category: "Center" },
  { id: "ctr02", personId: "center-support", category: "Center" },

  // --- Research Team (Referencing placeholders in peopleData) ---
  { id: "res01", personId: "placeholder-postdoc-1", category: "Research" },
  { id: "res02", personId: "placeholder-staff-1", category: "Research" },
  { id: "res03", personId: "placeholder-scholar-1", category: "Research" },
  // Add more placeholder references if needed
];
// Define the order and labels for tabs
export const teamCategories: { value: TeamCategory; label: string }[] = [
  { value: "Advisory", label: "Governing Board" },
  { value: "Faculty", label: "Faculty Team" },

  { value: "Center", label: "Center Team" },
  { value: "Research", label: "Research Team" },
];

export const verticalsData: VerticalData[] = [
  {
    id: "sustainability",
    icon: <Leaf />,
    title: "Supply Chain Sustainability",
    link: "/digital-sustainable-supply-chain",
    description:
      "Developing frameworks for Net Zero emissions, incorporating ESG factors, optimizing multi-modal logistics, enhancing resilience, and using digital tools for greener, socially responsible supply chains.",
    imageUrl: "/slide-pics/supply-chain-sustainability.webp", // Placeholder: Green logistics/nature
  },
  {
    id: "wellness",
    icon: <HeartPulse />,
    title: "Logistics Worker Wellness",
    link: "/human-machine-collaboration-wellness",
    description:
      "Improving worker health, safety, and cognitive performance using biomedical monitoring, advanced VR training, ergonomic tech, and human-machine collaboration strategies.",
    imageUrl: "/slide-pics/worker-wellness.webp", // Placeholder: Warehouse worker/safety/tech
  },
  {
    id: "algorithms",
    icon: <Cpu />,
    title: "Algorithms & ML",
    link: "/accelerating-learning-algorithms",
    description:
      "Creating scalable algorithms (Optimization, RL, Quantum ML) and AI/ML models for efficient routing, packing, scheduling, demand forecasting, and overall logistics decision support systems.",
    imageUrl: "/slide-pics/ml-algo.webp", // Placeholder: Abstract tech/AI/code
  },
  {
    id: "infrastructure",
    icon: <Truck />,
    title: "Logistics Infrastructure",
    link: "/autonomous-delivery-integration",
    description:
      "Integrating next-generation technologies including autonomous delivery agents (drones, rovers), optimizing EV fleets and charging networks, and designing smart, resilient infrastructure solutions.",
    imageUrl: "/slide-pics/logistics-infra.webp", // Placeholder: Drone/EV truck/warehouse tech
  },
];
