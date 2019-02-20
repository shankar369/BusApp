import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import { BrowserRouter , Route} from 'react-router-dom';
import * as firebase from 'firebase';


class App extends Component {

  constructor(){
    super();
    
    var config = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId
    };
    firebase.initializeApp(config);


    const  dbref = firebase.database().ref().child('Busses');
    dbref.on('value', snap => {
      console.log(snap.val());
    });

  }

state = {
  isLoggedin : 0
}


// state = {
//   "busses" : [ {Bus1 : {
//       "Bus1Stop1":0,
//       "Bus1Stop2":0,
//       "Bus1Stop3":0,
//       "Bus1Stop4":0,
//   }},
//   {Bus2 : {
//       "Bus2Stop1":0,
//       "Bus2Stop2":0,
//       "Bus2Stop3":0,
//       "Bus2Stop4":0,
//   }},
//   {Bus3 : {
//       "Bus3Stop1":0,
//       "Bus3Stop2":0,
//       "Bus3Stop3":0,
//       "Bus3Stop4":0,
//   }}
// ],
//   isLoggedin : 0
// }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App"> 
            <NavBar routes = {this.state}  login={this.state.isLoggedin}/>
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
