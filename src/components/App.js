import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import About from './pages/About';
import Actors from './pages/Actors';
import Contact from './pages/Contact';
import Genre from './pages/Genre';
import Home from './pages/Home';
import DramaSingle from './pages/DramaSingle';
import { Switch, Route } from 'react-router';


function App() {
  return (
    <div>
      <div className="bodyContainer">
        <Header /> 

        <Switch>
          <Route path="/dramas/:id">
            <DramaSingle />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/genre">
            <Genre />
          </Route>

          <Route path="/actors">
            <Actors />
          </Route>
        </Switch>
      </div>

      <div className="footerContainer">
        <Footer />  
      </div>
    </div>
  );
}

export default App;
