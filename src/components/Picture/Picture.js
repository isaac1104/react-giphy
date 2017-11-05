import React from "react";
import "./Picture.css";

const Picture = (props) => {
  return(
    <div className="picture-container">
      {props.url.map((url) => {
        return(
          <img src={url} alt="image" className="img-fluid img-responsive rounded img-thumbnail"/>
        )
      })}
    </div>
  )
};

export default Picture;
