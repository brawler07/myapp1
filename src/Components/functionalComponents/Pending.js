import React from "react"
function Pending(props){
    
    return(
        <>
        <table>
            <tr>
                <th>
                <h1>Pending Tasks</h1>
                </th>
        
        </tr>
       
        </table>
        {props.prop1.map(item=> (
            <>
            <table>
                <tr>
         <td><h3>{item.title}</h3></td>
           

           <td><button>Completed ?</button></td>
           </tr>
           </table>
          
           </>
            ))}
           
            
             
        </>
    )
}
export default Pending