import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  if (totalTodos === completedTodos) {
    return (
      <h1 className="TodoCounter">
        ¡Has finalizado todos tus TODOS!
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
  }
}

export { TodoCounter };
