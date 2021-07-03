import React from "react";
import background from "../../assets/video/home-background.mp4";

export default function Banner() {
  return (
    <section id="section-banner" className="sections">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="box-titles"
      >
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
      <video autoPlay={true} muted={true} loop={true}>
        <source src={background} type="video/mp4" />
      </video>
    </section>
  );
}
