import React, { useState } from 'react';
import useTodoStore from "@/stores/todo_store";

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center sm:flex-row sm:gap-4"
    >
      <input
        className="flex-1 p-2 border rounded w-full sm:w-auto text-black placeholder-gray-400"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new Todo"
      />
      <button
        type="submit"
        className="transition duration-200 ease-in-out transform hover:bg-blue-600 px-6 py-2 bg-blue-500 text-white rounded focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
