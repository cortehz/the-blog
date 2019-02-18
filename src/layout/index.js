import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Transition from "../components/Transition";

const Layout = ({ children, location }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
