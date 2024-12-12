import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "Kaamyaab.pk Platform",
    description: "Developed an AI-driven platform connecting students with employers.",
    link: "https://github.com/ayaanqasmi/kaamyaab-monorepo",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Stable Diffusion Finetune",
    description: "For cloud assignment, implemented Stable Diffusion finetuning.",
    link: "https://github.com/ayaanqasmi/cloud_assignment_2",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Portfolio Website",
    description: "Created a personal portfolio showcasing skills, experience, and projects.",
    link: "https://github.com/ayaanqasmi/Treact-Copycat",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Resume to job matcher",
    description: "Designed and implemented a resume-to-job matching platform.",
    link: "https://github.com/ayaanqasmi/resume-to-job-matcher",
    image: "https://via.placeholder.com/300"
  }
];
const Projects = () => (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="mb-4">Projects</h1>
        <div className="row">
          {projectsData.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
  
  export default Projects;