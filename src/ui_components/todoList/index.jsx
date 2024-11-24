import React from "react";
import useTodoStore from "@/stores/todo_store";
import TodoItem from "../todoItem";
import { AnimatePresence } from "framer-motion";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos available. Add a new task!</p>
      ) : (
        <AnimatePresence>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </AnimatePresence>
      )}
    </div>
  );
};

export default TodoList;
