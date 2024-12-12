import React from 'react'

const Experience = () => {
  return (
    
      <div className="accordion" id="experienceAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#job1">
              Software Engineer at Kaamyaab.pk
            </button>
          </h2>
          <div id="job1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Developed and optimized a platform for students to connect with employers.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#job2">
              Frontend Developer at PolicyPal
            </button>
          </h2>
          <div id="job2" className="accordion-collapse collapse">
            <div className="accordion-body">
              Built a Chrome extension that summarizes terms and conditions for easy understanding.
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Experience
