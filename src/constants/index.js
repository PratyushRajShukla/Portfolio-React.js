import {
    mobile,
    backend,
    creator,
    web,
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
    node,
    fasta,
    cs,
    pyth,
    unity,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Dev",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "FASTAPI",
      icon: fasta,
    },
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
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "python",
      icon: pyth,
    },
    {
      name: "NODE.JS",
      icon: node,
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
      name: "C#",
      icon: cs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "MongoExpress",
      company_name: "MERN Stack",
      icon: mongodb,
      iconBg: "#383E56",
      date: "Nov 2022 - Present",
      points: [
        "A Social Network Project that uses MongoDB, Express.js and React.js.",
        "Primarily Developed Backend for registering users and related CRUD operations tested via Postman." ,
        "Data hosted in MongoDB Cloud Database. ",
      ],
    },
    {
      title: "Photo Upload-FastAPI",
      company_name: "FastApi Python",
      icon: docker,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "This is an image upload service's backend made with Python FastAPI.",
        "This project uses Amazon S3 to store image files"
      ],
    },
    {
      title: "Snow Boarder",
      company_name: "Game",
      icon: unity,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "A Game made using Unity that uses Unity Particle System.",
        "It gets its inspiration from games like Hill Climb Racing where a snowboarder has to move through the map by maintaining his balance and avoiding obstacles to reach finish line.",
      ],
    },
    {
      title: "Delivery Driver",
      company_name: "Game",
      icon: unity,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "A Game made using Unity having a car model in the game with the objective to pick up parcels from around the map and deliver it a specified location."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "What a Great Website!",
      name: "Deepraj Jha",
      designation: "Software Dev",
      company: "Salsforce",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about Programming like Pratyush does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "What a fun and Talented Guy!!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };