import React from 'react';
import './projects.scss';

import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Data from '../../../data/data.json';
import { Section } from '../section-template/section-template';

export function Projects() {
  return (
    <Section
      id="section-projects"
      title="Projects"
      sectionBox="projects-box-section"
    >
      {Data.projects.map((element, index) => (
        <div
          key={element.id}
          data-aos={`${index % 2 === 1 ? 'fade-left' : 'fade-right'}`}
          data-aos-delay="200"
          data-aos-duration="1000"
          className="projects-row"
        >
          <a
            href={element.link}
            className={`projects-img-box ${element.imgOrder}`}
            target="_blank"
            rel="noopener noreferrer"
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
            <a
              href={element.link}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{element.linkSpan}</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      ))}
    </Section>
  );
}
