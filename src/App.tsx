import React from "react";
import Header from "./Header";
import TodosList from "./TodoList";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
export type TodoType = {
  title: string;
  checked: boolean;
  id: string;
  date: Date;
};

export type TodoListType = {
  [key: string]: TodoType;
};
function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || {},
  );
  const [showForm, setShowForm] = React.useState(false);


  const addTodo = (title) => {
    const id = uuidv4();
    const newTodos = {
      ...todos,
      [id]: { title, checked: false, id, date: new Date() },
    };
    saveTodos(newTodos);
  };

  const changeChecked = (id, checked) => {
    const newTodos = {
      ...todos,
      [id]: { ...todos[id], checked },
    };
    saveTodos(newTodos);
  };

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const { [id]: _, ...newTodos } = todos;
    saveTodos(newTodos);
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-screen-xl mx-auto p-8 py-10 border-2 hover:shadow-blue-200 shadow-md mt-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <h1 className="text-3xl font-bold text-blue-700">Daily Task</h1>
        </div>
        <TodosList
          todos={todos}
          title={"List of Tasks :"}
          checked={false}
          changeChecked={changeChecked}
          removeTodo={removeTodo}
        />
        {showForm ? (
          <AddTodo addTodo={addTodo} setShowForm={setShowForm} />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:ring-2 ring-blue-500 ring-offset-2"
          >

            <h1>Add a task</h1>
          </button>
        )}
        <TodosList
          todos={todos}
          title={"Task Completed"}
          checked={true}
          changeChecked={changeChecked}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
