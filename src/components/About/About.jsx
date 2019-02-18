import React, { Component } from "react";
import "./About.css";
import MainHeader from "../MainHeader/MainHeader";

const About = props => {
  return (
    <div>
      <MainHeader />
      <section id="about" style={{ zIndex: "-1000" }}>
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>About Us</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                scelerisque, est vitae facilisis eleifend, eros dolor dignissim
                lectus, sed suscipit sapien arcu ut erat. Ut non mollis lacus,
                vulputate convallis lacus. Donec imperdiet tempus sapien, non
                condimentum quam. Suspendisse potenti. Integer ut dignissim
                metus. Curabitur dui nibh, cursus non augue sit amet, faucibus
                efficitur tortor. Fusce a felis ac lacus fermentum porttitor sed
                id dolor. Donec facilisis tristique urna, a sodales lorem
                vehicula in. Duis scelerisque bibendum dignissim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                scelerisque, est vitae facilisis eleifend, eros dolor dignissim
                lectus, sed suscipit sapien arcu ut erat. Ut non mollis lacus,
                vulputate convallis lacus. Donec imperdiet tempus sapien, non
                condimentum quam. Suspendisse potenti. Integer ut dignissim
                metus. Curabitur dui nibh, cursus non augue sit amet, faucibus
                efficitur tortor. Fusce a felis ac lacus fermentum porttitor sed
                id dolor. Donec facilisis tristique urna, a sodales lorem
                vehicula in. Duis scelerisque bibendum dignissim.
              </p>
            </div>
            <div className="title">
              <h3>How we do it</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">Live Interaction</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                scelerisque, est vitae facilisis eleifend, eros dolor dignissim
                lectus, sed suscipit sapien arcu ut erat. Ut non mollis lacus,
                vulputate convallis lacus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                scelerisque, est vitae facilisis eleifend, eros dolor dignissim
                lectus, sed suscipit sapien arcu ut erat. Ut non mollis lacus,
                vulputate convallis lacus.
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Over the Phone</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex ligula, mollis nec molestie id, bibendum vel dui. Duis
                scelerisque, est vitae facilisis eleifend, eros dolor dignissim
                lectus, sed suscipit sapien arcu ut erat. Ut non mollis lacus,
                vulputate convallis lacus.
              </p>
              <p>
                Donec imperdiet tempus sapien, non condimentum quam. Suspendisse
                potenti. Integer ut dignissim metus. Curabitur dui nibh, cursus
                non augue sit amet, faucibus efficitur tortor. Fusce a felis ac
                lacus fermentum porttitor sed id dolor. Donec facilisis
                tristique urna, a sodales lorem vehicula in. Duis scelerisque
                bibendum dignissim.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
