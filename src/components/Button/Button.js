import React from "react";

const Button = (props) => {
  return(
    <button onClick={props.getData} className="btn btn-primary btn-lg">Search</button>
  )
};

export default Button;
