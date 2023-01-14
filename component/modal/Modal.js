import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { set_todoes } from '../../redux/reducers/todoes';

const Modal = () => {
    const Current=useSelector(state=>state.todoes)

    const modal=useSelector(state=>state.modal)


        const dsipatch=useDispatch();


    const [task,setTask]=useState('');
    const changeHandler=(e)=>{
        e.preventDefault();
        
        dsipatch(set_todoes({task}));
          setTask('');
        }
  return (
    <div className='blur-md md flex items-center  align-middle h-52 bg-red-300 '>
      
      <form  onSubmit={changeHandler} className={'self-center'}>

<div className='flex gap-5 self-center '>
<input placeholder='Add your Task'  type="text" value={task} onChange={e=>setTask(e.target.value)} />
<button>Add</button>
</div>



</form>



    </div>
  )
}

export default Modal
