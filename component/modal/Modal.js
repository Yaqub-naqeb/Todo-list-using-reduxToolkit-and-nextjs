import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { set_todoes } from '../../redux/reducers/todoes';
import { set_md } from '../../redux/reducers/modal';
import { Poppins } from '@next/font/google'

const poppins= Poppins({ subsets: ['bold'],weight: '800' })

const Modal = () => {
    const Current=useSelector(state=>state.todoes)

    const modal=useSelector(state=>state.modal)


        const dsipatch=useDispatch();


    const [task,setTask]=useState('');
    const changeHandler=(e)=>{
        e.preventDefault();
        
        dsipatch(set_todoes({task}));
dsipatch(set_md(false))
          setTask('');
        }
  return (
    <div className='bg-white rounded-md text-center flex flex-col items-center  h-1/3 w-2/6 text-black relative'>
      
 
{/* close */}
<div className="absolute cursor-pointer   right-4 top-3" onClick={()=>dsipatch(set_md(false))}>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</div>



{/* <div className='bg-Main w-full h-10'>

</div> */}
<div className='plus '><svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-18 h-16 text-white"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>


      <h1 className={poppins.className}>New Task</h1>
      <form  onSubmit={changeHandler} className={'self-center'}>

<div className='flex gap-5 mt-12  '>
<input className='border-b-2 outline-none' placeholder='Add your Task'  type="text" value={task} onChange={e=>setTask(e.target.value)}/>
<button>Add</button>
</div>



</form>

    </div>
  )
}

export default Modal
