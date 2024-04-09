import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [active, setActive] = useState(false);

  function handleSelect() {
    setActive(!active);
  }
  function handleChange() {
    setActive(!active);
  }

  return (
    <div
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={handleSelect}
    >
      <img src={props.image} alt="" />
      <h2>{props.heading}</h2>
      <div className={styles.cont}>
        <p>{props.content}</p>
        <label className={styles.select}>
          <input
            type="checkbox"
            checked={active ? "checked" : ""}
            name="checkbox"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Card;
