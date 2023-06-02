import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
//import {Routes } from "react-router-dom";
//import { Route} from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className='App'>
  
  <Header />
  <Hero />
  <Services />
  <Experience />
  <Portfolio />
  <Skills />
  <Footer />
      </div>

  );
}

export default App;
