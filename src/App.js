import React from 'react'
import "./App.css";
import { useEffect } from 'react'
import Aos from 'aos';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Hero from "./components/UI/Hero"
import Services from "./components/UI/Services"
import Portofolio from './components/UI/Portofolio';
import Contact from './components/UI/Contact';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
