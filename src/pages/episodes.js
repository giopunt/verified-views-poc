import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const EpisodesPage = () => (
  <Layout>
    <SEO
      title="List of Episodes"
      keywords={[
        `Verified Views`,
        `SEENConnects`,
        `Business Podcast`,
        `List of Episodes`
      ]}
    />
    <h1>List of Episodes</h1>
    <p>count Episodes</p>
    <Link to="/">Go back</Link>
  </Layout>
);

export default EpisodesPage;
