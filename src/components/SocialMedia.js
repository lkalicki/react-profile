import React from "react";
import {
  AiFillGithub,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";


function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/lkalicki"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/lukasz-kalicki-b76a97222"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://stackoverflow.com/users/18263917/lkalicki89"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaStackOverflow className="social-icon" />
        </a>
      </li>
     <li className="social-icons">
        <a
          href="mailto:lkalicki98@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
