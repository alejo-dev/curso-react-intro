import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Le diste click");
        console.log(event);
        console.log(event.target);
        setOpenModal(status => !status);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
