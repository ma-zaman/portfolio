import './App.css'
import './App.scss';
import { Banner } from './components/banner';
import NavBar from './components/nav-bar'

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    </>
  )
}

export default App
