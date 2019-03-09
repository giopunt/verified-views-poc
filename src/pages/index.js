import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import Episode from "../components/episode";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./index.module.css";
import connectsLogo from "../images/connects+logo.png";

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
      <div className={styles.episodesList}>
        {data.allMarkdownRemark.edges
          .reverse()
          .slice(0, 3)
          .map(({ node }) => (
            <Episode
              key={node.id}
              excerpt={node.frontmatter.description}
              image={node.frontmatter.image}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              url={node.frontmatter.url}
            />
          ))}
      </div>
      <Link to="/episodes/" className={styles.more}>
        More Episodes...
      </Link>
      <div className={styles.extraLinks}>
        <Link to="/what-to-expect/">
          What you can expect from #VerifiedViews
        </Link>
      </div>
      <div className={styles.sponsor}>
        <h4>Brought to you by</h4>
        <img src={connectsLogo} />
      </div>
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
            date(formatString: "DD MMMM, YYYY")
            description
            image
            title
            url
          }
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
