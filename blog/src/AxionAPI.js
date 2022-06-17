import axios from 'axios'
import React, { Component } from 'react'

export default class Axios extends Component {
    constructor(){
        super()
        this.state={
            "name": "morpheus",
            "job": "team leader"
            
        }
    }
    sendRequest(){
        const url = 'https://reqres.in/api/users'
        axios.post(url,this.state).then(function(response){
            console.log(response.data);
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.sendRequest()}>hit</button>
            </div>
        )
    }
}