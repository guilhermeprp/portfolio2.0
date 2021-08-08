import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Banner } from "../components/banner/banner.jsx";
import { Skills } from "../components/skills/skills.jsx";
import { Projects } from "../components/projects/projects.jsx";
import { Experience } from "../components/experience/experience.jsx";
import { Menu } from "../components/menu/menu.jsx";
import Footer from "../components/footer/footer";

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
      <Menu />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </motion.div>
  );
}

export default Home;
