import React, { memo } from "react";
import { Todo as TodoType } from "../types";
import Todo from "../Todo";

interface Props {
  todos: TodoType[];
  delTodo: (id: number) => void;
}

const TodoList = ({ todos, delTodo }: Props) => {
  console.log("TodoList");

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} delTodo={delTodo} />
      ))}
    </div>
  );
};

export default memo(TodoList);
