import React from "react";

const ProjectCard = ({ title, description, link, image }) => (
  <div className="card mb-4">
    {image && <img src={image} className="card-img-top" alt={title} />}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      {link && (
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;