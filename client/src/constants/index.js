import {
  mobile,
  backend,
  creator,
  web,
  niki, km,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
// import React from "react";
// import { Link } from 'react-router-dom';


export const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }

];

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         {navLinks.map((link) => (
//           <li key={link.id}>
//             {link.id === 'Login' ? (
//               <Link to={link.to}>{link.title}</Link>
//             ) : (
//               <a href={`#${link.id}`}>{link.title}</a>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }



const services = [
  {
    title: "Rishi Raj",
    icon: web,
  },
  {
    title: "Sagar Kumar Das",
    icon: mobile,
  },
  {
    title: "Abhishek Kumar Nag",
    icon: backend,
  },
  {
    title: "Nikita Kar",
    icon: niki,
  },

  {
    title: "Anmol Ramani ",
    icon: creator,
  },
  {
    title: "Krishna Mohan",
    icon: km,
  },

];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tulsi",
    company_name: "Properties",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Respiratory Health: Helps with coughs, colds, and asthma. Immune Support: Strengthens the immune system.",
    points: [
      "Antioxidant: Fights free radicals and oxidative stress.",
      "Anti-inflammatory: Reduces inflammation in the body.",
      "Antimicrobial: Inhibits harmful microorganisms.",
      "Adaptogenic: Helps the body adapt to stress.",
      "Immunomodulatory: Modifies and strengthens the immune system.",
    ],

  },
  {
    title: "Neem",
    company_name: "Properties",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oral Health: Neem for oral hygiene. In Agriculture: Neem is used for organic farming.",

    points: [
      "Antibacterial: Neem fights bacteria.",
      "Antifungal: Neem combats fungi.",
      "Antiviral: Neem helps against viruses.",
      "Antioxidant: Neem protects from cell damage.",
      "Anti-inflammatory: Neem reduces inflammation.",
      "Insecticidal: Neem kills insects. ",
    ],
  },
  {
    title: "Aloe Vera",
    company_name: "Properties",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Skincare: Aloe vera for healthy skin. Burn Relief: Aloe vera for soothing burns.",
    points: [
      "Anti-Inflammatory: Aloe vera reduces inflammation.",
      "Antibacterial: Aloe vera fights bacteria.",
      "Antioxidant: Aloe vera protects from cell damage.",
      "Hydrating: Aloe vera moisturizes the skin.",
      "Wound Healing: Aloe vera aids in healing wounds.",
      "Anti-Aging: Aloe vera promotes youthful skin.",
      "Digestive Aid: Aloe vera soothes digestion.",
    ],
  },
  {
    title: "Ashwagandha",
    company_name: "Properties",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Stress Reduction: Ashwagandha is primarily used to reduce stress and anxiety levels.Energy and Vitality: It can boost energy levels and enhance overall vitality.",
    points: [
      "Adaptogenic: Ashwagandha is an adaptogen, helping the body manage stress.",
      "Anti-Inflammatory: It has anti-inflammatory effects, reducing inflammation.",
      "Antioxidant: Ashwagandha contains antioxidants, protecting cells from damage.",
      "Immunomodulatory: It can boost or balance the immune system.",
      "Sedative: It acts as a mild sedative, aiding relaxation and sleep.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "Web D",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tele-Bot",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://web.telegram.org/a/#6686565221",
  },
  {
    name: "Chat-Bot",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: '../assets/jobit.png',
    source_code_link: "https://chat.openai.com/",
  },
  {
    name: "QR-Scanner",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://apps.who.int/iris/bitstream/handle/10665/42052/9241545178.pdf?sequence=1&isAllowed=y ",
  },
];

export { services, technologies, experiences, testimonials, projects };



