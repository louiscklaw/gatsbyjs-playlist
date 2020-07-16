import React from 'react'

function Test(){
  return(
    <video
      id="vid1"
      class="video-js vjs-default-skin"
      controls
      autoplay
      preload
      width="640" height="480"
      data-setup='{
        "techOrder": ["youtube"],
        "sources": [{
          "type": "video/youtube",
          "src": "http://www.youtube.com/embed/nm1PV1b9Vc8"
        }]
        , "youtube": {
          "iv_load_policy": 1 ,
          "autoplay": 1
        }
      }'>
    </video>

  )
}

export default Test