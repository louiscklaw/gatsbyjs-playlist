import React from 'react'

import style from '../scss/desktop.module.scss'

function BulmaModal(props){
  const {modal_ref} = props

  const handleOnCloseButtonClick = () =>{
    modal_ref.current.classList.remove(style.isActive)
  }

  const handleBackgroundClick = () => {
    modal_ref.current.classList.remove(style.isActive)
  }

  return(
    <div className={style.modal} ref={modal_ref}>
      <div className={style.modalBackground} onClick={handleBackgroundClick}></div>
      <div className={style.modalContent}>
        <div className={style.box}>
          <article className={style.media}>
            <div className={style.mediaLeft}>
              <figure className={style.image + ' ' + style.is64x64}>
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
              </figure>
            </div>
            <div className={style.mediaContent}>
              <div className={style.content}>
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
              <div className={style.level + ' ' + style.isMobile}>
                <div className={style.levelLeft}>
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <button className={style.modalClose +' ' + style.isLarge} aria-label="close" onClick={handleOnCloseButtonClick} ></button>
    </div>
  )
}

export default BulmaModal