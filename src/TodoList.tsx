import React, { FC } from "react";
import { TodoListType } from "./App";

type TodoListProps = {
  todos: TodoListType;
  changeChecked: (id: string, checked: boolean) => void;
  title: string;
  checked: boolean;
  removeTodo: (id: string) => void;
};
const TodosList: FC<TodoListProps> = ({
  todos,
  changeChecked,
  title,
  checked,
  removeTodo,
}) => {
  const filteredTodos = Object.keys(todos).filter(
    (id) => todos[id].checked === checked,
  );
  return (
    <div>
      <h2 className="text-lg font-medium mt-8 text-blue-500">{title}</h2>
      <div className="flex flex-col gap-2 py-4">
        {filteredTodos.length === 0 ? (
          <h2 className="text-gray-500">No task here!</h2>
        ) : (
          filteredTodos
            .sort((a, b) => todos[a].date > todos[b].date)
            .map((id) => (
              <div key={id} className="flex items-center gap-4">
                <input
                  className="rounded h-5 w-5 border border-gray-300 focus:ring-2 ring-blue-500 ring-offset-2 appearance-none"
                  type="checkbox"
                  checked={todos[id].checked}
                  onChange={(e) => changeChecked(id, e.target.checked)}
                />
                <p className="text-gray-700">{todos[id].title}</p>
                {todos[id].checked && (
                  <button
                    onClick={() => removeTodo(id)}
                    className=" font-bold text-xl border border-red-500 rounded-full px-2 bg-red-500 text-white focus:ring-2 ring-red-500 ring-offset-2"
                  >
                    X
                  </button>
                )}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default TodosList;
