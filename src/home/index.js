import React from "react";
import "./index.scss";
import background from "../assets/video/home-background.mp4";

function Home() {
  return (
    <div className="background-home">
      <section id="section-first" className="section-home">
        <div className="box-titles">
          <h1>STARTOU MIZERAVI</h1>
        </div>
        <video autoplay="true" muted="true" loop="true">
          <source src={background} type="video/mp4" />
        </video>
      </section>

      <section className="">
        <h1>STARTOU MIZERAVI</h1>
      </section>
    </div>
  );
}

export default Home;
