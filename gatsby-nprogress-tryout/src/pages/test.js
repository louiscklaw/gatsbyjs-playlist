import React from 'react'
import {Link} from 'gatsby'

import NProgress from 'nprogress'

class TestPage extends React.Component{
  componentDidMount = () => {
    NProgress.start();
  }

  render(){
    return(
      <>
        Test page
        <Link to="/">Back</Link>
      </>
    )
  }
}

export default TestPage