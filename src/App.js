import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Project>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Project> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
