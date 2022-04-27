function DashBoard(props){
    return(
        <>
        <img src={props.image} width="300px" height="300px"></img><br></br>
        <h3>{props.productName}</h3>
        <h3 ><a href={props.buy}>Buy</a></h3>
        <h3>Price:{props.price}</h3>
        <h4>Add to cart: <button>-</button>{props.cart}<button>+</button></h4>
        </>
    )
}
export default DashBoard