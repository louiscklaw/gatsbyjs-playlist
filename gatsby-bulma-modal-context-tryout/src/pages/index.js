import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import StyleContext from '../context/style-context'
// import style from '../scss/style.module.scss'

import ModalContext from '../context/modal-context'

import TestModal from '../modals/test-modal'

function IndexPage() {
  const {hello, setHello} = React.useContext(ModalContext)
  const {openTestModal} = React.useContext(ModalContext)
  const {style} = React.useContext(StyleContext)

  const clickTestHello = () => {
    setHello('test set hello')
  }

  return(
    <Layout>
      <SEO title="Home" />

      {JSON.stringify(hello)}

      <button onClick={clickTestHello}>test hello</button>

      <TestModal />

      <h1 className={style.title}>helloworld</h1>
      <h1 className={style.subtitle}>helloworld</h1>

      <button className={style.button} onClick={openTestModal}>open modal</button>
    </Layout>
  )
}


export default IndexPage
