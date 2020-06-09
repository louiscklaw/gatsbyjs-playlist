import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from './style.module.css'

function IndexPage(){

  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

      document.querySelector('#test_helloworld_channel1').addEventListener('click',()=>{
        document.querySelector('#test_helloworld_channel1').classList.remove(style.videoContainerSmall)
        document.querySelector('#test_helloworld_channel1').classList.add(style.videoContainerMain)

        document.querySelector('#test_helloworld_channel2').classList.add(style.videoContainerSmall)
        document.querySelector('#test_helloworld_channel2').classList.remove(style.videoContainerMain)
      })
    }
  }, []);


  return(
    <Layout>
      <SEO title="Home" />

      <div className={style.videoContainerMain} id="test_helloworld_channel2">
        <div
          className="js-player"
          data-plyr-provider="youtube"
          data-plyr-embed-id={`bTqVqk7FSmY`}
        />
      </div>

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
