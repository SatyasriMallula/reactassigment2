import React from "react";
import { Component } from "react";

import Card from "../assignment21/card";
class Home extends Component{
    
    constructor(){
        super()
        this.state={data:[]}
    }

     async componentDidMount(){
       const response=await fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war") 
       const json=await response.json() 
      this.setState({data:[json]})
      
     }
    render(){
  
        return(
            <div>
                <div>
                {
                
                this.state.data.map(value1=><Card value1={value1} />)
            }
            </div>
            </div>
        )  
        
    }
}
export default Home