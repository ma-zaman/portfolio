import './App.css';
import './App.scss';
import { NavBar } from './components/nav-bar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
