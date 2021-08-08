import React from "react";
import "./experience.scss";

const projectsList = [
  {
    title: "UnB - Universidade de Brasília",
    position: "Internship",
    description:
      'Hardware configuration and manutention. \n Process management, data survey, document shipping and public attendance.',
    startDate: "06/2018",
    endDate: "12/2018",
  },
  {
    title: "Anvisa - Agência Nacional de Vigilância Sanitária",
    position: "Internship",
    description: "Rede de computadores, máquinas virtuais,emissão de certificados digitais, acesso remoto, concessão de acessos, firewall.",
    startDate: "01/2019",
    endDate: "08/2019",
  },
  {
    title: "EBC - Empresa Brasil Comunicação",
    position: "Web Developer",
    description:
      "Back-end Development - Node.js, Postgres, Api REST.\n Front-end - React, React Native.\n Desktop applications - Java 8, Maven, Docker. \nOS - Linux and Windows.Monitoring - Zabbix, Grafana. \nData analyze - Elasticsearch e PowerBI.",
    startDate: "09/2019",
    endDate: "10/2020",
  },
  {
    title: "STF - Supremo Tribunal Federal",
    position: "Front-end Developer",
    description:
      "Mobile first. \n Vue 2 using Vuex , SASS, Bootstrap, grid-layout, components. \n Api Rest with axios.",
    startDate: "11/2020",
    endDate: "07/2021",
  }, 
];

export function Experience() {
  return (
    <section id="section-experience" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {"<"}
              {window.innerWidth < 385 ? " Xp" : " Experience"}
              <span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line"></div>
          </div>
          <div className="experience-box-section">
            {projectsList
              .sort((a, b) => a.startDate > b.startDate && -1)
              .map((a, key) => (
                <div
                  data-aos={"fade-up"}
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="experience-card"
                  key={key}
                >
                  <h3>{a.position}</h3>
                  <h2>{a.title}</h2>
                  <p>
                  {a.description.split("\n").map(str => <span>{str}</span>)}
                  </p>
                  <i>
                    {a.startDate} - {a.endDate}
                  </i>
                  <div className="card-ball"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
