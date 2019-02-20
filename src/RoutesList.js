import React, {Component} from 'react';
import Button from './Button';
import RouteStopsList from './RouteStopsList';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';




class RouterList extends Component{

    constructor(){
        super();
        console.log(Object.keys(this.state));
        this.routesList = Object.keys(this.state).map( route =>{
            console.log(route);
            return(
                <div className = "list-item-route ">


                        <p>

                        <li className="list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Math.random}>
                    <i className="fa-2x fas fa-bus-alt"></i>
                        <b>{route}</b>
                       
                       
                        
                            <span onClick = {()=>this.showStopsList(route)} className="badge badge-primary badge-pill pl-3 pr-3 pt-2 pb-2"  data-toggle="collapse" data-target={"#"+route} aria-expanded="false" aria-controls="collapseExample">
                            
                            View Full Map
                            
                            </span>
                        
                    </li>

                        </p>
                        <div class="collapse" id={route}>
                        <div class="card card-body">
                        <div id = {"stops-list"+route}>

                        </div>
                        </div>
                        </div>

                    
                    
               
                </div>
            )
        })
        
        console.log(this.routesList);
    }



    state = {
        Bus1 : {
            "Bus1Stop1":1,
            "Bus1Stop2":1,
            "Bus1Stop3":0,
            "Bus1Stop4":0,
        },
        Bus2 : {
            "Bus2Stop1":0,
            "Bus2Stop2":0,
            "Bus2Stop3":0,
            "Bus2Stop4":0,
        },
        Bus3 : {
            "Bus3Stop1":1,
            "Bus3Stop2":0,
            "Bus3Stop3":0,
            "Bus3Stop4":1,
        },
        Bus4 : {
            "Bus1Stop1":0,
            "Bus1Stop2":0,
            "Bus1Stop3":0,
            "Bus1Stop4":0,
        },
        Bus5 : {
            "Bus2Stop1":0,
            "Bus2Stop2":0,
            "Bus2Stop3":0,
            "Bus2Stop4":0,
        },
        Bus6 : {
            "Bus3Stop1":0,
            "Bus3Stop2":0,
            "Bus3Stop3":0,
            "Bus3Stop4":0,
        },
        Bus7 : {
            "Bus1Stop1":0,
            "Bus1Stop2":0,
            "Bus1Stop3":0,
            "Bus1Stop4":0,
        },
        Bus8 : {
            "Bus2Stop1":0,
            "Bus2Stop2":0,
            "Bus2Stop3":0,
            "Bus2Stop4":0,
        },
        Bus9 : {
            "Bus3Stop1":0,
            "Bus3Stop2":0,
            "Bus3Stop3":0,
            "Bus3Stop4":0,
        }
    }


    showStopsList = (route) =>{

        var stopsList = Object.keys(this.state[route]).map( stop =>{

            console.log(stop);
            return(
                <div className = "list-item-route" >


                        <li className="list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Math.random} id = {route+stop}>                      
                        <b>{stop}</b>
                        
                       
                        <div class="form-check">
                            <input onChange = {()=> this.makeCheked(route,stop)} class="form-check-input" type="checkbox" value="" id= {route+stop+"defaultCheck1"} />
                            <label class="form-check-label" for= {route+stop+"defaultCheck1"} >
                                Reached
                            </label>

                        </div>
                        </li>
               
                </div>
            )
        });


        

        console.log(this.state[route]);
        ReactDOM.render(stopsList, document.getElementById('stops-list'+route));
        
        Object.keys(this.state[route]).map( stop =>{
            
               if(this.state[route][stop] === 1){
   
                   document.getElementById(route+stop+"defaultCheck1").checked = true;
                   document.getElementById(route+stop).style.backgroundColor = "green";
                   
               }
                          
           })
    }


    makeCheked(route,stop){
        console.log(route,stop);
        this.setState({
            route :{
                stop : 1
            }
        })
        console.log(this.state);
    }


    render(){
        return(
            <div className = "container-fluid">
              <div className = "routes-list">

                <h1>Routes List</h1>
                    <ul className="list-group">

                        {
                            this.routesList
                        }
                    </ul>
                </div>
                </div>
        )
    }
}

export default RouterList;