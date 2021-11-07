import React from 'react';

export function Section({ children, id, title, sectionBox }) {
  return (
    <section id={id} className="sections">
      <div className="wrapper">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div className="section-title-row">
            <h1 className="section-title">
              {`< ${title}`}
              <span className="blink-caret">|</span>
            </h1>
            <div className="section-background-line" />
          </div>

          <div className={sectionBox}>{children}</div>
        </div>
      </div>
    </section>
  );
}
