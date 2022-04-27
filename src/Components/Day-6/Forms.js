import React from "react"
 class FormsComponent extends React.Component{
     constructor(props){
         super(props)
         this.state={
             username:"",
             password:""
         }
     }
     login=()=>{

     }
     render(){
         return(
             <form>
                 username:<input type="text" ></input>
                 <button onClick={this.login}>login</button>
             </form>
         )
     }
 }
 export default FormsComponent