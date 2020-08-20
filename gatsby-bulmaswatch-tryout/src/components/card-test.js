import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function CardTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="card">
    <h1 className={active_style.title}>Cards</h1>
    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <div className={active_style.card}>
          <div className={active_style.cardImage}>
            <figure className={combineStyles([active_style.image, active_style.is4by3])}> <img src="https://source.unsplash.com/random/800x600" alt="Image" /> </figure>
          </div>
          <div className={active_style.cardContent}>
            <div className={active_style.media}>
              <div className={active_style.mediaLeft}>
                <figure className={active_style.image} style={{height: '40px', width: '40px'}}> <img src="https://source.unsplash.com/random/96x96" alt="Image" /> </figure>
              </div>
              <div className={active_style.mediaContent}>
                <p className={combineStyles([active_style.title, active_style.is4])}>John Smith</p>
                <p className={combineStyles([active_style.subtitle, active_style.is6])}>@johnsmith</p>
              </div>
            </div>
            <div className={active_style.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a>#css</a>
              <a>#responsive</a>
              <br /> <small>11:09 PM - 1 Jan 2016</small> </div>
          </div>
        </div>
      </div>
      <div className={active_style.column}>
        <div className={active_style.card}>
          <header className={active_style.cardHeader}>
            <p className={active_style.cardHeaderTitle}> Component </p>
            <a className={active_style.cardHeaderIcon}>
              <span className={active_style.icon}> <i className={combineStyles([active_style.fa, active_style.faAngleDown])} /> </span>
            </a>
          </header>
          <div className={active_style.cardContent}>
            <div className={active_style.content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a>#css</a>
              <a>#responsive</a>
              <br /> <small>11:09 PM - 1 Jan 2016</small> </div>
          </div>
          <footer className={active_style.cardFooter}>
            <a className={active_style.cardFooterItem}>Save</a>
            <a className={active_style.cardFooterItem}>Edit</a>
            <a className={active_style.cardFooterItem}>Delete</a>
          </footer>
        </div>
      </div>
    </div>
  </section>
  )

}

export default CardTest