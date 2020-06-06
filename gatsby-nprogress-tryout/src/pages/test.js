import React from 'react'
import {Link} from 'gatsby'

import TestLargeImage from '../components/test_large_image'

import NProgress from 'nprogress'

class TestPage extends React.Component{
  // componentDidMount = () => {
  //   NProgress.start();
  // }



  render(){
    return(
      <>
        Test page
        <img src="/large_image.jpg"></img>
        <Link to="/">Back</Link>
      </>
    )
  }
}

export default TestPage