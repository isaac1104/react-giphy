import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <input onChange={props.handleInputChange} className="input-control input-control-lg search" type="text" placeholder="search for GIF" value={props.search}></input>
    </div>
  )
};

export default Search;
