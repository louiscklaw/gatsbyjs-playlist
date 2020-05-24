import React from 'react'

import {Link} from 'gatsby'

function Profile(){
  return(
    <>
      Profile page
      <Link to='/app'>
        <a>back</a>
      </Link>
    </>
  )
}

export default Profile