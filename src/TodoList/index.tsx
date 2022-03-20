import React from "react";
import { Todo as TodoType } from "../types";
import Todo from "../Todo";

interface Props {
  todos: TodoType[];
}

const TodoList = ({ todos }: Props) => {
  console.log("TodoList");

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
