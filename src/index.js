import React from "react"
import ReactDom from  "react-dom"
// import App from "./app"
// import {AppComponentOne,AppComponentTwo} from "./app";
// import {Test0,Test2,Test3} from "./Comp";
import Func from "./app"
import Fakeamazon from "./Components/classComponent/Fakeamazon"
// const root=ReactDom.createRoot(document.getElementById("root"))
// root.render(<h1>My first react app</h1>)
// root.render(<img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>)


ReactDom.render(
    <>
   {/* <Func></Func> */}
   <Fakeamazon></Fakeamazon>
   </>
, 
document.getElementById("root"))


