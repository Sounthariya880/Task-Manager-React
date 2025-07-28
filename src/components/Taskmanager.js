import { useState } from "react";
import Taskform from "./Taskform";
import './Taskmanager.css';
import Tasklist from "./Tasklist";


function Taskmanager(){
     const [tasks,setTasks]=useState([])

     const addtask=(text)=>{
        const newtask={id:Date.now(),text,completed:false}
        setTasks([...tasks,newtask]);
     }
     const togglestatus=(id)=>{
        setTasks(tasks.map((task)=>{
            return task.id==id? {...task,completed: !task.completed}:task

        }))

     }
     const deletetask=(id)=>{
          const Filteredtask=tasks.filter((task)=>{
            return task['id']  !==id;

          })
          setTasks(Filteredtask);
     }
    


    return(
        <>
        <div className="box">
            <h1>Task Manager</h1>
        <Taskform addtask={addtask}/>
        <Tasklist tasks={tasks} togglestatus={togglestatus} deletetask={deletetask}/>
        <h2>Tasks:{tasks.length}</h2>
        </div>
        
        
        
        </>
    );
}
export default Taskmanager;