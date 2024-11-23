
import React from 'react';

import useTodoStore from "@/stores/todo_store";
import TodoItem from "../todoItem";
import { AnimatePresence } from 'framer-motion';


const TodoList = () => {
    const todos = useTodoStore (state => state.todos)
    return (
       <AnimatePresence> 
        <u1>
            {todos.map(todo => (
                <TodoItem  key = {todo.id} todo = {todo}/>
            ))}
        </u1>
       </AnimatePresence>
    )

}

export default TodoList 