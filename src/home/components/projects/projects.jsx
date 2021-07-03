import React from "react";
import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const projectsList = [
  {
    title: "Genshin DMG",
    text: "Site created for the a game called Genshin Impact, this site was maded to calculate your character damage, preventing players to waste money on weak characters.",
    img: "",
    imgOrder: "",
    link: "https://genshin-dmg-calculator.vercel.app/",
    linkSpan: "Site",
  },
  {
    title: "UnipHC",
    text: "Unip complementary hours is an app that help the university student to manage they hours and tasks.",
    img: "",
    imgOrder: "order-2",
    link: "https://github.com/guilhermeprp/horas_c",
    linkSpan: "GitHub",
  },
  {
    title: "STF",
    text: "Supreme Federal Court new home page with Vue.js, Sass and mobile first method, we used UI/UX to build a new page focusing on accessibility. ",
    img: "",
    imgOrder: "",
    link: "#void",
    linkSpan: "Not in Production",
  },
  {
    title: "AgileContent",
    text: "A challenge maded by Agile Content to build a new layout for streaming services with React.Js, Sass modules, MVC and mobile first.",
    img: "",
    imgOrder: "order-2",
    link: "https://agile-content-challenge.vercel.app/",
    linkSpan: "Site",
  },
  {
    title: "ShowOff",
    text: "A project created for studies with React.js, using the poke.api to create all Pokemon cards.",
    img: "",
    imgOrder: "",
    link: "#void",
    linkSpan: "GitHub",
  },
];

export function Projects() {
  console.log(projectsList);
  return (
    <section id="section-projects" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {"<"} Projects<span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line"></div>
          </div>
          <div className="projects-box-section">
            {projectsList.map((a, key) => (
              <div id={key} className="projects-row">
                <div className={`projects-img-box ${a.imgOrder}`}></div>
                <div
                  className={`projects-description-box ${
                    key % 2 === 1 ? "text-align-end" : ""
                  }`}
                >
                  <h2>{a.title}</h2>
                  <p>{a.text}</p>
                  <a href={a.link}>
                    <span>{a.linkSpan}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
