import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/landing/landing";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import reportWebVitals from "./test/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/contact" exact component={Contact} /> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
