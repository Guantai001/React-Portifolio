import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBAr';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Work/>
    </div>
  );
}

export default App;
