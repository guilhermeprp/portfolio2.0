import React, { useEffect } from "react";
import "./index.scss";
import background from "../assets/video/home-background.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className="background-home">
      <section id="section-first" className="section-home">
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
        <video autoplay="true" muted="true" loop="true">
          <source src={background} type="video/mp4" />
        </video>
      </section>

      <section id="section-skills" className="section-home">
        <div className="wrapper">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="section-title-row">
              <h1 className="section-title">
                {"<"} Skills<span className="blink-caret">|</span>
              </h1>

              <div className="section-background-line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
