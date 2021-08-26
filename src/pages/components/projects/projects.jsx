import React from 'react';
import './projects.scss';

import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Data from '../../../data/data.json';

export function Projects() {
  return (
    <section id="section-projects" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {'<'} Projects
              <span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line" />
          </div>
          <div className="projects-box-section">
            {Data.projects.map((element, index) => (
              <div
                data-aos={`${index % 2 === 1 ? 'fade-left' : 'fade-right'}`}
                data-aos-delay="200"
                data-aos-duration="1000"
                className="projects-row"
                key={element.id}
              >
                <a
                  href={element.link}
                  className={`projects-img-box ${element.imgOrder}`}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${element.img}`}
                    alt={`${element.title}`}
                  />
                </a>
                <div
                  className={`projects-description-box ${
                    index % 2 === 1 ? 'text-align-end' : ''
                  }`}
                >
                  <h2>{element.title}</h2>
                  <p>{element.text}</p>
                  <a href={element.link} className="text-link">
                    <span>{element.linkSpan}</span>
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
