import React from "react"
 class FoundComponent extends React.Component{
     constructor(props){
         super(props)

     }
     render(){
         return(
             <>
             <h1>Details</h1>
             {this.props.found.map(i=>(
                 <>
                 <h1>{i.name}</h1>
                 <h1>{i.email}</h1>
                 <h1>{i.phone}</h1>
                 </>
             ))}
             </>
         )
     }
 }
 export default FoundComponent