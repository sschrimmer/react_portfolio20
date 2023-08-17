import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Steven Schrimmer</h2>
      <p>
        <ul>
          <a href="https://github.com/sschrimmer">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/steven-schrimmer-1884b1a0/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;