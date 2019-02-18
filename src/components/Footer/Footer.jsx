import React, { Component } from "react";
import { Link } from "gatsby";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import config from "../../../data/SiteConfig";
import "./Footer.css";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <h4>{copyright}</h4>

        <div className="social">
          <a href="https://github.com/cortehz">
            <FaGithub color="#fff" size="20px" />
          </a>
          <a href="https://twitter.com/cortehzz">
            <FaTwitter color="#fff" size="20px" />
          </a>

          <a href="https://github.com/cortehz">
            <FaLinkedin color="#fff" size="20px" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
