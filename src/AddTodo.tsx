import React, { FC } from "react";
type AddTodoProps = {
  addTodo: (title: string) => void;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};
  const AddTodo: FC<AddTodoProps> = ({ addTodo, setShowForm })=> {
  const [input, setInput] = React.useState("");

  const handleSave = () => {
    if (input.trim().length > 0) {
      addTodo(input);
      setInput("");
      setShowForm(false);
    }
  };

  return (
    <div className="rounded-md p-6 border-2 shadow-md hover:shadow-blue-200 border-gray-200">
      <h1 className="text-lg font-medium text-blue-500">Create a list of task</h1>
      <input
        className="border border-gray-300 p-2 rounded-md w-80 focus:outline-none focus:ring-2 ring-blue-500 ring-offset-2 text-sm my-5"
        type="text"
        placeholder="Write a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-sm focus:ring-2 ring-blue-500 ring-offset-2"
        >
          Save
        </button>
        <button
          onClick={() => {
            setInput("");
            setShowForm(false);
          }}
          className="flex items-center gap-2 border-2 border-gray-300  font-bold py-2 px-4 rounded-md text-sm focus:ring-2 ring-blue-500 ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
