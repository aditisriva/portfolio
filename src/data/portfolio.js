export const personalInfo = {
  name: "Aditi Srivastava",
  title: "Software Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a passionate software developer with hands-on experience in full-stack web and mobile development. I specialize in the MERN stack, React Native, and Firebase — turning complex problems into clean, user-friendly solutions.",
  email: "aditisriva2107@gmail.com",
  phone: "+91 987-724025",
  location: "Lucknow, Uttar Pradesh, India",
  resumeUrl: "https://drive.google.com/file/d/1WYR4ALBWNRg4UDr-CLlia4ELHbPc7cL9/view?usp=drive_link",
  avatar: "/src/assets/adu-photo.jpeg",
  social: {
    github: "https://github.com/aditisriva",
    linkedin: "https://www.linkedin.com/in/aditi-srivastava-345805257/",
  },
};

export const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Internships", value: "2" },
  { label: "Certifications", value: "2+" },
  { label: "Tech Stack", value: "10+" },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "IET, Dr. Bhimrao Ambedkar University, Agra",
    year: "2021 – 2024",
    gpa: null,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "FaReact",
    color: "#61DAFB",
    items: [
      { name: "React.js", level: 85 },
      { name: "React Native", level: 82 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 87 },
    ],
  },
  {
    category: "Backend",
    icon: "FaNodeJs",
    color: "#68A063",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Java", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "FaDatabase",
    color: "#F29111",
    items: [
      { name: "MongoDB", level: 82 },
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "FaCloud",
    color: "#FF9900",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 82 },
      { name: "Expo", level: 78 },
    ],
  },
  {
    category: "AI / ML",
    icon: "FaBrain",
    color: "#A78BFA",
    items: [
      { name: "Prompt Engineering", level: 72 },
      { name: "OpenAI API", level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Civic Connect",
    description:
      "A community-driven civic issue reporting platform — like Reddit meets LinkedIn for local problems. Citizens can report issues with images, upvote problems, filter by city/category, comment, and track resolution status. Includes JWT auth, admin dashboard, user profiles, and trending issues feed.",
    image: "https://civic-connect-client.vercel.app/assets/Demopolisframe1-Bc_CDOfF.gif",
    tags: ["React.js", "Node.js", "Express.js", "JWT", "CSS"],
    category: "Full Stack",
    github: "https://github.com/aditisriva/civic-connect",
    demo: "https://civic-connect-client.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Zenith Cabs — Transportation App",
    description:
      "A full-featured ride-booking mobile application on the Google Play Store built with React Native and Firebase. Offers solid-drive rentals and real-time ride management with live booking, vehicle selection, and ride tracking — similar to Uber and Ola.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Expo", "JavaScript"],
    category: "Mobile",
    github: "https://github.com/aditisriva",
    demo: "https://play.google.com/store/apps/details?id=com.zenith.cabs",
    featured: true,
  },
  {
    id: 3,
    title: "TipTop Dresses — E-Commerce",
    description:
      "A live e-commerce website for a fashion/dresses brand. Full shopping experience with product listings, categories, and a clean, responsive UI built for real customers.",
    image: "https://www.tiptopdresses.in/assets/img/gallery/17.jpg",
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce"],
    category: "Frontend",
    github: "https://github.com/aditisriva",
    demo: "https://www.tiptopdresses.in/",
    featured: false,
  },
  {
    id: 4,
    title: "Saptecdrc — Mining Workforce Solutions",
    description:
      "A professional web platform for Saptecdrc, a mining workforce solutions company in DRC. Showcases 500+ workforce deployed, 25+ projects delivered, with deployment-ready manpower sourced across Asia & Africa.",
    image: "https://saptecdrc.web.app/images/mining.jpg",
    tags: ["React.js", "CSS", "JavaScript", "Corporate"],
    category: "Frontend",
    github: "https://github.com/aditisriva",
    demo: "https://saptecdrc.web.app",
    featured: false,
  },
  {
    id: 5,
    title: "Gandhinagar Green Heroes",
    description:
      "A civic recycling initiative platform for Gandhinagar. Citizens can register for free doorstep waste pickup, earn badges, and track their environmental contribution. Built with a full-stack JS architecture deployed on Netlify.",
    image: "https://cute-marzipan-39c5b3.netlify.app/assets/hero_illustration-B2ILzlDN.png",
    tags: ["React.js", "Node.js", "Express.js", "JavaScript", "CSS"],
    category: "Full Stack",
    github: "https://github.com/aditisriva/fullstack",
    demo: "https://cute-marzipan-39c5b3.netlify.app/",
    featured: false,
  },
];

export const experience = [
  {
    company: "OnAMISC Technologies Pvt. Ltd.",
    role: "SDE Trainee (Full Stack)",
    duration: "Jan 2025 – April 2025",
    location: "India",
    type: "Internship",
    logo: "OA",
    color: "#3B82F6",
    achievements: [
      "Worked with SAI Intra (Sports Authority of India) for Khelo India Beach Games 2025",
      "Built dynamic Apps for real-world operations",
      "Worked on frontend, backend, and UI for Node.js projects",
    ],
  },
  {
    company: "NIELIT, Haridwar",
    role: "Web Designing Intern",
    duration: "Apr 2023 – Jun 2023",
    location: "Haridwar, Uttarakhand",
    type: "Internship",
    logo: "NI",
    color: "#8B5CF6",
    achievements: [
      "Completed 6-week industrial training in web design",
      "Gained proficiency in HTML, CSS, and JavaScript",
    ],
  },
];

export const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "NPTEL-JAVA-XXXXX",
    link: "https://drive.google.com/file/d/1UFE7QF7LLsfeYXpn_sXsfTEGt7Uhh83Q/view",
    icon: "FaJava",
    color: "#F89820",
    badge: "",
  },
  {
    title: "Programming in Java",
    issuer: "Infosys Springboard",
    date: "2023",
    credentialId: "INFOSYS-JAVA-XXXXX",
    link: "https://drive.google.com/file/d/1WQQelcPFrakAK38YHC1tBanYwzq_8RbT/view",
    icon: "FaJava",
    color: "#007CC3",
    badge: "",
  },
];
