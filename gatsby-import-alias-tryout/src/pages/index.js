import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TestComponent from '~components/test-component'
import TestContext from '~contexts/test-context'

import {hello_constants} from '~constants/hello_constants'
import {sayHello} from '~utils/test'
import style from '~scss/style.module.scss'

function IndexPage() {
  let {hello, setHello} = React.useContext(TestContext)

  React.useEffect(()=>{
    setHello('1233211234567')
  },[])

  return (
    <Layout>
      <SEO title="Home" />
      helloworld
      <div>
        <TestComponent />
        {JSON.stringify(hello)}
        <div>
          <h2>import constants</h2>
          <div> {JSON.stringify(hello_constants)} </div>
        </div>
        <div>
          <h2>import utils</h2>
          <div> {JSON.stringify(sayHello())} </div>
        </div>

        <div>
          <h2>style scss</h2>
          <div className={style.testStyle}> hello style </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
