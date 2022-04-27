import React from "react"
import FoundComponent from "./FoundComponent"
class APIfetch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            username:"",
            found:[]
        }
    }
    // callAPI=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users").then
    //     ((res)=>{return res.json()}).then((data)=>this.setState
    //     ({arr:data})).catch((err)=>console.log(err))
    // }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then
        ((res)=>{return res.json()}).then((data)=>this.setState
        ({arr:data})).catch((err)=>console.log(err))
    }
    // handleUsername=(e)=>{
    //     this.setState({username:e.target.value})
    // }
    details=(e)=>{
        e.preventDefault();
        this.setState({username:e.target.value})
        const foundx=this.state.arr.filter((i)=>i.username===this.state.username)
        console.log(foundx)
        this.setState({found:foundx})
    }
    render(){
        return(
            <>
            <form>
            Username: <input type="text" ></input>
          <h1>User Details</h1>
          {/* {console.log(this.state.arr)} */}
          {console.log(this.state.found)}
          {/* <h1>{this.state.username}</h1> */}
          <button onClick={(e)=>this.details(e)}>Show Details</button>
          <FoundComponent found={this.state.found}></FoundComponent>
          </form>
            </>
        )
    }
}
export default APIfetch