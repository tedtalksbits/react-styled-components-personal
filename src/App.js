import './App.css';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Section from './components/section/Section';
import { sectionOne, sectionTwo, sectionThree } from '../src/components/section/Data';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Section {...sectionOne} />
      <Section {...sectionTwo} />
      <Section {...sectionThree} />
    </div>
  );
}

export default App;
