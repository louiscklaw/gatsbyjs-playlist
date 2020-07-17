import React from "react"
import style from '../scss/desktop.module.scss'

import Layout from "../components/layout"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function IndexPage() {
  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-center",
    // autoClose: 5000,
    hideProgressBar: false,
    // closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: style.notification +' '+style.isDanger+' '+style.isLight+' '+style.roundedCorner,
    bodyClassName: "grow-font-size",
    progressClassName: 'fancy-progress-bar'
    });

  return (
    <Layout>
      <button onClick={notify}>Notify !</button>

      <ToastContainer />

    </Layout>
  )
}

export default IndexPage
