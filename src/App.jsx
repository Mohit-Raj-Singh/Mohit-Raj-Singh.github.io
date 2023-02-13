import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Github from "./components/githubCalender/GitHubCalender";
import Navbar from "./components/nav/Nav";

export const App = () => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      {/* <Nav /> */}
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Github />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
