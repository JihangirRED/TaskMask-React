import React from "react";
import Task from "./components/Task";
import Boxes from "./components/Boxes";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Counter from "./components/Counter";

const App = () => {
  let stylesArr = [
    { width: "300px", height: "150px", backgroundColor: "red" },
    { width: "200px", height: "150px", backgroundColor: "green" },
    { width: "100px", height: "150px", backgroundColor: "yellow" },
  ];
  return (
    <div>
      <Task />
      <Boxes Array={stylesArr} />
      <Card>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          }
          alt={"Картинка"}
        />
      </Card>
      <Counter />
    </div>
  );
};

export default App;
