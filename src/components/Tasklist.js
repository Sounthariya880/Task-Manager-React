function Tasklist({tasks,togglestatus,deletetask}){

    return(
      <ul className="container1">
         {tasks.map((task,index)=><li 

         key={index} >
            
            <span onClick={()=>togglestatus(task['id'])} className={task ['completed']==true && "completed"} >{task['text']}</span> 
            <span onClick={()=>deletetask(task['id'])} className="delete">X</span>
            </li>)} 
          
       
      </ul>
      
         
       
    );
}
export default Tasklist;