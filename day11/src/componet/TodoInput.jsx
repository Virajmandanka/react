import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoInput = () => {
    let [task,setTask] = useState("");
    let [arr,setArr] = useState([])
    const save = () => {
        let obj={
            id : Date.now(),
            task :  task,
            cmp : false
        }
        setArr([...arr,obj])
        
        
    }
    const dlt = (id)=>{
       
         let d=arr.filter((el)=>{
            return id !== el.id
         })
         setArr(d)
    }
    const cmp=(id)=>{

        var d=arr.map((el)=>{

            if(id===el.id)
                {
                    return {...el , cmp:!el.cmp}
                }
                else{
                    
                    return el
                }
        })
        setArr(d)
        
    }
  return (
    <div>
        <input type="text" placeholder='  Enter you name list'   value={task} onChange={(e)=>setTask(e.target.value)} />
        < button  className='but' type="button" onClick={save}>Submit</button>
{
    arr.map((el)=>{

        return  <TodoList data={el} dlt={dlt} cmp={cmp}/>
    })
}
       
    </div>
)
}

export default TodoInput