import React from 'react'

import MainVideoContainer from '../components/main-video-container'
import BottomVideoContainer from '../components/bottom-video-container'
import RightVideoContainer from '../components/right-video-container'

import style from './index.module.css'

function IndexPage(){
  return(
    <div className={style.videoContainerRow}>

      <div className={style.videoContainerColumn}>
        <MainVideoContainer />
        <BottomVideoContainer />
      </div>
      <RightVideoContainer />
    </div>
  )
}

export default IndexPage