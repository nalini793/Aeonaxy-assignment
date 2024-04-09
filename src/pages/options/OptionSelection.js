import React, { useEffect, useState } from "react";
import styles from "./OptionSelection.module.css";
import option1 from "../../assets/images/Options1.png";
import option2 from "../../assets/images/Options2.png";
import option3 from "../../assets/images/Options3.png";
import Logo from "../../components/Logo";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

// demo text and images for options
const cardDetails = [
  {
    image: option1,
    heading: "I'm a developer looking to share my work",
    content:
      "Unleash your web development creativity and share your latest ideas with a community of fellow developers!",
  },
  {
    image: option2,
    heading: "I'm alooking to hire a developer",
    content:
      "Discover top talent and build your dream web development team directly from our thriving community of skilled professionals.",
  },
  {
    image: option3,
    heading: "I'm looking for WebD inspiration",
    content:
      "Elevate your web development game by exchanging innovative ideas and solutions with like-minded professionals.",
  },
];

const OptionSelection = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

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
  // handle navigation to next page
  const handleSubmit = () => {
    navigate("/main");
  };

  // handle card option selection
  const handleActive = () => {
    setActive(true);
  };

  return (
    <div className={styles.container} id="optionContainer">
      <div className={styles.logo}>
        <Logo></Logo>
        <button className={styles.backButton}>&#60;</button>
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1 className={styles.heading}>What brings you to Wribbble?</h1>
          <p className={styles.subheading}>
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className={styles.optionsContainer}>
          {cardDetails.map((cardDetail, index) => (
            <div key={index} className={styles.option} onClick={handleActive}>
              <Card
                image={cardDetail.image}
                heading={cardDetail.heading}
                content={cardDetail.content}
              ></Card>
            </div>
          ))}
        </div>

        <div className={styles.btnwrap}>
          <h3 className={` ${active ? styles.return : styles.hideReturn}`}>
            Anything else? You can select multiple
          </h3>
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

export default OptionSelection;
