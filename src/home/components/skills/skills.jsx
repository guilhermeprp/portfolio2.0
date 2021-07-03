import React from "react";
import skill_react from "../../../assets/image/skills-curriculo-react.png";
import skill_vue from "../../../assets/image/skills-curriculo-vue.png";
import skill_flutter from "../../../assets/image/skills-curriculo-flutter.png";
import skill_javascript from "../../../assets/image/skills-curriculo-javascript.png";
import skill_html from "../../../assets/image/skills-curriculo-html.png";
import skill_sass from "../../../assets/image/skills-curriculo-sass.png";
import skill_english from "../../../assets/image/skills-curriculo-english.png";
import "./skills.scss";

const skillsList = [
  {
    name: "React/Native",
    image: skill_react,
  },
  { name: "VueJs", image: skill_vue },
  {
    name: "Flutter",
    image: skill_flutter,
  },
  {
    name: "JavaScript",
    image: skill_javascript,
  },
  { name: "Html", image: skill_html },
  { name: "Sass", image: skill_sass },
  {
    name: "English",
    image: skill_english,
  },
];

export function Skills() {
  return (
    <section id="section-skills" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {"<"} Skills<span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line"></div>
          </div>
          <div className="skills-box-section">
            {skillsList.map((a, index) => (
              <div className="skills-box" key={index}>
                <img className="skills-shadow" src={a.image} alt="" />
                <img className="skills" src={a.image} alt="" />
                <p>{a.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
