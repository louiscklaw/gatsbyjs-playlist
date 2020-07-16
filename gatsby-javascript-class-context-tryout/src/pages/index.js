import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ProfileContext from '../contexts/profile-context'

function IndexPage(){
  let {user_profile} = React.useContext(ProfileContext)
  let [debug, setDebug] = React.useState()

  React.useEffect(()=>{
    console.log(user_profile)
    console.log(user_profile.loadProfile())

    user_profile.saveLg({d:1,e:2,f:3})
    console.log(user_profile.showCurrentProfile())




  })

  React.useEffect(()=>{
    setDebug(user_profile.showCurrentProfile())
  },[user_profile])
  return(
    <Layout>
      helloworld
      <pre>
        {JSON.stringify(debug, null, 2)}
      </pre>
    </Layout>
  )
}

export default IndexPage
