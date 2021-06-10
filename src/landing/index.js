import "./index.scss";
import background from "../assets/video/landing-background.mp4";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing-body">
      <Link to="/home" className="press-start-background">
        <h1>Press Start</h1>
      </Link>
      <video autoplay="true" loop="true" muted="true">
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
