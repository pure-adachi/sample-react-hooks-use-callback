import { useReducer } from "react";
import { Todo } from "../types";

export const TodosStore = () => {
  interface State {
    data: { todos: Todo[] };
  }

  const initialState: State = {
    data: {
      todos: [
        {
          id: 1,
          name: "Todo 1",
        },
        {
          id: 2,
          name: "Todo 2",
        },
        {
          id: 3,
          name: "Todo 3",
        },
      ],
    },
  };

  interface AddAction {
    type: "add";
    data: { name: string };
  }

  interface DelAction {
    type: "del";
    data: { id: number };
  }

  type Action = AddAction | DelAction;

  const addAction = (state: State, action: AddAction) => {
    return {
      ...state,
      data: {
        todos: [
          ...state.data.todos,
          {
            id: new Date().getTime(),
            name: action.data.name,
          },
        ],
      },
    };
  };

  const delAction = (state: State, action: DelAction) => {
    const todos = state.data.todos.filter(({ id }) => id !== action.data.id);

    return {
      ...state,
      data: {
        todos,
      },
    };
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "add":
        return addAction(state, action);
      case "del":
        return delAction(state, action);
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (name: string) => dispatch({ type: "add", data: { name } });
  const delTodo = (id: number) => dispatch({ type: "del", data: { id } });

  return {
    ...state,
    addTodo,
    delTodo,
  };
};
