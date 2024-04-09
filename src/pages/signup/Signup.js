import React from "react";
import styles from "./Signup.module.css";
import SignupForm from "./SignupForm";
import Logo from "../../components/Logo";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Logo value={"fulllogo"}></Logo>
        <p className={styles.artCredit}>
          Art by <a href="https://unsplash.com/@fakurian">Milad Fakurian</a>
        </p>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.smallLogo}>
          <Logo></Logo>
        </div>
        <div className={styles.signin_option}>
          <h3>
            Already a member? <a href="#">Sign In</a>
          </h3>
        </div>
        <SignupForm></SignupForm>
      </div>
    </div>
  );
};

export default Signup;
