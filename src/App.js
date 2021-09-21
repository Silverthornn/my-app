import React from "react"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Electronics from "./Electronics"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



function App(){
  return(
    <Router>
      <div>
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/electronics" component={Electronics}></Route>
        </Switch>
      
      </div>
    </Router>
  )
}

export default App;