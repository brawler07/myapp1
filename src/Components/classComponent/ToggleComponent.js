import React from "react"
// import "./ToggleComponent.css"
class ToggleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false,
            username:"Rahul",
            position:"CEO",
            LogginTime:"21/04/2022"

        }
    }
    login=()=>{
        this.setState({isLoggedIn:true})
    }
    logout=()=>{
        this.setState({isLoggedIn:false})
    }
    render(){
        const h1style={backgroundColor:"red"}
        return(
            <>
            {this.state.isLoggedIn?<div className="logindiv">
                <h1 style={h1style}>Username:{this.state.username}</h1>
                <h1>position:{this.state.position}</h1>
                <h1>LogginTime:{this.state.LogginTime}</h1>
                <button onClick={this.logout}>Log out</button>
            </div>:<button onClick={this.login}>login</button>}
            </>
        )
    }
}
export default ToggleComponent