import React from "react"
import {Link} from "gatsby"
import { graphql } from "gatsby"

export default function Template(props) {
  let {data} = props
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(data)
  return (
    <div className="blog-post-container" style={{width: '80%', margin:'auto', paddingTop:'50px'}}>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <div>
        slug:{frontmatter.tags}
      </div>


      <Link to="/">back</Link>
    </div>
  )
}

export const pageQuery = graphql`

  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        slug
        title
      }
    }
  }


`