import React,{ useState } from "react"





const UsestateEx3=()=>{
    
    const initialValue=["one","two","three"]
    const[list,setList]=useState(initialValue)
    const handleAddNum=()=>{
        const newNum="four"
        setList([...list,newNum])
    }
    return(
        <>
        <h1>hello</h1>
        <button onClick={handleAddNum}>Click to add more</button>
        <ol>
        {
            list.map(
            (value,index)=><React.Fragment key={index}>
            <li>{value}</li>

           
            </React.Fragment>
            )
        }
         </ol>
        </>
    )
}
export default UsestateEx3