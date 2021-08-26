import React from 'react';
import './banner.scss';

export function Banner() {
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
          Hands on and let&apos;s start to work.
        </h3>

        <a href="#section-skills" className="roll-to-icon">
          <div className="mouse-icon">
            <div className="mouse-roll" />
          </div>
        </a>
      </div>
      <div className="gradient" />
      <video autoPlay muted loop>
        <source
          src={`${process.env.PUBLIC_URL}/assets/video/home-background.mp4`}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
