import React from "react"

function Home() {
  const GATSBY_API_URL = process.env.GATSBY_API_URL

  return (
    <div>
      Hello world!

      Note: since Gatsby uses the webpack DefinePlugin to make the environment variables available at runtime, they cannot be destructured from process.env; instead, they have to be fully referenced.

      <pre>gatsby-environment-variable-tryout/.env.development</pre>

      <pre>gatsby-environment-variable-tryout/.env.production</pre>
      { JSON.stringify(GATSBY_API_URL, null, 2) }
    </div>
  )

}


export default Home