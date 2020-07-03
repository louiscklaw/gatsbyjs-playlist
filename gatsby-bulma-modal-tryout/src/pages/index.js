import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from '../scss/style.module.scss'

function IndexPage() {
  let modal_ref = React.useRef()

  const openModal = () => {
    modal_ref.current.classList.add(style.isActive)
  }

  const closeModal = ()=>{
    modal_ref.current.classList.remove(style.isActive)
  }

  return(
    <Layout>
      <SEO title="Home" />

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
            <button className={style.button} onClick={closeModal}>Cancel</button>
          </footer>
        </div>
      </div>

      <h1 className={style.title}>helloworld</h1>

      <button className={style.button} onClick={openModal}>open modal</button>
    </Layout>
  )
}


export default IndexPage
