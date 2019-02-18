import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import favicon16 from "../../static/images/favicon16.png";
import favicon32 from "../../static/images/favicon32.png";
import favicon64 from "../../static/images/favicon64.png";
import Transition from "../components/Transition";

const Layout = ({ children, location }) => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content={config.siteDescription}
          link={[
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: `${favicon16}`
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: `${favicon32}`
            },
            { rel: "shortcut icon", type: "image/png", href: `${favicon64}` }
          ]}
        />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
