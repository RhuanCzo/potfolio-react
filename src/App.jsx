import React from "react";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"
import { Service } from "./components/Services/Service"
import { MyWork } from "./components/MyWorks/MyWork";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App