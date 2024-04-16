// Note.jsx
import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleToggle() {
    props.onToggleCompleted(props.id);
  }

  return (
    <div className={`note ${props.completed ? "completed" : ""}`}>
      <h1>{props.title}</h1>
      <p className={props.completed ? "completed-content" : ""}>
        {props.content}
      </p>
      <div>
        <button onClick={handleClick}>DELETE</button>
        <button onClick={handleToggle}>
          {props.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default Note;
