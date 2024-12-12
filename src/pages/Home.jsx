import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
const Home = () => (
  <>
    <Navbar />
    <Header title="Welcome to Ayaan's Online Resume" subtitle="A showcase of my skills, experience, and projects." />
    <Section id="about" title="About Me">
      <p>Hello! I'm Ayaan, a passionate software engineer with a knack for problem-solving and staying updated on tech trends.</p>
    </Section>
    <Section id="skills" title="Skills" className="bg-light">
      <Skills />    
    </Section>
    <Section id="experience" title="Experience">
      <Experience />
    </Section>
    <Section id="projects" title="Projects" className="bg-light">
      <ProjectsCarousel />
    </Section>
    <Section id="contact" title="Contact" className="bg-light">
      <ContactForm />
    </Section>
    <Footer />
  </>
);

export default Home;
