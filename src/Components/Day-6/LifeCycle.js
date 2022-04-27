import React from "react"

class LifeCycle extends React.Component{
    
   constructor(props){
    console.log("constructor")
       super(props)
       this.state={
           username:this.props.username,
           email:"rahul@gmail.com"
       }
   }
  
//    static getDerivedStateFromProps(props,state){
//     console.log("gdsfm")
//        return {username:props.username}
//    }
   update=()=>{
      this.setState({username:"Rahul"})
   }

   render(){
       return(
           <>
           <h1>Username:{this.state.username}</h1>
           <h1>email:{this.state.email}</h1>
           <button onClick={this.update}>Update</button>
           </>
       )
   }
}
export default LifeCycle