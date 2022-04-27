import React from "react"
import Pending from "../functionalComponents/Pending"
import Completed from "../functionalComponents/Completed"

class PendOrcomp extends React.Component{
     constructor(props){
       super(props)
         this.state={
            data:[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Development",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "Gym",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "requirements",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 4,
                    "title": "written",
                    "completed": true
                  },
                  {
                    "userId": 1,
                    "id": 5,
                    "title": "Hibernated",
                    "completed": true
                  }
            ]

         }
     }
     Pending=()=>{
         const arr=this.state.data.filter(i=>i.completed===false)
         return arr
     }
     Completed=()=>{
        const arr=this.state.data.filter(i=>i.completed===true)
        return arr
    }

     render(){
         return(
             <>
             <Pending prop1={this.Pending()}></Pending>
             <Completed prop2={this.Completed()}></Completed>
             </>
         )
     }
}
export default PendOrcomp