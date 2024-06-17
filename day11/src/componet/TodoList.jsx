import React from 'react'

const TodoList = ({data,dlt,cmp}) => {
  return (
    <div>
        <h2>{data.task} -- {data.cmp ?  "Complited":"Not Complited"}</h2>
        <button className='but1' type="button" onClick={()=>dlt(data.id)}>Delete</button>
        <button className='but1' type="button" onClick={()=>cmp(data.id)}>Update</button>
    </div>
  )
}

export default TodoList