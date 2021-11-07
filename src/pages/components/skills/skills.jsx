import React from 'react';
import './skills.scss';
import Data from '../../../data/data.json';
import { Section } from '../section-template/section-template';

export function Skills() {
  return (
    <Section id="section-skills" title="Skills" sectionBox="skills-box-section">
      {Data.skills.map((element) => (
        <div key={element.id} className="skills-box">
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
      ))}
    </Section>
  );
}
