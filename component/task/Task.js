import React from 'react'
import { useDispatch } from 'react-redux'
import { set_toggle } from '../../redux/reducers/todoes';

const Task = ({todo}) => {
const dispatch=useDispatch();


const changeHandler=()=>{
    
}


  return (
    <div className='flex gap-5'>
      
<div className={`${todo.completed?'line-through text-red-500':''}`}>{todo.task}</div>
<div>
    <input type="checkbox" name="" id="" onChange={()=>dispatch(set_toggle({id:todo.id,completed:!todo.completed}))} checked={todo.completed} />
</div>


    </div>
  )
}

export default Task
