import React, { Fragment, useState, useRef } from "react";
// import List from "./List";

export default function TodoList(props) {
  const todoValue = useRef();

  const [todos, setTodos] = useState([
    { id: 1, item: "Fix bugs" },
    { id: 2, item: "Take out the trash" },
    { id: 3, item: "Take out the trash" }
  ]);

  const addTodo = data => {
    let id = todos.length + 1;
    setTodos([...todos, { id, item: data }]);
  };

  const handleNewTodo = e => {
    e.preventDefault();

    const item = todoValue.current;
    addTodo(item.value);
    item.value = "";
  };

  return (
    <Fragment>
      <h1 className="title">Hari Irawan</h1>
      <div>
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <div>
                  <span>{todo.item}</span>
                  <button
                    className="btn btn-danger"
                    data-testid="delete-button"
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              autoFocus
              ref={todoValue}
              placeholder="Enter a task"
              className="form-control"
              data-testid="input"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              onClick={handleNewTodo}
              className="btn btn-primary"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      {/* <List /> */}
    </Fragment>
  );
}
