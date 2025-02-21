import { pages_types } from "../types";
import { project_types } from "../types";

export const pages: pages_types[] = [
  pages_types.projects,
  pages_types.organization,
  pages_types.workwithus,
  pages_types.apply,
  pages_types.contact,
];

export const descriptions = {
  [pages_types.projects]:
    "Our projects include a mix of buidling out technical stacks as well reseraching project feasibility.",
  [pages_types.organization]:
    "The orginization consists of a team of 30+ people split across technical and non-technical.",
  [pages_types.workwithus]:
    "If you have some technical debt or are hoping to expand your existing technology please reach out to diverstech.penn@penn.org",
  [pages_types.apply]:
    "Penn students wanting to get hands on expereince about building technology and see the questions that current companies face. We encourage you to reach out",
  [pages_types.contact]: "We are always happy to chat!",
};

export const projects = [
  {
    company: "Baseten",
    color: "#009959",
    image: "/baseten.svg",
    semsester: "Fall 2022",
    company_description:
      "Baseten offers the most flexible way to serve AI models in production.",
    project_description:
      "Created go to market strategies on six AI-related public events.",
    type: project_types.consult,
  },
  {
    company: "CoinBase",
    color: "#0052ff",
    image: "/coinbase.svg",
    semsester: "Fall 2022",
    company_description:
      "Coinbase aims to increase economic freedom in the world.",
    project_description:
      "Research on the product offering & user acquisition strategies of competitors in international markets.",
    type: project_types.consult,
  },
  {
    company: "Shades",
    color: "#000000",
    secondary_color: "#ff334e",
    image: "/shades.svg",
    company_description:
      "Shades curates multiple perspectives on the issues of the day.",
    project_description:
      "Created a chrome extension that notified users of related shades articles when browsing the internet",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    type: project_types.tech,
  },
  {
    company: "Resilience Education",
    color: "white",
    image: "/resilience_education_logo.svg",
    semester: "Fall 2022",
    company_description:
      "Resilience Education aims to stop cycles of incarceration by improving economic mobility.",
    project_description:
      "Transitioned a legacy excel system to a new searchable database on job oppourtunites for formerly incarcerated individuals",
    tech: ["Next", "Node", "MongoDB", "Tailwind CSS"],
    type: project_types.tech,
  },
  {
    company: "SnackPass",
    color: "#05befe",
    image: "/snackpass.png",
    company_description:
      "Snackpass makes ordering at local restaurants more convenient, affordable and fun with friends.",
    project_description:
      "Helped do research on the user experience and how to increase their user conversion.",
    type: project_types.consult,
  },
  {
    company: "Betterly",
    color: "#3ebb83",
    image: "/betterly.svg",
    company_description:
      "Betterly works with global corperations to improve their marketing success.",
    project_description:
      "Explored the advantages of contract workers in the marketing domain.",
    type: project_types.consult,
  },
  {
    company: "Stimulus",
    color: "#1f6d35",
    image: "/stimulus.png",
    company_description:
      "Stimulus uses data & analytics to help companies make better purchasing decisions powered by AI.",
    project_description:
      "Explored possible partnerships, new sources of data, and new business models.",
    type: project_types.consult,
  },
  {
    company: "InstaHub",
    color: "#01126b",
    image: "/instahub.png",
    semester: "Spring 2023",
    company_description:
      "Instahub works to automate detection of energy waste within buildings.",
    project_description:
      "Built out their internal dashboard for detecting patterns within energy usage.",
    tech: ["SQL", "AWS", "React", "Tailwind CSS"],
    type: project_types.tech,
  },
  {
    company: "ChargeItSpot",
    color: "white",
    image: "/chargeitspot.png",
    semester: "Fall 2022",
    company_description:
      "ChargeItSpot has revolutionized the world of mobile device management, charging, and security.",
    project_description:
      "Identify new sales venues as well as the key characteristics that distinguish venues.",
    sectors: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    type: project_types.consult,
  },
];

export const organization = {
  about:
    "Diverstatech was founded in 2022 by Victoria Zammit and Shriya Shah with the goal of providing companies with technical consulting. In 2023-2024 it was later scaled by Cameron Davis to become a solutions, rather than product, focused firm. Over the past few years the organization has provided companies with not just consulting but technical support.",
  mission:
    "Introduce passionate and curious students of all backgrounds to the realm of technology. We aspire to be a training ground for those that want to make a difference with technology.",
  procceses: [
    "building out full-stack dashboards and applications",
    "research on product market fit and new markets",
    "creating ML models tailored to specific use cases",
  ],
};

export const workwithus =
  "Diversatech aims to change the ownership structure of consulting. We pride ourselves in getting the opportunity to build things of our own. Our area of focus is in building integral systems and exploring the feasibility of new technologies through curating tech. Please reach out if you have technical aspirations or technical debt.";
