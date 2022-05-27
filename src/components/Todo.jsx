import React from 'react'

const Todo = ({todo, index, markTodo, removeTodo}) => {
  return (
    <div
className='items-center flex justify-between text-xl '
    >
        <span style={{textDecoration: todo.isDone ? "line-through": ""}}>{todo.text}</span>
        <div>
            <button onClick={()=> markTodo(index)} className="inline-block mb-0 font-normal text-center whitespace-nowrap align-middle border border-solid cursor-pointer px-3 py-2.5 text-sm rounded select-none border-green-400 text-green-400">
            ✓ 
            </button>{' '}
            <button onClick={()=> removeTodo(index)} className="inline-block mb-0 font-normal text-center whitespace-nowrap align-middle border border-solid border-transparent cursor-pointer px-3 py-2.5 text-sm rounded select-none border-red-400 text-red-400">
            ✕
            </button>{' '}
        </div>
    </div>
  )
}

export default Todo