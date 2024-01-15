import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const takeInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={takeInput} />
      <p>{task}</p>
    </div>
  );
};

export default Task;
