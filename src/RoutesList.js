import React, {Component} from 'react';
import Button from './Button';

class RouterList extends Component{

    constructor(){
        super();
        console.log(Object.keys(this.state));
        this.routesList = Object.keys(this.state).map( route =>{
            console.log(route);
            return(
                <div class = "list-item-route ">
                    
                    <li class="list-group-item d-flex justify-content-between align-items-center route-list-item m-1" key = {Math.random}>
                    <i class="fa-2x fas fa-bus-alt"></i>
                        <b>{route}</b>
                        <span class="badge badge-primary badge-pill pl-3 pr-3 pt-2 pb-2">
                           View Full Map
                        </span>
                    </li>
               
                </div>
            )
        })
        console.log(this.routesList);
    }

    state = {
        Bus1 : {
            "Bus1Stop1":0,
            "Bus1Stop2":0,
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
            "Bus3Stop1":0,
            "Bus3Stop2":0,
            "Bus3Stop3":0,
            "Bus3Stop4":0,
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





    render(){
        return(
            <div className = "container-fluid">
              <div className = "routes-list">

                <h1>Routes List</h1>
                    <ul class="list-group">

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