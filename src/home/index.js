import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./sections/banner";
import Skills from "./sections/skills";

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
      <Banner />
      <Skills />
    </motion.div>
  );
}

export default Home;
