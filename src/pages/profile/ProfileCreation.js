import React, { useContext, useState, useEffect } from "react";
import styles from "./ProfileCreation.module.css";
import Logo from "../../components/Logo";
import UserDetails from "../../context/UserDetails";
import { useNavigate } from "react-router-dom";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const user = useContext(UserDetails);
  const [file, setFile] = useState();
  const [active, setActive] = useState(false);

  // save the dp in context
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    user.dp = URL.createObjectURL(e.target.files[0]);
    setActive(true);
  }

  // Handle Enter key press here
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        document.getElementById("next").click();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keypress", handleKeyPress);

    // Clean up
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  // navigation to next page
  const handleSubmit = () => {
    navigate("/options");
  };

  return (
    <div className={styles.container}>
      <div className={styles.smallLogo}>
        <Logo></Logo>
      </div>
      <div className={styles.innerContainer}>
        <h1 className={styles.heading}>Welcome! Let's create your profile</h1>
        <p className={styles.subheading}>
          Let others get to know you better! You can do these later
        </p>

        <div className={styles.avatarSection}>
          <h2 className={styles.sectionHeading}>Add an avatar</h2>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <img src={file} alt="dp" className={styles.avatarImage} />
            </div>
            <div className={styles.selectAvatar}>
              <label htmlFor="file">Choose Image</label>
              <input
                id="file"
                type="file"
                onChange={handleChange}
                accept="image/*"
              />
              <p className={styles.avatarText}>
                {" "}
                &gt; Or choose one of our defaults
              </p>
            </div>
          </div>
        </div>

        <div className={styles.locationSection}>
          <h2 className={styles.sectionHeading}>Add your location</h2>
          <input
            type="text"
            id="location"
            placeholder="Enter a location"
            className={styles.locationInput}
            autoComplete="on"
          />
        </div>

        <div className={styles.btnwrap}>
          <button
            id="next"
            type="submit"
            disabled={!active}
            className={styles.button}
            onClick={handleSubmit}
          >
            Next
          </button>
          <p className={` ${active ? styles.return : styles.hideReturn}`}>
            or Press RETURN
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
