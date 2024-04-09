import React from "react";
import styles from "./EmailVerification.module.css";
import { useContext } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserDetails from "../../context/UserDetails";

const EmailVerification = () => {
  const user = useContext(UserDetails);

  return (
    <div className={styles.container}>
      <Navbar></Navbar>

      <main className={styles.main}>
        <div className={styles.emailVerificationContent}>
          <h1 className={styles.heading}>Please verify your email...</h1>
          <div className={styles.innerContent}>
            <div className={styles.emailIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.emailIconSvg}
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <p className={styles.verificationMessage}>
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <p className={styles.emailAddress}>{user.email}</p>
            <p className={styles.instructions}>
              Click the confirmation link in that email to begin using Wribbble.
            </p>
            <p className={styles.spamMessage}>
              Didn't receive the email? Check your Spam folder, it may have been
              caught by a filter. <br></br> If you still don't see it, you can{" "}
              <a href="#" className={styles.resendLink}>
                resend the confirmation email
              </a>
              .
            </p>
            <p className={styles.wrongEmailMessage}>
              Wrong email address?{" "}
              <a href="#" className={styles.changeEmailLink}>
                Change it
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default EmailVerification;
