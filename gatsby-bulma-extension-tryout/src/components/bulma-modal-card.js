import React from 'react'
import style from '../scss/desktop.module.scss'

function BulmaModalCard(props){
  let {modal_ref}=props

  const handleOnCloseButtonClick = () =>{
    modal_ref.current.classList.remove(style.isActive)
  }

  const handleBackgroundClick = () => {
    modal_ref.current.classList.remove(style.isActive)
  }

  const handleCloseButtonOnClick = () => {
    modal_ref.current.classList.remove(style.isActive)
  }

  return(
    <div className={style.modal} ref={modal_ref}>
      <div className={style.modalBackground} onClick={handleBackgroundClick}></div>
      <div className={style.modalCard}>
        <header className={style.modalCardHead}>
          <p className={style.modalCardTitle}>Modal title</p>
          <button className={style.delete} aria-label="close"></button>
        </header>
        <section className={style.modalCardBody}>
          helloworld
        </section>
        <footer className={style.modalCardFoot}>
          <button className={style.button +' '+ style.isSuccess}>Save changes</button>
          <button className={style.button}>Cancel</button>
        </footer>
      </div>

      <button className={style.modalClose +' ' + style.isLarge} aria-label="close" onClick={handleOnCloseButtonClick} ></button>
    </div>
  )
}

export default BulmaModalCard