import React, { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import {Characters} from "./pages/Characters/index"
import {Episodes} from "./pages/Episodes/index"
// import {Favorites} from "./pages/Favorites/index"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Home} from "./pages/Home/index"
import {Navbar} from "./components/Navbar"
import { CharacterDetails } from './pages/CharacterDetails'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component={CharacterDetails} />
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          {/* <Route path="/favorites" component={Favorites} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
