import React from "react";
import { Todo as TodoType } from "../types";

interface Props {
  todo: TodoType;
  delTodo: (id: number) => void;
}

const Todo = ({ todo: { id, name }, delTodo }: Props) => {
  const handleClickDeleteTodo = () => {
    if (!window.confirm("Do you want to delete it?")) return;

    delTodo(id);
  };

  return (
    <div className="flex mb-4 items-center">
      <p className="w-full">{name}</p>

      <button
        className="p-2 rounded border-2 border-red-400 text-red-400 hover:text-white hover:bg-red-400"
        onClick={handleClickDeleteTodo}
      >
        Del
      </button>
    </div>
  );
};

export default Todo;
