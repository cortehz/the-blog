import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import Projects from "../components/Projects/Projects";

import config from "../../data/SiteConfig";
import { GlobalStyle } from "../components/Commons";
import Layout from "../layout";
import "./index.css";
import Tech from "../components/Tech/Tech";
import Footer from "../components/Footer/Footer";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Fragment>
          <GlobalStyle />
          <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <MainHeader />
            <div>
              <div id="card1" className="card">
                <div id="home" className="section">
                  <img
                    alt="omanchi.com"
                    id="headshot"
                    src="https://res.cloudinary.com/cortehz/image/upload/v1517224591/portfolio/profile_rt4awq.jpg"
                  />
                  <div className="section-container">
                    <div className="profil">
                      <h1>SAMUEL OMANCHI</h1>
                      <p>
                        <u>Front End Developer</u>
                      </p>
                    </div>
                    <div className="social">
                      <a href="https://github.com/cortehz">
                        <FaGithub color="#666" size="30px" />
                      </a>
                      <a href="https://twitter.com/cortehzz">
                        <FaTwitter color="#666" size="30px" />
                      </a>

                      <a href="https://github.com/cortehz">
                        <FaLinkedin color="#666" size="30px" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="#projects">
            <Projects />
          </div>
          <Tech />

          <Footer />
        </Fragment>
      </Layout>
    );
  }
}

export default Index;
