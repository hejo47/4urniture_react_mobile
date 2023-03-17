import React from "react";
import classes from "./ContentL.module.css";

const ContentL = (props) => {
  return (
    <div className={classes.contentL}>
      <img src={props.imgsrc} alt={props.imgsrc} />
    </div>
  );
};

export default ContentL;
