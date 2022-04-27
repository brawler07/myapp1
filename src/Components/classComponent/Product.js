import React from "react"

class Product extends React.Component{
    constructor(props){
       super(props)
       this.state={
           count:0
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
            <>
        <img src={this.props.image} width="300px" height="300px"></img><br></br>
        <h3>{this.props.productName}</h3>
        <h3 ><a href={this.props.buy}>Buy</a></h3>
        <h3>Price:{this.props.price}</h3>
        <h4>Add to cart: <button onClick={this.minus}>-</button>{this.state.count}<button onClick={this.plus}>+</button></h4>
        </>
        )
    }
}
export default Product