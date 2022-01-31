import React from 'react';
import { Switch,Route } from 'react-router';
import Home from './pages/Home';
import Error from './pages/Error';
import Starred from './pages/Starred';
import Navbar from './Navbar';
import Title from './Title';
import Show from './Show';

function App() {
  return (
    <div>
    <Title/>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/starred" component={Starred}></Route>
      <Route exact path="/show/:id" component={Show}></Route>
      <Route component={Error}></Route>
    </Switch>
    </div>
    
  )
}

export default App;
