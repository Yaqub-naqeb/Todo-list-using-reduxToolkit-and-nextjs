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
    <div className='flex flex-col gap-14 items-center py-10'>
      <h1 className=' '>Todo List</h1>

<form  onSubmit={changeHandler}>

<div className='flex gap-5'>
<input placeholder='Add your Task'  type="text" value={task} onChange={e=>setTask(e.target.value)} />
<button>Add</button>
</div>



</form>

<div className=' flex flex-col gap-16 items-center '>
  
{
  Current&&Current.map(todo=> <Task id={todo.id} todo={todo}/>)
}
</div>

    </div>
  )
}

export default Main
