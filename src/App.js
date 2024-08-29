import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {
  const[toggle, setToggle] = useState("");
  
  const setTheme = () => {
    if(toggle === "dark") setToggle("")
      else setToggle("dark")
  }
  return (
    <div className={`App ${toggle}`}>
      
        <Navbar setTheme={setTheme} />
        <Home />  
        <About /> 
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;


