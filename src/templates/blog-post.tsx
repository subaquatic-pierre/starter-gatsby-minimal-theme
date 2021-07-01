import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function BlogPostTemplate({ data }: PageProps) {
  // const post = data.markdownRemark;

  return (
    <Layout>
      <Seo title="Title" description="Description" />
      <div>Something to say here</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
