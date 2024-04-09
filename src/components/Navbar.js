import { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import UserDetails from "../context/UserDetails";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGears } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const user = useContext(UserDetails);
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header className={styles.header}>
      <Logo></Logo>
      <nav className={styles.nav}>
        <ul className={`${styles.navList} ${isActive ? styles.active : ""}`}>
          <div className={`${styles.searchInput} ${styles.hamShow}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
          </div>

          <li onClick={removeActive} className={styles.hamShow}>
            <a href="#">Settings</a>
          </li>
          <li onClick={removeActive} className={styles.hamShow}>
            <a href="#">Upload your work</a>
          </li>
          <li onClick={removeActive}>
            <a href="#">Inspiration</a>
          </li>
          <li onClick={removeActive}>
            <a href="#">Find Work</a>
          </li>
          <li onClick={removeActive}>
            <a href="#">Learn Web Development</a>
          </li>
          <li onClick={removeActive}>
            <a href="#">Go Pro</a>
          </li>
          <li onClick={removeActive}>
            <a href="#">Hire Developers</a>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
        <div className={styles.navActions}>
          <div className={`${styles.searchInput} ${styles.hamHide}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
          </div>
          <a href="#" className={styles.hamHide}>
            <FontAwesomeIcon icon={faGears} />
          </a>
          <div className={styles.profileButton}>
            <img src={user.dp} alt="Profile" className={styles.profileImage} />
          </div>
          <button className={`${styles.uploadButton} ${styles.hamHide}`}>
            Upload
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
