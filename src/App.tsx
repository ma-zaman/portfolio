import './App.css';
import './App.scss';
import { NavBar } from './components/nav-bar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
