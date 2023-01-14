import React, { useState } from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { set_todoes } from '../../redux/reducers/todoes'
import Task from '../task/Task'


const Main = () => {

  
    // const {name}=useSelector(state=>state.profile)
    const Current=useSelector(state=>state.todoes)
    console.log(Current);
    const dsipatch=useDispatch();

const [task,setTask]=useState('');

const changeHandler=(e)=>{
e.preventDefault();

dsipatch(set_todoes({task}));
  setTask('');
}



  return (
    <div className='flex flex-col gap-14 items-center pb-10 '>

      <h1 className=' w-full text-center bg-white py-5 text-Main font-bold text-lg '>Todo List</h1>

{/* <form  onSubmit={changeHandler}>

<div className='flex gap-5'>
<input placeholder='Add your Task'  type="text" value={task} onChange={e=>setTask(e.target.value)} />
<button>Add</button>
</div>



</form> */}

 {/* add task */}
<div  className='cursor-pointer' >

<div className='flex items-center align-middle justify-center gap-5 bg-[#af7eeb]  bg-Main text-white font-medium p-2 rounded-full'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg></div> <h1 className=''>New Task</h1>
</div>




</div>

<div className=' flex flex-col gap-16 items-center bg-white p-12 '>
  
{
  Current&&Current.map(todo=> <Task id={todo.id} todo={todo}/>)
}
</div>

    </div>
  )
}

export default Main
