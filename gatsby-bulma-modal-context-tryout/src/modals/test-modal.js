import React from "react"
// import style from '../scss/style.module.scss'

import StyleContext from '../context/style-context'
import ModalContext from '../context/modal-context'

function TestModal(props) {
  let modal_ref = React.useRef()
  let {setModalRef, closeTestModal} = React.useContext(ModalContext)
  setModalRef(modal_ref)

  const {style} = React.useContext(StyleContext)

  console.log('test-modal.js', 'style',style)

  return(
    <>
      <div className={style.modal} ref={modal_ref}>
        <div className={style.modalBackground}></div>
        <div className={style.modalCard}>
          <header className={style.modalCardHead}>
            <p className={style.modalCardTitle}>Modal title</p>
            <button className={style.delete} aria-label="close"></button>
          </header>
          <section className={style.modalCardBody}>
            Content
          </section>
          <footer className={style.modalCardFoot}>
            <button className={style.button+' '+style.isSuccess}>Save changes</button>
            <button className={style.button} onClick={closeTestModal}>Cancel</button>
          </footer>
        </div>
      </div>
    </>
  )
}


export default TestModal
