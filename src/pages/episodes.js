import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Episode from "../components/episode";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./index.module.css";

const EpisodesPage = ({ data }) => (
  <Layout linkToHomepage={true}>
    <SEO
      title="List of Episodes"
      keywords={[
        `Verified Views`,
        `SEENConnects`,
        `Business Podcast`,
        `List of Episodes`
      ]}
    />
    <h1 className={styles.title}>List of Episodes</h1>
    <div>
      <span className={styles.episodesCount}>
        <h4>{data.allMarkdownRemark.totalCount} Episodes</h4>
      </span>
    </div>
    {data.allMarkdownRemark.edges.reverse().map(({ node }) => (
      <Episode
        key={node.id}
        excerpt={node.excerpt}
        image={node.frontmatter.image}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        url={node.frontmatter.url}
      />
    ))}
    <div className={styles.alignCenter}>
      <a href="#top">Back to Top</a>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            url
            image
          }
          excerpt
        }
      }
    }
  }
`;

EpisodesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired
  }).isRequired
};

export default EpisodesPage;
