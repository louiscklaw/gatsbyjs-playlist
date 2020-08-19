import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import FontAwesomeContext from '../contexts/FontAwesomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {combineStyles} from '../utils/common'


function BoxTest(props){
  const {active_style} = React.useContext(ThemeContext)
  const {chineseTest, emojiTest, koreaTest, japaneseTest} = React.useContext(LangContext)
  const {chineseTestShort, emojiTestShort, koreaTestShort, japaneseTestShort} = React.useContext(LangContext)

  const {faHeart, faRetweet, faReply} = React.useContext(FontAwesomeContext)

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
              {chineseTest()+emojiTest()+japaneseTest()+koreaTest()}
            </p>
          </div>
          <nav className={active_style.level}>
            <div className={active_style.levelLeft}>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                  <FontAwesomeIcon icon={faReply} size="1x" />

                </span>
                {chineseTestShort()+emojiTestShort()}
              </a>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                  <FontAwesomeIcon icon={faRetweet} size="1x" />
                </span>
                {chineseTestShort()+emojiTestShort()}
              </a>
              <a className={active_style.levelItem}>
                <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                  <FontAwesomeIcon icon={faHeart} size="1x" />
                </span>
                {chineseTestShort()+emojiTestShort()}
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