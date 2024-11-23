import React, { useState } from 'react';

import useTodoStore from "@/stores/todo_store";

const AddTodoForm = () => {
    const[text, setText] = useState('')
    const addTodo = useTodoStore(state => state.addTodo)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text)
        setText('')
    }

return (
    <form onSubmit = {handleSubmit} className = "flex justify-between p-2">
        <input className="flex-1 p-2 border rounded" type = "text" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Add new Todo"/>
        <button type = "submit" className = "transition duration-200 ease-in-out transform hove: bg-blue-600 px-6 bg-blue-500 text-white m1-2 rounded">
            Add
        </button>

    </form>
)

}

export default AddTodoForm