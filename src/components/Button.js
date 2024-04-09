import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const active = !props.active;
  return (
    <button type="submit" disabled={active} className={classes.button}>
      {props.value}
    </button>
  );
};

export default Button;
