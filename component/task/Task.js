import React from 'react'
import { useDispatch } from 'react-redux'
import { set_toggle,delete_todoes } from '../../redux/reducers/todoes';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ style: ['normal'],
subsets: ['latin'],
weight: '300' })

const Task = ({todo}) => {
const dispatch=useDispatch();


const clickHandler=()=>{
    dispatch(delete_todoes({id:todo.id,completed:todo.completed}))
}


  return (
   <>
   {todo.task&&<div className='flex gap-10 '>
      

      {/* the task */}
      
      <div className={`${todo.completed?'line-through text-red-500':''}`}>{todo.task}</div>
      <div>
      
          {/* the check box */}
          <input type="checkbox" name="" id="" onChange={()=>dispatch(set_toggle({id:todo.id,completed:!todo.completed}))} checked={todo.completed} />
      </div>
      {/* delete */}
      <div>
        <button className='p-1 bg-red-400' onClick={clickHandler}>delete</button>
      </div>
      
      {/* */}
          </div>}</>
  )
}

export default Task

