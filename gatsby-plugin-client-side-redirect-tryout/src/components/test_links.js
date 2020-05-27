import React from 'react'
import {Link} from 'gatsby'

function TestLinks(){
  return(
    <>
      <h3>Testing links</h3>
      <ul>
        <li><Link to="/testpath/">testpath</Link></li>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/">Go back to the homepage</Link></li>
      </ul>
    </>
  )
}

export default TestLinks