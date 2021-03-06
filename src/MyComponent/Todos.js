import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center m-3">Todos List</h3>
      <div className="d-flex flex-wrap ">
        {props.todos.length === 0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                ></TodoItem>
              );
            })}
      </div>
    </div>
  );
};
