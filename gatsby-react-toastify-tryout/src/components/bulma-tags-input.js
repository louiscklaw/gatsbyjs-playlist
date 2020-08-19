import React from 'react'

import style from '../scss/desktop.module.scss'

function BumlaTagsInput(){
  return(
    <>
      <input class="input" type="tags" placeholder={`Add Tag`+chineseTestShort()+emojiTestShort()} value="Tag1,Tag2,Tag3"></input>
    </>
  )
}

export default BumlaTagsInput