import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainHeader from "../components/MainHeader/MainHeader";
import Footer from "../components/Footer/Footer";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <>
        <MainHeader />
        <Layout>
          <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <div id="card1" className="card">
              <div id="home" className="section">
                <div className="section-container">
                  <PostListing postEdges={postEdges} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Layout>
      </>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            dates
          }
        }
      }
    }
  }
`;
