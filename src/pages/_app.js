import "@/styles/globals.css";
import AddTodoForm from "@/ui_components/addTodoForm";
import TodoList from "@/ui_components/todoList";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-600 border border-red-300 rounded">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="px-2 py-1 bg-blue-500 text-white rounded mt-2"
      >
        Try again
      </button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="container mx-auto max-w-md sm:max-w-lg lg:max-w-xl h-screen py-6 bg-gray-100">
        <main className="flex flex-col p-4 border rounded-lg shadow-lg h-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Todo List App</h1>
          <AddTodoForm />
          <TodoList />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
