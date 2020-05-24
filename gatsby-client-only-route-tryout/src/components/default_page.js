import React from 'react'

import {Link} from 'gatsby'

function Default(){
  return(
    <>
      <p>helloworld default_page.js</p>
      <ul>
        <li><Link to="/app/login">Go to login</Link></li>
        <li><Link to="/app/details">Go to details</Link></li>
        <li><Link to="/app/profile">Go to profile</Link></li>
        <li><Link to="/app/TestRouteParameters/123321">Go to TestRouteParameters</Link></li>
        <li><Link to='/'>back to index</Link></li>

      </ul>

    </>
  )
}


export default Default