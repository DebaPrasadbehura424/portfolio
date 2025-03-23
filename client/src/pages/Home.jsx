import React from "react";
import Hero from "../component/Hero";
import Skills from "../component/Skills";
import Footer from "./Footer";
function Home(props) {
  return (
    <div>
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
