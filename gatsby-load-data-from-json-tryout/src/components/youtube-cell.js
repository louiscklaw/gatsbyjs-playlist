import React from 'react'

import style from './youtube-cell.module.css'

function YoutubeCell(props){
  const random_id = Math.random().toString().substring(2,20)
  const player_id = `player_${random_id}`
  React.useEffect(()=>{
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      // Array.from(document.querySelectorAll(`.${style.player}`)).map(p => new Plyr(p));
      new Plyr(document.querySelector(`#${player_id}`))
    }
  })

  return(
    <>
      <div id={player_id} className={style.player} data-plyr-provider="youtube" data-plyr-embed-id={props.v_id} >
      </div>
    </>
  )

}

export default YoutubeCell