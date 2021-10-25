import React from "react";
import Covid from "./components/covid";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Blogs from "./pages/blogs";

import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blogs' component={Blogs} />
      </Switch>
    </Router>
    
  );
}
{/* <>
      <Covid />     
    </> */}
export default App;
