import React from "react";
import { Todolist } from "./Todolist";
import Header from "./Header";

let sno, task, desc;

export const Todos = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">Todo List</h1>

      <div className="input-group mb-3">
        <div className="input-group-text"></div>
        <input
          type="text"
          className="form-control"
          id="task"
          aria-label="Text input with checkbox"
        />
      </div>

      <div className="input-group">
        <div className="input-group-text"></div>
        <input
          type="text"
          className="form-control"
          id="desc"
          aria-label="Text input with radio button"
        />
      </div>

      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => {
         let task = document.getElementById("task").value;
        let  desc = document.getElementById("desc").value;
          

          props.additem(task, desc);
          document.getElementById("task").value=""
          document.getElementById("desc").value=""

        }}
      >
        Add Note
      </button>

      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todolist
                key={todo.sno}
                todo1={todo.sno}
                todo2={todo.task}
                todo3={todo.desc}
                deleteitem={props.deleteitem}
              />
            );
          })}
    </div>
  );
};
