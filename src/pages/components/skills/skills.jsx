import React from 'react';
import './skills.scss';
import Data from '../../../data/data.json';

export function Skills() {
  return (
    <section id="section-skills" className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {'<'} Skills<span className="blink-caret">|</span>
            </h1>

            <div className="section-background-line" />
          </div>
          <div className="skills-box-section">
            {Data.skills.map((element) => (
              <>
                <div className="skills-box" key={element.key}>
                  <img
                    className="skills-shadow"
                    src={`${process.env.PUBLIC_URL}${element.image}`}
                    alt=""
                  />
                  <img
                    className="skills"
                    src={`${process.env.PUBLIC_URL}${element.image}`}
                    alt=""
                  />
                  <p>{element.name}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
