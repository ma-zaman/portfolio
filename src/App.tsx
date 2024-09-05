import './App.css';
import './App.scss';
import { NavBar } from './components/nav-bar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
      </div>
    </>
  );
}

export default App;
