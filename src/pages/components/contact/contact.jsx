import React from 'react';
import { Section } from '../section-template/section-template';
import './contact.scss';

export function Contact() {
  // const API_TOKEN = process.env.REACT_APP_EMAIL_API_TOKEN;

  return (
    <Section
      id="section-contact"
      title="Contact"
      sectionBox="contact-box-section"
    >
      <div className="contact-container">
        <label>
          <span>Email:</span>
          <input type="text" />
        </label>
        <label>
          <span>Message:</span>
          <textarea />
        </label>
        <button type="submit">Send</button>
      </div>
    </Section>
  );
}
