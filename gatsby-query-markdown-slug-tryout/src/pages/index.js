import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

function IndexPage(props){
  let {data} = props
  let pages = data.allMarkdownRemark.edges.map( x => x.node.frontmatter.slug)
  return(
    <Layout>
      helloworld

      {
        pages.map(page => {
          return(
            <div>
              <Link to={page}>{page}</Link>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`