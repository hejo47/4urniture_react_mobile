import React from "react";
import classes from "./Inner.module.css";
const Inner = (props) => {
  return <div className={classes.inner}>{props.children}</div>;
};

export default Inner;
