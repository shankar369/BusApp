import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import { BrowserRouter , Route} from 'react-router-dom';
import Button from './Button';



class App extends Component {

state = {
  isLoggedin : 0
}

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App"> 
            <NavBar login={this.state.isLoggedin}/>
                <Route path='/routes' component={RoutesList} />    
                <Route path='/signup' component={SignUp} />
                <Route exact path = '/' component = {Login}/>  
          </div>
        
        </BrowserRouter>
       
      </div>
    )
  }
}

export default App;
