
import './App.css';
import Hero from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import Products from './Component/Products';
import Competency from './Component/Competency';
import Contact from './Component/Contact';





function App() {
  return (
   
    <div className="App">
     
     <Hero/>
     <About/>
     <Services/>
     <Competency/>
     <Products/>
     <Contact/>
     
    </div>
 
  );
}

export default App;
