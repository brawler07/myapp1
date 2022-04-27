function Completed(props){
    return(
        <>
        <h1>Completed Tasks</h1>
         {props.prop2.map(i=>(
             <h3>{i.title}</h3>
             
         ))}
        </>
    )
}
export default Completed