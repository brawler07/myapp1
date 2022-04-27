import React from "react"
 class Demo extends React.Component{
     constructor(props){
         super(props)
         this.state=
         {
         
             count:10
         
         }
         
    
     }
     updateMarks=()=>{
         const temp=34;
   this.setState({count:temp});
   console.log(this.state.count)
     }

     render(){
         console.log("in render",this.state.count)
         return(
             <div>
                 <h1>Class Compo</h1>
                 <h1>Count:{this.state.count}</h1>
                <button onClick={this.updateMarks}>UpdateMarks</button>
             </div>
         )
     }
 }
 export default Demo