import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import {Routes } from "react-router-dom";
import { Route} from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className='App'>
      <Routes >
   
          <Route path='/' element={<Header />}>
      
      </Route>
     
          <Route path='/Hero'  element={<Hero />}>
          
      </Route>
      
          <Route path='/Services'  element={<Services />}>
         
      </Route>
      
          <Route path='/Experience'  element={<Experience />}>
          
      </Route>
      
          <Route path='/Portfolio'  element={<Portfolio />}>

      </Route>
      
          <Route path='/Skills' element={<Skills />}>
         
      </Route>
      
          <Route path='/Footer'  element={<Footer />}>
        
      </Route>
  </Routes >
      </div>
  );
}

export default App;
