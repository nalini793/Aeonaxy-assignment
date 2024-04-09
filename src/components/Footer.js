import React from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTwitter, faFacebook, faInstagram, faPinterest);
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerDescription}>
          <Logo></Logo>
          <p className={`${styles.footerText} ${styles.hide}`}>
            Wribbble is the world's leading community for web developers to
            share, grow, and get hired.{" "}
          </p>
          <ul className={styles.show}>
            <li>
              <a href="">For Developers</a>
            </li>
            <li>
              <a href="">Hire Developers</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Directories</a>
            </li>
            <li>
              <a href="">Developer Resources</a>
            </li>
          </ul>

          <ul className={styles.socialLinks}>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerLinks} ${styles.hide}`}>
          <div className={styles.footerLinksColumn}>
            <h3 className={styles.footerLinksHeading}>For Developers</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <a href="#">Go Pro!</a>
              </li>
              <li>
                <a href="#">Explore Developers work</a>
              </li>
              <li>
                <a href="#">Developers blog</a>
              </li>
              <li>
                <a href="#">Overtime podcast</a>
              </li>
              <li>
                <a href="#">Playoffs</a>
              </li>
              <li>
                <a href="#">Weekly Warm-Up</a>
              </li>
              <li>
                <a href="#">Refer a Friend</a>
              </li>
              <li>
                <a href="#">Code of conduct</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinksColumn}>
            <h3 className={styles.footerLinksHeading}>Hire Developers</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <a href="#">Post a job opening</a>
              </li>
              <li>
                <a href="#">Post a freelance project</a>
              </li>
              <li>
                <a href="#">Search for developers</a>
              </li>
              <li>
                <a href="#">Developer Match</a>
              </li>
              <li>
                <a href="#">Tech Talent Pool</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinksColumn}>
            <h3 className={styles.footerLinksHeading}>Company</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Mediakits</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Terms of services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinksColumn}>
            <h3 className={styles.footerLinksHeading}>Directories</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <a href="#">Developer Jobs</a>
              </li>
              <li>
                <a href="#">Developer for Hire</a>
              </li>
              <li>
                <a href="#">Freelance developers for hire</a>
              </li>
              <li>
                <a href="#">Tags</a>
              </li>
              <li>
                <a href="#">Places</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinksColumn}>
            <h3 className={styles.footerLinksHeading}>Developer Resources</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <a href="#">Freelancing</a>
              </li>
              <li>
                <a href="#">Developer Hiring</a>
              </li>
              <li>
                <a href="#">Developer Portfolio</a>
              </li>
              <li>
                <a href="#">Developer Education</a>
              </li>
              <li>
                <a href="#">Developing Process</a>
              </li>
              <li>
                <a href="#">Web Dev Trends</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Wribbble. All rights reserved.</p>
        <p>305,123 websites wribbbled</p>
      </div>
    </footer>
  );
};

export default Footer;
