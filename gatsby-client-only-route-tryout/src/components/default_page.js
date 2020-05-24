import React from 'react'

import {Link} from 'gatsby'

function Default(){
  return(
    <>
      <p>helloworld default_page.js</p>
      <ul>
        <li>
          <Link to="/app/login">
            <a>Go to login</a>
          </Link>
        </li>

        <li>
          <Link to="/app/details">
            <a>Go to details</a>
          </Link>
        </li>

        <li>
          <Link to="/app/profile">
            <a>Go to profile</a>
          </Link>
        </li>

      </ul>

    </>
  )
}


export default Default