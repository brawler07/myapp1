import React from "react"
import "./ToggleComponent.css"
import App from "../../app"
const product=[
    {
        image:"https://m.media-amazon.com/images/I/41pBUFDTvWL.jpg",
        productName:"Ambrane FitShot",
        buy:"https://www.amazon.in/Noise-ColorFit-Smartwatch-Monitoring-Waterproof/dp/B097R25DP7?ref_=Oct_DLandingS_D_aea54999_60&smid=A14CZOWI0VEHLG",
        price:"Rs. 15",
        cart:"1" 

    },
    {
     image:"https://m.media-amazon.com/images/I/41mOGsI9-4L.jpg",
     productName:"Noise Colorfit",
      buy:"https://www.amazon.in/Noise-ColorFit-Ultra-SE-Smartwatch/dp/B09BNX79CD?ref_=Oct_DLandingS_D_aea54999_64&smid=A14CZOWI0VEHLG"
     ,price:"Rs. 16", cart:"10"
    },
    {
     image:"https://m.media-amazon.com/images/I/41pBUFDTvWL.jpg",
     productName:"Ambrane FitShot",
     buy:"https://www.amazon.in/Noise-ColorFit-Smartwatch-Monitoring-Waterproof/dp/B097R25DP7?ref_=Oct_DLandingS_D_aea54999_60&smid=A14CZOWI0VEHLG",
     price:"Rs. 15",
     cart:"1" 
    }
 ]
class Fakeamazon extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            
        }
    }
    
    plus=()=>{
        this.setState({count:this.state.count+1})
    }
    minus=()=>{
        if(this.state.count>0){
        this.setState({count:this.state.count-1})
        }
    }
    render(){
        return(
       
          <div className="container">
       <div className="row ">
          <div className="col-3 ">
         { 
         product.map(item=>(
             
         <App i={item} ></App>
         

         ))
         }
         </div>
         </div>
         </div>
        )
    }
        
        
   
  
    

}
export default Fakeamazon