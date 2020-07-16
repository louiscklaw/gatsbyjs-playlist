import React from 'react'

import StyleContext from '../context/style-context'
import ModalContext from '../context/modal-context'

function Sidebar(props){
  const {style} = React.useContext(StyleContext)
  const {openTestModal} = React.useContext(ModalContext)

  return(
    <>
      sidebar
      <button className={style.button} onClick={openTestModal}>open modal in sidebar.js</button>
    </>
  )
}

export default Sidebar