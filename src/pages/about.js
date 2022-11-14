import React from 'react';
import { Link, graphql } from 'gatsby';

const AboutPage = ({data}) => (
  <React.Fragment>
    <div>About page</div>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <Link to="/">Back to home</Link>
  </React.Fragment>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        author,
        description,
        title
      }
    }
  }
`

export default AboutPage;