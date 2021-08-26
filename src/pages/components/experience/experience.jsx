import React from 'react';
import './experience.scss';
import Data from '../../../data/data.json';

export function Experience() {
  return (
    <section id="section-experience" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {'<'}
              {window.innerWidth < 385 ? ' Xp' : ' Experience'}
              <span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line" />
          </div>
          <div className="experience-box-section">
            {Data.experience
              .sort((a, b) => a.startDate > b.startDate && -1)
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
                    {element.description.split('\n').map((str) => (
                      <span>{str}</span>
                    ))}
                  </p>
                  <i>
                    {element.startDate} - {element.endDate}
                  </i>
                  <div className="card-ball" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
