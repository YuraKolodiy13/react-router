import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from  'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

  state = {
    isLoggedIn : false
  }

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

        <div style={{textAlign: 'center'}}>
          <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>login</button>
          <p>{this.state.isLoggedIn ? 'true' : 'false'}</p>
        </div>

        <hr/>

        <Switch>
          <Route path="/" exact render={() => <h1>home page</h1>} />
          {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null}
          {/*<Route path="/about" component={About} />*/}
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Redirect to={'/'}/>
          {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>d*/}
        </Switch>

      </div>
    );
  }
}

export default App
