//lib/content.ts
export type Person = {
  name: string;
  role: string;
  image?: string;
  bio: string;
  fullBio: string;
  group: "Board of Trustees" | "Key Staff";
};

export type Programme = {
  title: string;
  date: string;
  status: "Completed" | "Active";
  summary: string;
  detail: string;
  metric: string;
};

export type ProjectTeamMember = {
  name: string;
  role: string;
  responsibility: string;
};

export const organization = {
  name: "Citizens Voices International",
  shortName: "CVI",
  location: "Makurdi, Benue State, Nigeria",
  mission:
    "To build a world where empowered citizens, especially young people, drive inclusive governance, sustainable development, and peaceful societies.",
  description:
    "Citizens Voices International is a nonprofit Incorporated Trustee based in Makurdi, Benue State. We address structural barriers preventing young Nigerians, particularly in the Middle Belt, from accessing skills, opportunities, and platforms for sustainable livelihoods.",
  registration: "CAC Incorporated Trustee No. 9614146",
  tin: "2620735177241",
  address: "No 2, Konshisha Street, High Level, Makurdi, Benue State, Nigeria",
  founded: "Operational since 2024 · Incorporated 8 June 2026",
  email: "cvi@gmail.com",
};

export const stats = [
  { value: "20", label: "Fellowship participants" },
  { value: "4", label: "Full-time staff" },
  { value: "9", label: "Active volunteers" },
  { value: "2", label: "Projects in portfolio" },
];

export const people: Person[] = [
  {
    name: "Michael Benjamin",
    role: "Founder & Chairman",
    image: "/michealbenjamin.jpeg",
    bio: "Founder and civic learning leader based in Makurdi.",
    fullBio:
      "Founder and Managing Director of Micotech ICT Solutions and Services; Applied Learning Cluster Lead for the Federal 3MTT Programme; Program Head at Joshua of Nigeria and Global Peace Initiative; 2024 Mandela Washington Fellow; and Team Lead for CVI's Simi Olusola Youth in Politics programme in Akwa Ibom State.",
    group: "Board of Trustees",
  },
  {
    name: "Festus Moses",
    role: "Co-Founder & Secretary",
    image: "/festusmoses.jpeg",
    bio: "Entrepreneur and youth livelihoods advocate working from Kano.",
    fullBio:
      "Founder and CEO of Moss Maison Global Ltd, co-founder of Enomi Foods and Agro Limited, 2024 Mandela Washington Fellow at Rutgers University, YALI Network Kano State Coordinator, and State Chairman of the Cobblers and Leather Artisans Association of Nigeria. He has trained and mentored more than 500 young entrepreneurs and artisans.",
    group: "Board of Trustees",
  },
  {
    name: "Tuleun A. Kelvin",
    role: "Programs & Learning Delivery Lead",
        image: "/tuleunkelvin.jpeg",
    bio: "Community builder and learning delivery specialist in Benue.",
    fullBio:
      "State Programme Manager for the national 3MTT programme in Benue and State Community Manager for Google Developer Groups. He leads the national 3MTT Knowledge Showcase build challenge, which has received more than 33,000 product submissions from 16,000 learners since February 2024. He also grew Benue's 3MTT community from about 200 to more than 6,000 learners and established Benue's Learn2Earn learning centre.",
    group: "Key Staff",
  },
  {
    name: "Lucy Iorliam",
    role: "Lead Data Analyst & M&E Lead",
    image: "/lucyiorliam.jpeg",
    bio: "Data and monitoring specialist focused on useful evidence.",
    fullBio:
      "Lucy leads CVI's data analysis and monitoring, evaluation, and learning work. She has served as an M&E consultant for Jobberman's national Soft Skills & Entrepreneurship training programme in the Benue region.",
    group: "Key Staff",
  },
];

export const programmes: Programme[] = [
  {
    title: "Digital Skills Makurdi AI Bootcamp",
    date: "June 2026",
    status: "Completed",
    summary: "A practical introduction to AI fundamentals for young people in Makurdi.",
    detail:
      "The bootcamp trained 57 Makurdi youths on foundational artificial intelligence concepts and practical applications. It was sponsored by the Mandela Washington Fellows Alumni Association of Nigeria.",
    metric: "57 youths trained",
  },
  {
    title: "Youth voice and civic participation",
    date: "Building in 2026",
    status: "Active",
    summary: "A growing programme platform for young citizens to engage public life.",
    detail:
      "CVI is developing practical learning and participation pathways that connect young people with the skills, confidence, and platforms needed to contribute to inclusive governance.",
    metric: "Next cohort in development",
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Governance", href: "/governance" },
  { label: "Contact", href: "/contact" },
];

export const soyipfTeam: ProjectTeamMember[] = [
  {
    name: "Michael Benjamin",
    role: "Project Director",
    responsibility: "Overall project leadership, strategic planning, stakeholder management, and delivery oversight.",
  },
  {
    name: "James Akan",
    role: "Program and Partnership Manager",
    responsibility: "Day-to-day operations, implementation coordination, and strategic partner development.",
  },
  {
    name: "Serena Francis",
    role: "Monitoring and Evaluation Specialist",
    responsibility: "Developing the monitoring and evaluation framework to track progress and project impact.",
  },
  {
    name: "Aisha Rilwanu",
    role: "Policy Advocacy and Empowerment Manager",
    responsibility: "Engaging policymakers and advocating for policies that support young people's political participation.",
  },
  {
    name: "Ibrahim Adewale Oladipo",
    role: "Community Engagement and Mobilisation Officer",
    responsibility: "Building relationships with communities, organisations, and local stakeholders.",
  },
  {
    name: "Chibuike Egbujiem",
    role: "Curriculum Development, Training and Capacity Building Specialist",
    responsibility: "Designing and delivering training that strengthens fellows' skills and capacity.",
  },
  {
    name: "Oluwutomisi Adeyefa",
    role: "Strategic Communications and Media Officer",
    responsibility: "Developing communications, managing media relations, and promoting the fellowship.",
  },
  {
    name: "Festus Moses",
    role: "Finance, Administration and Grant Mobilization Manager",
    responsibility: "Overseeing budgeting, financial management, administration, and resource allocation.",
  },
  {
    name: "Ridwanullahi Amoo Olasunkanmi",
    role: "Research, Technical and Innovative Manager",
    responsibility: "Researching youth political participation and providing data-driven insights for project strategy.",
  },
  {
    name: "Hafiz Mukhtar",
    role: "Volunteer, Intern and Psychosocial Support Coordinator",
    responsibility: "Managing volunteers and interns while providing psychosocial support and motivation.",
  },
];