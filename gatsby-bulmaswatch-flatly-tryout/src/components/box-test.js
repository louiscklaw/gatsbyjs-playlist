import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'


import {combineStyles} from '../utils/common'

function BoxTest(props){
  return(
    <section className={active_style.section} id="box">
    <h1 className={active_style.title}> Box </h1>
    <hr />
    <div className={active_style.box}>
      <article className={active_style.media}>
        <div className={active_style.mediaLeft}>
          <figure className={combineStyles([active_style.image, active_style.is64x64])}> <img alt="Image" src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
          </figure>
        </div>
        <div className={active_style.mediaContent}>
          <div className={active_style.content}>
            <p> <strong> John Smith </strong> <small> @johnsmith </small> <small> 31m </small>
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
              egestas. Nullam condimentum luctus turpis.
            </p>
          </div>
          <nav className={active_style.level}>
            <div className={active_style.levelLeft}>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}> <i className={combineStyles([active_style.fa, active_style.faReply])}> </i> </span>
              </a>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}> <i className={combineStyles([active_style.fa, active_style.faRetweet])}> </i> </span>
              </a>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}> <i className={combineStyles([active_style.fa, active_style.faHeart])}> </i> </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
  )

}

export default BoxTest