import React from "react";
import "./index.scss";
import background from "../assets/video/home-background.mp4";

function Home() {
  return (
    <div className="background-home">
      <section id="section-first" className="section-home">
        <div className="box-titles">
          <h4>GUILHERME PIMENTA</h4>
          <h1>Front End Developer</h1>
          <h3>
            Together we will build modern interfaces for apps and websites.
            <br />
            Hands on and let's start to work.
          </h3>

          <a href="#section-skills" className="roll-to-icon">
            <div className="mouse-icon">
              <div className="mouse-roll"></div>
            </div>
          </a>
        </div>
        <div className="gradient"></div>
        <video autoplay="true" muted="true" loop="true">
          <source src={background} type="video/mp4" />
        </video>
      </section>

      <section id="section-skills" className="section-home">
        <h1>Skills</h1>
      </section>
    </div>
  );
}

export default Home;
