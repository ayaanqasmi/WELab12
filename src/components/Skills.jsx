import React from "react";

const Skills = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <h4>Technical Skills</h4>
        <ul className="list-group">
          <li className="list-group-item">
            JavaScript <span className="badge bg-primary">Advanced</span>
          </li>
          <li className="list-group-item">
            React <span className="badge bg-info">Intermediate</span>
          </li>
          <li className="list-group-item">
            Python <span className="badge bg-success">Advanced</span>
          </li>
        </ul>
      </div>
      <div className="col-md-8">
        <h4>Proficiency</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
          >
            JavaScript
          </div>
        </div>
        <div className="progress mb-3">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "70%" }}
          >
            React
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "90%" }}
          >
            Python
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
