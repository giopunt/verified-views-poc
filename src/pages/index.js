import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./index.module.css";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Welcome to #VerifiedViews"
        keywords={[`Verified Views`, `SEENConnects`, `Business Podcast`]}
      />
      <p className={styles.intro}>
        <strong>Welcome to Verified Views</strong> - the podcast series brought
        to you by{" "}
        <a
          href="http://seenconnects.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEENConnects.com
        </a>
        , the innovative influencer marketing agency.
      </p>
      <div>
        <span className={styles.episodesCount}>
          <h4>{data.allMarkdownRemark.totalCount} Episodes</h4>
        </span>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.episode}>
          <h3>{node.frontmatter.title}</h3>
          <span>Released {node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
          <a className={styles.listenNow} href={node.frontmatter.url}>
            ► Listen Now
          </a>
        </div>
      ))}
      <Link to="/episodes/">More Episodes...</Link>
    </Layout>
  );
};

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
          }
          excerpt
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object.isRequired
  }).isRequired
};

export default IndexPage;
