import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/contact';
import Skills from './Components/Skills/Skills';
import GitHub from './Components/Github/Github';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <GitHub />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;
