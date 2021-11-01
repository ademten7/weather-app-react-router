import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./NavBar/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Forcast from "./Sections/Forcast";
import NotFound from "./Sections/NotFound";
import SingleForcast from "./Sections/SingleForcast";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "skyblue" }} className="container">
        <Navigation />
        <Forcast />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/forcast" component={Forcast} />
          <Route path="/forcast/:name" component={SingleForcast} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
