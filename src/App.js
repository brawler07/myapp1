// import Com from "./Components/Comp1"
// import Comp2 from "./Components/Comp2"
// import Comp3 from "./Components/Comp3"

// function Func(){
//     return(
//         <>
//         <Com></Com>
//         <Comp2></Comp2>
//         <Comp3></Comp3>
//         </>
//     )
// }

// export default Func

// import Dash from "./Components/classComponent/Product"
import "./app.css"
import Demo from "./Components/classComponent/demo"
// import ToggleComponent from "./Components/classComponent/ToggleComponent" 

import Dash from "./Components/classComponent/Fakeamazon"
import PendOrComp from "./Components/classComponent/PendOrComp"
import LifeCycle from "./Components/Day-6/LifeCycle"
import FormsComponent from "./Components/Day-6/Forms"
import APIfetch from "./Components/Day-7/APIfetch"
import ImageApp from "./Components/classComponent/imageApp"
function App(props){

     return(
      
         
   
    
     

     
          <div className="card " >
  <img src={props.i.image} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.i.productName}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={props.i.buy} className="btn btn-primary">Buy</a>
  </div> 
</div>
         
      
     )
 }
 export default App
