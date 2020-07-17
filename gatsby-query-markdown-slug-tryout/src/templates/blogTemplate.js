import React from "react"
import {Link} from "gatsby"
import { graphql } from "gatsby"

function RelatedPost(props){
  let {data} = props

  return(
    <>
      related post
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
        />
    </>
  )
}

export default function Template(props) {
  let {data} = props
  let posts_node = data.allMarkdownRemark.edges
  let has_related_post = posts_node.length > 0

  return (
    <>
      Main post
      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: props.pageContext.html }}
        />

      {has_related_post ? <RelatedPost {...props} /> : <></>}

      <Link to="/">Back</Link>
    </>
  )
}

export const anotherQuery = graphql`
  query($tag: [String], $id: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: {tags: {in: $tag}},
        id: {ne: $id}
        }
      ) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          tags
        }
      }
    }
  }
  }
`