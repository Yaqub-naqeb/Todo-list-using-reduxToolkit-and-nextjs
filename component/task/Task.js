import React from 'react'

const Task = ({todo}) => {
  return (
    <div className='flex gap-5'>
      
<div>{todo.task}</div>
<div>
    <input type="checkbox" name="" id="" />
</div>


    </div>
  )
}

export default Task
