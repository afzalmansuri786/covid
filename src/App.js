import React from "react";
// import Covid from "./components/covid";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/home";

import Helplines from "./pages/helpline-numbers-statewise";
import Guidelines from "./pages/guidelines";
import About from "./pages/about";
import Covid from "./pages/home";

function App() {
  return (
    
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/helpline-numbers-statewise' component={Helplines} />
        <Route path='/guidelines' component={Guidelines} />
        <Route path='/about' component={About}/>
        <Covid />  
      </Switch>
      
    </Router>
    
 
     

    

  );
}
export default App;
