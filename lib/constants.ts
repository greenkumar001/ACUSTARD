// Image constants for the website
export const IMAGES = {
  // Company images
  logo: "/ACUSTARD.jpeg",
  office: "/office.avif",
  team: "/Team.avif",

  // Hero section
  hero: "https://images.unsplash.com/photo-1581090700227-8e3b68af33f0?q=80&w=2070&auto=format&fit=crop",

  // Background images for different sections
  backgrounds: {
     tech: "/tech.avif",
  circuit: "/circuit.avif",
  data: "/data.avif",
  design: "/design.avif",
  gradient: "/gradient.avif",
  abstract: "/abstract.avif",
  network: "/network.avif",
  digital: "/digital.avif",
  ai: "/ai.avif",
  cyber: "/cyber.avif",
  software: "/software.avif",
  development: "/development.avif",
  }
,
  // Portfolio

  // Project showcase
  projects: [
  {
    id: "devrath-industries",
    title: "Devrath Industries Pvt. Ltd.",
    category: "Web Development",
    src: "/Devrath.jpeg",
    alt: "Devrath Industries Pvt. Ltd. Website",

    description:
      "A modern corporate website designed for a leading manufacturer of fire-rated and security doors.",

    overview:
      "We developed a modern and professional corporate website for Devrath Industries Pvt. Ltd., a leading manufacturer of fire-rated and security doors. The website showcases the company's products, manufacturing capabilities, and industry expertise through a clean, responsive, and user-friendly digital experience.",

    duration: "3 Months",
    client: "Devrath Industries Pvt. Ltd.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "Modern corporate website design",
      "Product showcase and categorization",
      "Responsive design for all devices",
      "Contact and inquiry management",
    ],

    results:
      "The new website established a strong digital presence for Devrath Industries and provided a professional platform to showcase their fire-rated and security door solutions to potential customers.",

    completed: "2025",

    url: "https://www.devrathindustries.com/",
  },

  {
    id: "sun-energy-systems",
    title: "SunEnergySystems",
    category: "Web Development",
    src: "/SunEnergy.jpeg",
    alt: "SunEnergySystems Website",

    description:
      "A modern renewable energy website designed to promote solar energy solutions and services.",

    overview:
      "We designed and developed a modern website for SunEnergySystems to showcase their renewable energy services and solar solutions. The platform focuses on clear communication, intuitive navigation, and a responsive user experience across desktop, tablet, and mobile devices.",

    duration: "2 Months",
    client: "SunEnergySystems",

    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
    ],

    features: [
      "Modern renewable energy website",
      "Solar services and solutions showcase",
      "Responsive design across all devices",
      "Intuitive user experience and navigation",
    ],

    results:
      "The website provides SunEnergySystems with a professional digital platform to promote renewable energy solutions, communicate their services, and connect with potential customers.",

    completed: "2025",

    url: "https://sunenergysystem.vercel.app/",
  },

  {
    id: "nexgenbr-technologies",
    title: "NexGenBR Technologies",
    category: "EdTech & Software Development",
    src: "/Nexgenbr.png",
    alt: "NexGenBR Technologies Platform",

    description:
      "A next-generation EdTech and Software Development platform connecting education with industry through a powerful LMS and enterprise management ecosystem.",

    overview:
      "NexGenBR Technologies is a next-generation EdTech and Software Development platform designed to bridge the gap between education and industry. The platform includes a powerful Learning Management System (LMS), role-based Admin Dashboard, Student and Trainer Portals, Placement Management, Live Classes, Course Management, Assessments, Coding Practice, Progress Tracking, Certificate Generation, Internship Management, Attendance, Announcements, AI-powered learning assistance, and analytics. Built with a scalable microservice-ready architecture, the system focuses on performance, security, responsive design, and a seamless experience for students, trainers, recruiters, and administrators.",

    duration: "12+ Months",
    client: "NexGenBR Technologies",

    technologies: [
      "Next.js",
      "PNPM",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Role-Based Access Control",
      "Admin Dashboard",
      "Learning Management System",
      "Placement Management",
      "Analytics Dashboard",
      "Cloud Deployment",
      "Responsive UI",
    ],

    features: [
      "Learning Management System (LMS)",
      "Role-based Admin Dashboard",
      "Student and Trainer Portals",
      "Placement Management System",
      "Live Classes and Course Management",
      "Assessments and Coding Practice",
      "Progress Tracking and Certificate Generation",
      "Internship and Attendance Management",
      "Announcements and Notifications",
      "AI-powered Learning Assistance",
      "Analytics and Reporting Dashboard",
      "Scalable and secure architecture",
    ],

    results:
      "The platform brings education, training, placements, internships, and industry interaction together in one scalable ecosystem. Its modular architecture enables organizations to manage learning, users, courses, assessments, placements, and analytics from a centralized platform.",

    completed: "2025–2026",

    url: "https://nexgenbrtechnologies.com/",
  },

  // Dummy projects can remain below
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Software Development",
    src: "/mobile-banking-app.avif",
    alt: "Mobile Banking App",

    description:
      "Secure and user-friendly mobile banking application with modern digital banking features.",

    overview:
      "A secure mobile banking application designed to provide users with a seamless digital banking experience.",

    duration: "3 Months",
    client: "SecureBank Corp.",

    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "Biometric authentication",
      "Real-time transaction monitoring",
      "Bill payment and fund transfers",
      "Personalized financial insights",
    ],

    results:
      "Improved digital banking experience and increased user engagement.",

    completed: "January 2023",

    url: "#",
  },

  {
    id: "product-brochure",
    title: "Product Brochure",
    category: "Design Services",
    src: "/design.avif",
    alt: "Product Brochure",

    description:
      "Elegant product brochure design that effectively showcases product features and benefits.",

    overview:
      "A professional product brochure designed to present products and services effectively.",

    duration: "1 Month",
    client: "ProductX Company",

    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
    ],

    features: [
      "Professional product photography",
      "Compelling copywriting",
      "Brand-aligned design elements",
      "Print and digital versions",
    ],

    results:
      "Improved product presentation and increased customer inquiries.",

    completed: "January 2023",

    url: "#",
  },

  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Digital Marketing",
    src: "/tech.avif",
    alt: "Social Media Campaign",

    description:
      "Integrated social media campaign focused on increasing engagement and conversions.",

    overview:
      "A complete social media campaign focused on content creation, community engagement, targeted advertising, and digital growth.",

    duration: "3 Months",
    client: "SocialBrand Agency",

    technologies: [
      "Content Strategy",
      "Social Media Marketing",
      "Analytics",
    ],

    features: [
      "Content creation and scheduling",
      "Community management",
      "Targeted advertising campaigns",
      "Performance analytics and reporting",
    ],

    results:
      "Increased engagement, followers, and website traffic through social media channels.",

    completed: "January 2023",

    url: "#",
  },
],


  // Team members
  team_members: [
    {
      name: "Greenkumar Bisen",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Visionary leader with over 4+ years of experience in the technology industry.",
    },
/*{
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "Technical genius with a passion for innovative solutions and emerging technologies.",
    },
    {
      name: "Michael Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "Design expert with an eye for detail and a flair for creating stunning visual experiences.",
    },*/
  ],

  // Service images
  services: {
    software: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },

  // Additional gallery images
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      alt: "Web Development",
    },
    {
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
      alt: "Mobile App Development",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      alt: "Data Analytics",
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      alt: "Design Process",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      alt: "Marketing Consulting",
    },
  ],
}