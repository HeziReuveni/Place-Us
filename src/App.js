import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "בראשית מצבות";
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <div className="Program-page">
            <Navbar />
            <Hero />
            <About />
            <Demo />
            <ContactUs />
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
