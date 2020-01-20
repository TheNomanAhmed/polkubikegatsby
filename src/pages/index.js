import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Polku Bike"
        keywords={[
          `Joensuu Bikes`,
          `joensuu bike rental`,
          `Finland bike rental`,
          `joensuu rentals`,
          `finland rentals`
        ]}
      />
    </Layout>
  );
}

export default IndexPage;
