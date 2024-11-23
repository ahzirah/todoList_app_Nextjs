import "@/styles/globals.css";
import AddTodoForm from "@/ui_components/addTodoForm";
import TodoList from "@/ui_components/todoList";

function App() {
  return (
    <div className = "container mx-auto max-w-md h-screen py-6">
      <div className = " flex flex-col p-4 border rounded-1g shadow-1g h-full">
        <h1 className = "text-2xl font-bold mb-4">
          Todo List App
        </h1>
        <AddTodoForm />
        <TodoList />
      </div>

    </div>
  );
}

export default App
