import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {About} from './pages/about'
import {Home} from './pages/home'
import {Nav} from './components/navbar'
import {Alert} from './components/alert'
import { AlertState } from './context/alert/AlertState'

function App() {
  return (
    <AlertState>
    <BrowserRouter>
    <Nav/>
    <div className='container pt-4'>
      {/* <Alert/> */}
      <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/about'} component={About}/>
      </Switch>
      </div>
    </BrowserRouter>
    </AlertState>
  );
}

export default App;
