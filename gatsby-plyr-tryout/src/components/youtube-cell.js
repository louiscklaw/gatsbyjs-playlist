import React from 'react'

import style from './youtube-cell.module.css'

function YoutubeCell({v_id}){
  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));
    }
    let placeholder_cell = document.querySelector('#youtube-placeholder')
    let this_cell = document.querySelector('#test_helloworld_channel2')

    let main_cell = document.querySelector('#main-youtube-cell')

    this_cell.style.top=`${placeholder_cell.offsetTop}px`
    this_cell.style.left=`${placeholder_cell.offsetLeft}px`
    this_cell.style.height=`${placeholder_cell.clientHeight}px`
    this_cell.style.width=`${placeholder_cell.clientWidth}px`

    this_cell.addEventListener('click',() => {
      this_cell.style.top=`${main_cell.offsetTop}px`
      this_cell.style.left=`${main_cell.offsetLeft}px`
      this_cell.style.height=`${main_cell.clientHeight}px`
      this_cell.style.width=`${main_cell.clientWidth}px`
    })

  }, []);

  return(
    <>
      <div id="test_helloworld_channel2" className={style.test}>
        <div
          className="js-player"
          data-plyr-provider="youtube"
          data-plyr-embed-id={v_id}
        />
      </div>
    </>
  )
}

export default YoutubeCell