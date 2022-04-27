import React from "react"
import axios from "axios"
class ImageApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            search:"",
            
        }
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    // handleSubmit=(e)=>{
    //     e.preventDefault()
    //     axios.get("https://api.unsplash.com/search/photos?client_id=76Fvw0zS19zBNAWBAko0Va3cW8svMBfzxS5eS5HHADk&query="+this.state.search).then
    //     ((res)=>this.setState({images:res.data.results})).catch((err)=>console.log(err))
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.get("http://localhost:3002/userdetails?fname="+
        this.state.search).then
        ((res)=>this.setState({images:res.data})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
            <form>
                <input type="text" onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.handleSubmit(e)}>search Name</button>
            </form>
            
                {/* // this.state.news.map((item)=>(
                //     <div>
                  
                //     </div>
                // )) */}
                {/* {console.log(this.state.images)}, */}
                {
                this.state.images.map(item=>(
                    <>
                    {/* <img src={item.links.download} width="300px" height="300px"></img> */}
                   <h1>{item.fname}</h1> 
                   <h1>{item.mobile}</h1>
                   
                    </>
                ))


                // this.state.images.map(item=>(
                //     <>{item}</>
                // ))
            }
            </div>
        )
    }
}
export default ImageApp