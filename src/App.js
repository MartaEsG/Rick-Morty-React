import "./App.css";
import {BrowserRouter as Router, NavLink } from "react-router-dom";
import Routes from "./pages/Routes";



function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes></Routes>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
