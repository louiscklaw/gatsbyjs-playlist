import React from 'react'

import BulmaModal from './bulma-modal'

import style from '../scss/desktop.module.scss'

function BulmaButton(){
  const modal_ref = React.useRef(null)
  React.useEffect(() => {

  })

  const handleOnButtonClick = () => {
    modal_ref.current.classList.add(style.isActive)
  }

  return(
    <>
      <BulmaModal modal_ref={modal_ref} />
      <button className={style.button} onClick={handleOnButtonClick}>
        Open Modal
      </button>
    </>
  )
}

export default BulmaButton