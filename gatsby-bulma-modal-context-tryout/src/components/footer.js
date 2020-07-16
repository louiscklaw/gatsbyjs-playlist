import React from 'react'

import StyleContext from '../context/style-context'
import ModalContext from '../context/modal-context'

function Footer(props){
  const {style} = React.useContext(StyleContext)
  const {openTestModal} = React.useContext(ModalContext)

  return(
    <>
      Footer
      <button className={style.button} onClick={openTestModal}>open modal in footer.js</button>
    </>
  )
}

export default Footer