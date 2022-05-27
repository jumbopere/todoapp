import {useState}from 'react'


const Form = ({addTodo}) => {
    const [value, setValue]= useState("")
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!value)return;
        addTodo(value)
        setValue("")
    }
  return (
    <form className='relative p-4 mx-0 mt-4 mb-0 border-solid border'>
<div className='mb-4 block'>
    <label htmlFor="todo"><b> Add Todo</b></label>
    <input type="text" id='todo' className='w-full block text-xl py-2 px-3 font-normal
   border-solid border  bg-clip-padding appearance-none rounded transition' value={value} onChange={(e)=> setValue(e.target.value)}/>
</div>
<button onClick={handleSubmit} className="inline-block mb-0 font-normal text-center whitespace-nowrap align-middle border border-solid border-transparent cursor-pointer px-3 py-2.5 text-sm rounded select-none border-blue-400 text-white-400 bg-blue-400">
            Submit
            </button>
        
    </form>
  )
}

export default Form