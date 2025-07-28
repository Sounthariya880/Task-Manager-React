import { useState } from "react";

 function Taskform({addtask}){
    const [value,setValue]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(value.trim()){
            console.log("Form Submitted",value)
            addtask(value);
            setValue("");
        }

    }

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>{setValue(e.target.value)}}
          className="input1" placeholder="Add a Task..." value={value} />
        
          <button type="submit" className="btn1">Add</button>
        </form>
        
        </>
    );
 }
 export default Taskform;