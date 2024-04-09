import React, { useContext, useState } from "react";
import styles from "./SignupForm.module.css";
import Button from "../../components/Button";
import UserDetails from "../../context/UserDetails";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  // for accessing user details and storing the same
  const user = useContext(UserDetails);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [active, setActive] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    user.email = formData.email;
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.username !== "" &&
      formData.password !== ""
    ) {
      setActive(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the form data, such as sending it to a server
    // console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      terms: false,
    });
    navigate("profile");
  };

  return (
    <div className={styles.container}>
      <h2>Sign up to Wribbble</h2>
      <form onSubmit={handleSubmit} autocomplete="on">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="6+ characters"
            type="password"
            name="password"
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.terms}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Creating an account means you're okay with our
              <a href="#"> Terms of Service,</a>
              <a href="#"> Privacy Policy,</a>
              and our default
              <a href="#"> Notification Settings</a>.
            </label>
          </div>
        </div>

        <Button value={"Create Account"} active={active}></Button>
      </form>
      <p className={styles.captcha}>
        This site is protected by reCAPTCHA and the Google
        <a href="#"> Privacy Policy </a>and <a href="#">Terms of Service</a>{" "}
        apply.
      </p>
    </div>
  );
}

export default SignupForm;
