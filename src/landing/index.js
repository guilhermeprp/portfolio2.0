import "./index.scss";
import background from "../assets/video/landing-background.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="landing-body"
    >
      <Link to="/home" className="press-start-background">
        <h1>Press Start</h1>
      </Link>
      <video autoPlay={true} muted={true} loop={true}>
        <source src={background} type="video/mp4" />
      </video>
    </motion.div>
  );
}

export default App;
