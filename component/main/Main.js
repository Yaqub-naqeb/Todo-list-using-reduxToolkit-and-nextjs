import React from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { set_todoes } from '../../redux/reducers/todoes'


const Main = () => {
    // const {name}=useSelector(state=>state.profile)
    const Current=useSelector(state=>state.todoes)
    const dsipatch=useDispatch();
  return (
    <div className='flex flex-col items-center py-10'>
      <h1 className=' '>Todo List</h1>
<br />
<input placeholder='Change the name here' type="text" onChange={(e)=>dsipatch(set_todoes(e.target.value))} />

{
  Current.map(todo=>(
<div id={todo.id}>{todo.task}</div>
  ))
}

    </div>
  )
}

export default Main
