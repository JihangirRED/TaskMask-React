import React from "react";

const Card = (props) => {
  return (
    <div style={{ width: "300px", height: "300px" }}>{props.children}</div>
  );
};

export default Card;
