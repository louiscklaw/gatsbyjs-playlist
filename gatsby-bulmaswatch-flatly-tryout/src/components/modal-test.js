import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function ModalTest(props){


  return(
    <section className={active_style.section} id="modal">
    <h1 className={active_style.title}>Modal</h1>
    <hr />
    <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isLarge])} data-target="#myModal" onclick="$('#myModal').toggleClass('is-active')">Launch
      example modal</a>
    <div className={active_style.modal} id="myModal">
      <div className={active_style.modalBackground} />
      <div className={active_style.modalCard}>
        <header className={active_style.modalCardHead}>
          <p className={active_style.modalCardTitle}>Modal title</p>
          <button className={active_style.delete} />
        </header>
        <section className={active_style.modalCardBody}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </section>
        <footer className={active_style.modalCardFoot}>
          <a className={combineStyles([active_style.button, active_style.isPrimary])}>Save changes</a>
          <a className={active_style.button}>Cancel</a>
        </footer>
      </div>
    </div>
  </section>
  )

}

export default ModalTest