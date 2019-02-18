import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaGitSquare,
  FaJs,
  FaNode,
  FaReact
} from "react-icons/fa";
import "./Tech.css";

const Tech = () => {
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        <li className="html">
          <FaHtml5 />
        </li>
        <li className="css">
          <FaCss3 />
        </li>
        <li className="node">
          <FaNode />
        </li>
        <li className="js">
          <FaJs />
        </li>
        <li className="react">
          <FaReact />
        </li>
        <li className="git">
          <FaGitSquare />
        </li>
        <li>Bootstrap</li>
        <li>Adobe Illustrator</li>
      </ul>
    </div>
  );
};

export default Tech;
