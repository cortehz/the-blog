import React, { Component } from "react";
import "./Landing.css";
import siteConfig from "../../../data/SiteConfig";

const Landing = () => {
  const heroImg = siteConfig.siteCover;
  return (
    <div className="jumbotron" style={{ backgroundImage: `url("${heroImg}")` }}>
      <div id="black" />
      <div className="animated fadeInDown" style={{ margin: "auto" }}>
        <div className="container">
          <div className="col-md-12">
            <div className="col-md-8">
              <h3 className="subtitle">Welcome to {siteConfig.siteTitle}!</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <hr
                style={{
                  width: "300px",
                  marginTop: "15px",
                  marginBottom: "20px",
                  border: "2.5px solid white",
                  alignSelf: "right"
                }}
              />
            </div>
          </div>

          <h2 className="title">
            Every once in a while we all
            <br className="visible-lg" /> we all need some direction. Its a
            complicated world.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
