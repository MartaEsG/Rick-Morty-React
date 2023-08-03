import "./App.css";
import {BrowserRouter as Router, NavLink } from "react-router-dom";
import Routes from "./pages/Routes";
import React from "react";
import { useState } from "react";

export const GlobalContext= React.createContext()

function App() {
  const [favorites, setFavorites] = useState ([])

  return (
    
    <Router>
    <GlobalContext.Provider value ={{favorites, setFavorites}}>
    <div className="App">
      <div className="App-header">
        <nav className="App-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
        <Routes></Routes>
      </div>
    </div>
    </GlobalContext.Provider>
    </Router>
    
  );
}

export default App;
