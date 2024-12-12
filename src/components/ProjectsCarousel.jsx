import React from "react";

const ProjectsCarousel = () => (
  <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text">A personal portfolio website built with React and Three.js.</p>
            <a href="#" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Task Management App</h5>
            <p className="card-text">An app to manage and organize tasks effectively.</p>
            <a href="#" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
);

export default ProjectsCarousel;
