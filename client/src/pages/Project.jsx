import React from 'react';
import EachProject from '../components/Project';

function Project() {
  const projects = [
    {
      id: 1,
      title: "Gastronome",
      description: "GastronoMe is an innovative recipe-sharing platform meticulously crafted by three dynamic bootcamp students from the University of Denver. Rooted in a passion for culinary exploration, GastronoMe invites users into a vibrant community where gastronomic enthusiasts converge to discover, share, and savor an array of delectable recipes. By seamlessly blending technology with culinary artistry, GastronoMe redefines the digital cookbook experience, empowering users to unleash their creativity in the kitchen and embark on an epicurean journey of unparalleled flavor.",
      technologies: ["JavaScript/Node.js", "Handlebars.js", "Express.js", "PostgreSQL", "Sequelize", "Render", "ESLint"],
      features: [
        "User Authentication: Utilizing express-session and bcrypt, GastronoMe provides a secure authentication system for users to create accounts and log in securely.",
        "Recipe Sharing: Users can easily share their recipes with the community, including ingredients, cooking instructions, and images for a comprehensive cooking experience.",
        "Commenting System: Engage in discussions and provide feedback on recipes through the commenting system, fostering a vibrant culinary community atmosphere",
        "Interactive Dashboard: GastronoMe offers an intuitive homepage for users to manage their recipes effortlessly, including updating and deleting them.",
        "Image Upload: Leveraging express-fileupload and Cloudinary, users can upload images of their dishes to accompany their recipes, enhancing the visual appeal and user experience.",
        "Responsive Design: GastronoMe features a fully responsive design, ensuring seamless user experience across devices, from desktops to mobile devices."
      ],
      image: "./all-recipes-gastronome.png",
      video: "",
      github: "https://github.com/beckpull/gastronome",
      deployed: "https:gastronome.onrender.com"
    },
    {
      id: 2,
      title: "Social Network API",
      description: "This repository contains a basic REST API built with Node.js, Express.js, MongoDB, and Mongoose. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a collection of resources stored in a MongoDB database.",
      technologies: ["JavaScript/Node.js", "Express.js", "Jest", "MongoDB/Mongoose", "Nodemon/Postman"],
      features: [
        "Express.js: Utilizes Express.js for handling routing and middleware, providing a flexible and scalable architecture for the API.",
        "MongoDB with Mongoose: Integrates MongoDB as the database backend, with Mongoose providing object modeling for Node.js, simplifying interactions with the database.",
        "CRUD Operations: Implements endpoints for performing CRUD operations on users, thoughts, reactions, and friend lists, allowing for seamless management of data.",
        "Asynchronous Operations: Handles database operations asynchronously to ensure optimal performance and scalability.",
        "Error Handling: Includes robust error handling to provide informative responses in case of invalid requests or server errors."
      ],
      image: "./social-network-thoughts.png",
      video: "https://drive.google.com/file/d/1sLbUSHUm0UKJLUR87v5fbyDN_cBwLAJ2/view",
      github: "https://github.com/beckpull/social-network-api",
      deployed: ""
    },
    {
      id: 3,
      title: "Just Another Text Editor: A Progressive Web Appplication",
      description: "Express PWA repository—a cutting-edge text editor application leveraging the power of Progressive Web App technology.",
      technologies: ["MongoDB", "Webpack", "Web App Manifest", "JavaScript/Node.js", "Nodemon", "Postman"],
      features: [
        "Progressive Web App (PWA): Utilizes the latest web technologies to deliver an app-like experience, enabling users to install and use the text editor directly from their web browsers.",
        "Express Backend: Employs Express.js for the backend, providing a robust and efficient server framework for handling HTTP requests and serving the application's resources.",
        "Offline Support: Utilizes service workers to enable offline functionality, ensuring users can continue editing their documents even when they're not connected to the internet.",
        "Rich Text Editing: Provides a feature-rich text editing experience with support for formatting, syntax highlighting, code completion, and more."
      ],
      image: "./pwa-browser-console.png",
      video: "",
      github: "https://github.com/beckpull/pwa-text-editor",
      deployed: "https://pwa-text-editor-vx5e.onrender.com/"
    },
    {
      id: 4,
      title: "TechBlog: A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well",
      description: "TechBlog is a content management system (CMS) inspired by popular blogging platforms like WordPress, designed specifically for tech enthusiasts. With TechBlog, users can create an account, publish posts on various tech topics, engage in discussions through comments, and explore a vibrant community of like-minded individuals.",
      technologies: ["JavaScript/Node.js", "Express.js", "PostgreSQL", "Sequelize"],
      features: [
        "User Authentication: Secure user authentication system allowing users to create accounts and log in securely.",
        "Create and Publish Posts: Users can easily create, edit, and publish posts on a wide range of tech-related topics.",
        "Commenting System: Engage in discussions by commenting on posts, fostering a dynamic community atmosphere.",
        "Responsive Design: Fully responsive design ensures seamless user experience across devices, from desktops to mobile devices.",
        "Interactive Dashboard : Intuitive dashboard for users to manage/update/delete their posts effortlessly."
      ],
      image: "./techblog-post.png",
      video: "",
      github: "https://github.com/beckpull/tech-blog",
      deployed: ""
    },
    {
      id: 5,
      title: "E-Commerce Database Integration",
      description: "This is an example of some back-end processes one could use for their e-commerce website (which uses the latest technologies) to enable their company to compete with other e-commerce companies",
      technologies: ["JavaScript/Node.js", "Sequelize", "PostgreSQL", "Express.js", "Nodemon"],
      features: [
        "Easy Integration: Designed for seamless integration into existing e-commerce websites, catering to users of all technical levels.",
        "Inventory Management: Allows companies to efficiently manage and track their inventory items within their website.",
        "Database Backend: Utilizes Postgres as the backend database for storing inventory and related data.",
        "RESTful API: Provides a set of RESTful endpoints for accessing and manipulating inventory data, including products, categories, and tags.",
        "JavaScript Stack: Built with JavaScript, leveraging Node.js for server-side scripting and Express.js for building web applications.",
        "ORM Integration: Uses Sequelize, an ORM (Object-Relational Mapping) library for Node.js, facilitating interaction with the Postgres database."
      ],
      image: "./e-commerce-get.png",
      video: "https://drive.google.com/file/d/1Tv-WVJPkxhrQiLhGpHmbhtl6tIY7OvaY/view",
      github: "https://github.com/beckpull/e-commerce-db",
      deployed: ""
    },
    {
      id: 6,
      title: "Personal Algorithm Practice Repository",
      description: "In the journey of becoming a proficient developer, mastering algorithms is paramount. This repository is my dedicated space for practicing a variety of algorithmic problems, honing my problem-solving abilities, and exploring different algorithmic techniques.",
      technologies: ["JavaScript"],
      features: [
        "Personalized Learning: I've curated a selection of algorithmic problems that align with my learning goals and areas of interest, ensuring that each problem contributes to my growth as a developer.",
        "In-depth Solutions: For each problem, I provide detailed solutions implemented in various programming languages, allowing me to explore different approaches and learn from best practices.",
        "Structured Organization: Problems are organized and tagged based on their topics and difficulty levels, enabling me to focus on specific areas or challenge myself with more advanced problems.",
        "Continuous Improvement: As I progress in my algorithmic journey, I regularly revisit and revise my solutions, striving to optimize them and deepen my understanding of the underlying concepts."
      ],
      image: "",
      video: "",
      github: "https://github.com/beckpull/algo-practice",
      deployed: ""
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="container" key={project.id}>
          <EachProject title={project.title} description={project.description} technologies={project.technologies} features={project.features} image={project.image} video={project.video} github={project.github} deployed={project.deployed} />
        </div>
      ))}
    </div>
  )
}

export default Project;