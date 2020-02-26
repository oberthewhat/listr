import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import SimpleExpansionPanel from './components/Listings'

function App() {
  return (
   <div>
      <NavBar/>
      <SimpleExpansionPanel/>
   </div>
  );
}

export default App;
