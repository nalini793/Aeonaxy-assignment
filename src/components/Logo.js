import React from "react";
import styles from "./Logo.module.css";

const Logo = (props) => {
  const value = props.value;
  if (value === "fulllogo") {
    return (
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <i>Wribbble</i>
        </h1>
        <br />
        <br />
        <p className={styles.slogan}>
          Discover the world's top Web Developers & Creatives.
        </p>
      </div>
    );
  }
  return (
    <h1 className={styles.smallLogo}>
      <i>Wribbble</i>
    </h1>
  );
};

export default Logo;
