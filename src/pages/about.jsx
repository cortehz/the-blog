import React from "react";
import "../components/About/About.css";
import MainHeader from "../components/MainHeader/MainHeader";
import Footer from "../components/Footer/Footer";
import Layout from "../layout";

const About = () => {
  return (
    <Layout>
      <div>
        <MainHeader />
        <section id="about" style={{ zIndex: "-1000" }}>
          <div className="wrapper">
            <article>
              <div className="title">
                <h3>About Me</h3>
                <p className="separator" />
              </div>
              <div className="desc">
                <h4 className="subtitle">Web Development</h4>
                <p>
                  My name is Samuel Omanchi, I am a Freelance Developer based in
                  Abuja, Nigeria. I mostly build front end interfaces with some
                  of the best technologies like HTML5, CSS3, JavaScript,
                  ReactJs, and Bootstrap. Currently really playing around with
                  GatsbyJs and really love how intuitive and how easy it is to
                  get a performant setup running. On the other side i am very
                  much enthusiastic about mobile development and I have been
                  going about with React Native as well.
                </p>
                <p>
                  I also have a good working knowledge of the backend with
                  NodeJs to be considered in the realm of the Full Stacks. I can
                  make a NodeJs JSON API and can make calls to various APIs. I
                  am presently very open to Freelance and Full time offers, so
                  please, hit the contact link if you have some project that I
                  might be a good fit for.
                </p>
              </div>
              <div className="desc">
                <h4 className="subtitle">Graphic Design</h4>
                <p>
                  I also love playing around with graphics and can conjure up
                  superb logos from my Mastery of Adobe Illustrator. Presently
                  building up my design portfolio but feel free to check out my
                  Portfolio: Link coming soon.
                </p>
                <p />
              </div>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
