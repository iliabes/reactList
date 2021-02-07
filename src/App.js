import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {About} from './pages/about'
import {Home} from './pages/home'
import {Nav} from './components/navbar'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <div className='container pt-4'>
      <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/about'} component={About}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
