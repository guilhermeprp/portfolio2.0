import React from 'react';
import { Menu } from '../components/menu/menu';
import '../home/home.scss';
import './about.scss';

export default function About() {
  return (
    <div className="background-home">
      <Menu />
      <div className="about-container">
        <div>
          <h1> SOBRE </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="profile-pic">
        <div className="shadow-left" />
        <div className="shadow-bottom" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/image/about/profile_pic.jpg`}
          alt="profile pic"
        />
      </div>
    </div>
  );
}
