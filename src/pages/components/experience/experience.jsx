import React, { useEffect, useState } from 'react';
import './experience.scss';
import Data from '../../../data/data.json';
import { Section } from '../section-template/section-template';

export function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 385);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 385);
    });
  }, []);

  return (
    <Section
      id="section-experience"
      title={isMobile ? ' Xp' : ' Experience'}
      sectionBox="experience-box-section"
    >
      {Data.experience
        .map((element) => (
          <div
            key={element.id}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="experience-card"
          >
            <h3>{element.position}</h3>
            <h2>{element.title}</h2>
            <p>
              {element.description.split('\n').map((str, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={index}>{str}</span>
              ))}
            </p>
            <i>
              {element.startDate}-{element.endDate}
            </i>
            <div className="card-ball" />
          </div>
        ))
        .reverse()}
    </Section>
  );
}
