import React from "react";
// import "experience.scss";

// const projectsList = [
//   {
//     title: "UnB - Universidade de Brasília",
//     position: "Internship",
//     description:
//       "Hardware configuration and manutention. \nProcess management, data survey, document shipping and public attendance.",
//     startDate: "06/2018",
//     endDate: "12/2018",
//   },
//   {
//     title: "Anvisa - Agência Nacional de Vigilância Sanitária",
//     position: "Internship",
//     description: "",
//     startDate: "01/2019",
//     endDate: "08/2019",
//   },
//   {
//     title: "EBC - Empresa Brasil Comunicação",
//     position: "Web Developer",
//     description:
//       "Back-end Development - Node.js, Postgres, Api REST.\nFront-end - React, React Native.\nDesktop applications - Java 8, Maven, Docker. \nOS - Linux and Windows.Monitoring - Zabbix, Grafana. \nData analyze - Elasticsearch e PowerBI.",
//     startDate: "09/2019",
//     endDate: "10/2020",
//   },
//   {
//     title: "STF - Supremo Tribunal Federal",
//     position: "Front-end Developer",
//     description:
//       "Mobile first. \nVue 2 using Vuex , SASS, Bootstrap, grid-layout, components. \nApi Rest with axios.",
//     startDate: "11/2020",
//     endDate: "07/2021",
//   },
//   { title: "", position: "", description: "", startDate: "", endDate: "" },
// ];

export function Experience() {
  return (
    <section id="section-experience" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {"<"} Xp<span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line"></div>
          </div>
          <div className="experience-box-section">
            <h1>Coming soon</h1>
            {/* {projectsList.map((a, key) => (
              <div key={key}>
                <h2>{a.title}</h2>
                <h3>{a.position}</h3>
                <p>{a.description.split("\n")}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
