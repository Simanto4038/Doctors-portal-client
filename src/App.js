import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Notfound from "./Componets/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
     
      <Switch>
        <Route exact path='/'>
         
        </Route>
       
      
        <Route path="*">
           <Notfound/>
        </Route>
      </Switch>
     
      
      </Router>
    </div>
  );
}

export default App;
