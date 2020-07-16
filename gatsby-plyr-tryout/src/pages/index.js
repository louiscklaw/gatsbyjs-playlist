import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from './style.module.css'



function IndexPage(){

  return(
    <Layout>
      <SEO title="Home" />


      <div className={style.videoContainerSmall} id="test_helloworld_channel1">
        <div
          className="js-player"
          data-plyr-provider="youtube"
          data-plyr-embed-id={`KGBv8oT5lwk`}
        />
      </div>



    </Layout>
  )
}

export default IndexPage
