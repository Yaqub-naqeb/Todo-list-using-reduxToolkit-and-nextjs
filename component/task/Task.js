import React from 'react'
import { useDispatch } from 'react-redux'
import { set_toggle,delete_todoes } from '../../redux/reducers/todoes';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ style: ['normal'],
subsets: ['latin'],
weight: '400' })

const Task = ({todo}) => {
const dispatch=useDispatch();


const clickHandler=()=>{
    dispatch(delete_todoes({id:todo.id,completed:todo.completed}))
}


  return (
   <>
   {todo.task&&<div className='flex gap-10 '>
      

      {/* the task */}
      
      <div className={`${todo.completed?' text-green-300 ':''} ${poppins.className} text-xl relative`}>{todo.task}
      
      {todo.completed&&<div className='absolute w-full h-0 border-b-2 line border-green-500 '/>}
      </div>
      <div>
      
          {/* the check box */}
          <input type="checkbox" name="" id="" onChange={()=>dispatch(set_toggle({id:todo.id,completed:!todo.completed}))} checked={todo.completed} />
      </div>
      {/* delete */}
      <div>
        <button className={`p-1 rounded-md  text-white text-lg ${poppins.className} bg-Red`} onClick={clickHandler}>Delete</button>
      </div>
      
      {/* */}
          </div>}</>
  )
}

export default Task

