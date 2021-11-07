import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Banner } from '../components/banner/banner';
import { Skills } from '../components/skills/skills';
import { Projects } from '../components/projects/projects';
import { Experience } from '../components/experience/experience';
import { Contact } from '../components/contact/contact';
// import { Menu } from '../components/menu/menu';
import Footer from '../components/footer/footer';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="background-home"
    >
      {/* <Menu /> */}
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;
