import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./NavBar/Navigation";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Forcast from "./Sections/Forcast";
import NotFound from "./Sections/NotFound";
import SingleForcast from "./Sections/SingleForcast";
import SingleMain from "./Sections/SingleMain";
import SinglePath from "./Sections/SinglePath";
import SingleDeper from "./Sections/SingleDeper";

function App() {
  return (
    <HashRouter>
      <div style={{ backgroundColor: "skyblue" }} className="container">
        <Navigation />
        <Forcast />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* dont forget  add to exact keyword previous path*/}
          <Route exact path="/forcast" component={Forcast} />
          <Route exact path="/forcast/:name" component={SingleForcast} />
          <Route exact path="/forcast/:name/:main" component={SingleMain} />
          <Route
            exact
            path="/forcast/:name/:main/:path"
            component={SinglePath}
          />
          <Route
            path="/forcast/:name/:main/:path/:go"
            component={SingleDeper}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
