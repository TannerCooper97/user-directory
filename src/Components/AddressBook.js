import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import Navigation from './Navigation'
import data from '../data'

class AddressBook extends Component {
    constructor(){
        super();

        this.state = {
            data: data,
            index: 0
        }

        this.forward = this.forward.bind(this);
        this.backward = this.backward.bind(this);
    }

    forward(){
        if(this.state.index < this.state.data.length - 1){
            this.setState({ index: this.state.index + 1})
        }
    }
    
    backward(){
        if(this.state.index > 0){
            this.setState({ index: this.state.index - 1})
        }
    }

    render(){
        return(


            <div className="container">

                

                <div id = "employee-card">
                <EmployeeCard data={this.state.data} index={this.state.index}/>
                </div>

                <div id = "navbar">
                <Navigation forward={this.forward} backward={this.backward}/>
                </div>


            </div>

            )
    }
}

export default AddressBook;

