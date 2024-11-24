import React from 'react';
import useTodoStore from "@/stores/todo_store";
import { motion } from 'framer-motion';

const TodoItem = ({ todo }) => {
  const { removeTodo, toggleTodo } = useTodoStore();

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center p-2"
      layout
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5"
        aria-checked={todo.completed}
      />
     <span
    className={`flex-1 ml-2 ${todo.completed ? 'line-through' : ''}`}
    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
>
    {todo.text}
</span>
<button
  onClick={() => removeTodo(todo.id)}
  className="bg-red-custom hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
>
  Delete
</button>



    </motion.li>
  );
};

export default TodoItem;
