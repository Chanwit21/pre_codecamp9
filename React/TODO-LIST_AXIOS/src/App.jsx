import React, { useState } from 'react'
import './App.css'
import {Redirect, Route, Switch} from 'react-router-dom'
import index from './Page'
import Loogin from './Page/Loogin'
import Register from './Page/Register'
import Profile from './Page/Profile'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={index}/>
        <Route exact path='/login' component={Loogin}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/prifile' component={Profile}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App
