import React from "react";

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-5 ${className}`}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;
