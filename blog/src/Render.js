import React from "react";
class Render extends React.Component{
    constructor()
    {
        super();
        this.state{
            email:"raj@gmail.com"
        }
    }
    render()
    {
        console.warn("Render method", this.state.email)
        return(
            <div>
                <h1> User</h1>
                <button onClick={()=>this.setState({email:"sidhu@gmail.com"}
                </div>

            )
    }
}

exports default Render;