import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import TodoList from "../TodoList";
import { TodosStore } from "../store";

const Todos = () => {
  const [inputName, setInputName] = useState<string | null>();
  const {
    data: { todos },
    addTodo,
  } = TodosStore();

  const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.currentTarget.value);
  };

  const handleKeyPressInputText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!inputName) return;

    addTodo(inputName);
    setInputName(null);
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={inputName || ""}
          onChange={handleChangeInputText}
          onKeyPress={handleKeyPressInputText}
        />
      </div>

      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
