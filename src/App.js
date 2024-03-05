import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Works from './components/works_skills/Works';

function App() {
  return (
    <div className="App">
    <Header/>
      <Home/>
      <About/>
      <Services/>
      <Works/>
      <Contact/>
    
     
    </div>
  );
}

export default App;
