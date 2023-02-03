import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBAr';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contacts from './components/Contacts';
import { createContext,useState } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("dark")

  const toggleTheme = () => {
     setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    
    <ThemeContext.Provider value={{theme,toggleTheme}}>



    <div className="App" id={theme}>
      <NavBar theme= {theme} toggleTheme= {toggleTheme} />
      <Home/>
      <About/>
      <Services/>
      <Work/>
      <Contacts/>
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
