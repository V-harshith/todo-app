import React from 'react'
import TodoCard from './TodoCard'

function TodoList() {

    let toDos =[
        'go to gym',
        'go to school',
        'go to home',
    ]
  return (
    <ul className='main'>
        {toDos.map((todo,todoIndex)=>{
            return(
                <TodoCard key={todoIndex}/>
            )}
        )}
    </ul>
  )
}

export default TodoList