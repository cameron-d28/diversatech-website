import { pages_types } from "../types";

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

export const projects = {
  technical: [
    {
      company: "InstaHub",
      color: "#01126b",
      image: "/instahub.png",
      company_description:
        "Instahub works to automate detection of energy waste within buildings.",
      project_description:
        "Built out their internal dashboard for detecting patterns within energy usage.",
      tech: ["SQL", "AWS", "React", "Tailwind CSS"],
    },
    {
      company: "Resilience Education",
      color: "white",
      image: "/resilience_education_logo.svg",
      company_description:
        "Resilience Education partner with leading business schools to teach business curriculum to formerly incarcerated individuals.",
      project_description:
        "Transitioned a legacy excel system to a new searchable database on job oppourtunites for formerly incarcerated individuals",
      tech: ["Next", "Node", "MongoDB", "Tailwind CSS"],
    },
    {
      company: "Shades",
      color: "#ff334e",
      image: "/shades.svg",
      company_description:
        "Shades helps inviduals stay informed by providing them with news from every multiple perspectives",
      project_description:
        "Created a google extension that notified users of related existing shades articles when browsing the internet",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    // {
    //   company: "Penn",
    //   image: "/coinbase.svg",
    //   company_description:
    //     "Penn is a platform for students to learn and succeed. We built out the frontend and backend for the website.",
    //   project_description:
    //     "Helped build out their internal dashboard for detecting patterns within energy usage.",
    //   tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    // },
  ],
  consulting: [
    {
      company: "CoinBase",
      color: "#0052ff",
      image: "/coinbase.svg",
      company_description:
        "Penn is a platform for students to learn and succeed. We built out the frontend and backend for the website.",
      project_description:
        "Helped build out their internal dashboard for detecting patterns within energy usage.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      company: "ChargeItSpot",
      color: "white",
      image: "/chargeitspot.png",
      company_description:
        "Penn is a platform for students to learn and succeed. We built out the frontend and backend for the website.",
      project_description:
        "Helped build out their internal dashboard for detecting patterns within energy usage.",
      sectors: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      company: "SnackPass",
      color: "#05befe",
      image: "/snackpass.png",
      company_description:
        "Snackpass makes ordering at local restaurants more convenient, affordable and fun with friends.",
      project_description:
        "Helped do research on the user experience and how to increase their user conversion.",
      sectors: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      company: "Stimulus",
      color: "#1f6d35",
      image: "/stimulus.png",
      company_description:
        "Penn is a platform for students to learn and succeed. We built out the frontend and backend for the website.",
      project_description:
        "Helped build out their internal dashboard for detecting patterns within energy usage.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      company: "Betterly",
      color: "#3ebb83",
      image: "/betterly.svg",
      company_description:
        "Penn is a platform for students to learn and succeed. We built out the frontend and backend for the website.",
      project_description:
        "Helped build out their internal dashboard for detecting patterns within energy usage.",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
  ],
};

export const organization = {
  about:
    "Diverstatech was founded in 2022 by Victoria Zammit and Shriya Shah with the goal of providing companies with technical consulting. Over the past few years the organization has provided companies with not just consulting but technical support.",
  mission:
    "Introduce passionate and curious students of all backgrounds to the realm of technology",
  procceses: [
    "building out full-stack dashboards and applications",
    "research on product market fit and new markets",
    "creating ML models tailored to specific use cases",
  ],
};

export const workwithus =
  "Diversatech aims to change the ownership structure of consulting. We pride ourselves in getting the opportunity to build things of our own. Our area of focus is in building integral systems and exploring the feasibility of new technologies through curating tech. Please reach out if you have technical aspirations or technical debt.";
