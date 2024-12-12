import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="py-5 text-center bg-primary text-white">
    <div className="container">
      <h1>{title}</h1>
      <p className="lead">{subtitle}</p>
    </div>
  </header>
);

export default Header;
