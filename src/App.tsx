import './App.css';
import './App.scss';
import { NavBar } from './components/nav-bar';
import { Banner } from './components/banner';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    </>
  );
}

export default App;
