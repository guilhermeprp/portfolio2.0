import React from "react";
import "./projects.scss";

import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import genshin from "../../../assets/image/projects/genshin-dmg-site.PNG";
import agileContent from "../../../assets/image/projects/agile-content-site.PNG";
import stf from "../../../assets/image/projects/stf-site.PNG";
import showOff from "../../../assets/image/projects/show-off-site.PNG";
import unipHc from "../../../assets/image/projects/unip-hc.png";

const projectsList = [
  {
    title: "Genshin DMG",
    text: "Site created for the a game called Genshin Impact, this site was maded to calculate your character damage, preventing players to waste money on weak characters.",
    img: genshin,
    imgOrder: "",
    link: "http://genshin-dmg.vercel.app/",
    linkSpan: "Site",
  },
  {
    title: "UnipHC",
    text: "Unip complementary hours is an app that help the university student to manage they hours and tasks.",
    img: unipHc,
    imgOrder: "order-2",
    link: "https://github.com/guilhermeprp/horas_c",
    linkSpan: "GitHub",
  },
  {
    title: "STF",
    text: "Supreme Federal Court new home page with Vue.js, Sass and mobile first method, we used UI/UX to build a new page focusing on accessibility. ",
    img: stf,
    imgOrder: "",
    link: "#void",
    linkSpan: "Not in Production",
  },
  {
    title: "AgileContent",
    text: "A challenge maded by Agile Content to build a new layout for streaming services with React.Js, Sass modules, MVC and mobile first.",
    img: agileContent,
    imgOrder: "order-2",
    link: "https://agile-content-challenge.vercel.app/",
    linkSpan: "Site",
  },
  {
    title: "ShowOff",
    text: "A project created for studies with React.js, using the poke.api to create all Pokemon cards.",
    img: showOff,
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
              <div
                data-aos={`${key % 2 === 1 ? "fade-left" : "fade-right"}`}
                data-aos-delay="200"
                data-aos-duration="1000"
                key={key}
                className="projects-row"
              >
                <a href={a.link} className={`projects-img-box ${a.imgOrder}`}>
                  <img src={`${a.img}`} alt="" />
                </a>
                <div
                  className={`projects-description-box ${
                    key % 2 === 1 ? "text-align-end" : ""
                  }`}
                >
                  <h2>{a.title}</h2>
                  <p>{a.text}</p>
                  <a href={a.link} className="text-link">
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
