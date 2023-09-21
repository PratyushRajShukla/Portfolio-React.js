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
    mernp,
    fastp,
    del,
    snow,
    wwwe,
    raj,
    deepr,
    priya,
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
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
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
      image: deepr,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about Programming like Pratyush does.",
      name: "Priya Shukla",
      designation: "Game Dev",
      company: "Zynga Studios",
      image: priya,
    },
    {
      testimonial:
        "I truly enjoyed making this Website. I also enjoy maming Apps and Games",
      name: "Pratyush Raj Shukla",
      designation: "Self",
      company: "Self",
      image: raj,
    },
  ];
  
  const projects = [
    {
      name: "MongoExpress",
      description:
        "A Social Network Project that uses MongoDB, Express.js and React.js. Primarily Developed Backend for registering users and related CRUD operations tested via Postman. Data hosted in MongoDB Cloud Database.",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: mernp,
      source_code_link: "https://github.com/PratyushRajShukla/MongoExpress",
    },
    {
      name: "Photo Upload-FastAPI",
      description:
        "This is an image upload service's backend made with Python FastAPI. This project uses Amazon S3 to store image files",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "AmazonS3",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: fastp,
      source_code_link: "https://github.com/PratyushRajShukla/Photo-Upload-FastApi",
    },
    {
      name: "Snow Boarder",
      description:
        "A Game made using Unity that uses Unity Particle System. It gets its inspiration from games like Hill Climb Racing where a snowboarder has to move through the map by maintaining his balance and avoiding obstacles to reach finish line.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "UniyParticleSystem",
          color: "green-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
      ],
      image: snow,
      source_code_link: "https://github.com/PratyushRajShukla/Snowboarder",
    },
    // {
    //   name: "Delivery Driver",
    //   description:
    //     "A Game made using Unity having a car model in the game with the objective to pick up parcels from around the map and deliver it a specified location.",
    //   tags: [
    //     {
    //       name: "unity",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "C#",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Game",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: del,
    //   source_code_link: "https://github.com/PratyushRajShukla/DeliveryMan",
    // },
    // {
    //   name: "Portfolio Website",
    //   description:
    //     "A Portfolio Website made using react.js, three js, Tailwind CSS, React three fiber. Hosted on github pages.",
    //   tags: [
    //     {
    //       name: "ReactThreeFiber",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Threejs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "React",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: wwwe,
    //   source_code_link: "https://github.com/PratyushRajShukla/Portfolio-React.js",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };