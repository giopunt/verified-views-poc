import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./what-to-expect.module.css";

const WhatToExpect = () => (
  <Layout theme="blue" linkToHomepage={true}>
    <SEO
      title="About #VerifiedViews"
      keywords={[
        `Verified Views`,
        `SEENConnects`,
        `Business Podcast`,
        `List of Episodes`
      ]}
    />
    <h1 className={styles.title}>What you can expect from #VerifiedViews</h1>
    <article>
      <h3>
        <span>We are non-bias</span>
      </h3>
      <br />
      <p>
        We&apos;re all about authenticity, which means delivering useful
        information through fun, honest storytelling.
      </p>
    </article>
    <article>
      <h3>
        <span>We love reseach</span>
      </h3>
      <br />
      <p>
        We don&apos;t want this to be just another interview with an influencer.
        We work with individuals with a story to tell, with new angles and a
        fresh perspective.
      </p>
    </article>
    <article>
      <h3>
        <span>We&apos;re easy listening</span>
      </h3>
      <br />
      <p>
        Short, snappy and easy to follow – that&apos;s us, the commuters best
        pal.
      </p>
    </article>
  </Layout>
);

export default WhatToExpect;
