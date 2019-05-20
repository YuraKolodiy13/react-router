import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch} from  'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'this-active'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color: 'yellow'}}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Switch>
        <Route path="/" exact render={() => <h1>home page</h1>} />

        <Route path="/about" component={About} />
        <Route path="/cars/:name" component={CarDetail} />
        <Route path="/cars" component={Cars} />
        </Switch>

      </div>
    );
  }
}

export default App
