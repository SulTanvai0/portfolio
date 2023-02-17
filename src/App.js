import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Qualification from './components/Qualification/Qualification';
import ScrollUp from './components/ScrollUp/ScrollUp';
// import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <Services /> */}
      <Qualification />
      <Testimonials/>
      <Contact/>
    </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
