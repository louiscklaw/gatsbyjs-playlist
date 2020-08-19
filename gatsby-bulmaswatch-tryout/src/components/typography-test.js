import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import {combineStyles} from '../utils/common'

function TypographyTest(props){
  const {active_style} = React.useContext(ThemeContext)
  const {chineseTest, emojiTest, koreaTest, japaneseTest} = React.useContext(LangContext)
  const {chineseTestTitle, emojiTestTitle, koreaTestTitle, japaneseTestTitle} = React.useContext(LangContext)

  return(
    <section className={active_style.section} id="typography">
    <h1 className={active_style.title}> Typography </h1>
    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <h1 className={combineStyles([active_style.title, active_style.is1])}>
          Title 1
          {chineseTestTitle()+emojiTestTitle()}
        </h1>
        <h2 className={combineStyles([active_style.title, active_style.is2])}>
          Title 2
          {chineseTestTitle()+emojiTestTitle()}
        </h2>
        <h3 className={combineStyles([active_style.title, active_style.is3])}>
          Title 3
          {chineseTestTitle()+emojiTestTitle()}
        </h3>
        <h4 className={combineStyles([active_style.title, active_style.is4])}>
          Title 4
          {chineseTestTitle()+emojiTestTitle()}
        </h4>
        <h5 className={combineStyles([active_style.title, active_style.is5])}>
          Title 5
          {chineseTestTitle()+emojiTestTitle()}
        </h5>
        <h6 className={combineStyles([active_style.title, active_style.is6])}>
          Title 6
          {chineseTestTitle()+emojiTestTitle()}
        </h6>
      </div>
      <div className={active_style.column}>
        <h1 className={combineStyles([active_style.subtitle, active_style.is1])}>
          Subtitle 1
          {chineseTestTitle()+emojiTestTitle()}
        </h1>
        <h2 className={combineStyles([active_style.subtitle, active_style.is2])}>
          Subtitle 2
          {chineseTestTitle()+emojiTestTitle()}
        </h2>
        <h3 className={combineStyles([active_style.subtitle, active_style.is3])}>
          Subtitle 3
          {chineseTestTitle()+emojiTestTitle()}
        </h3>
        <h4 className={combineStyles([active_style.subtitle, active_style.is4])}>
          Subtitle 4
          {chineseTestTitle()+emojiTestTitle()}
        </h4>
        <h5 className={combineStyles([active_style.subtitle, active_style.is5])}>
          Subtitle 5
          {chineseTestTitle()+emojiTestTitle()}
        </h5>
        <h6 className={combineStyles([active_style.subtitle, active_style.is6])}>
          Subtitle 6
          {chineseTestTitle()+emojiTestTitle()}
        </h6>
      </div>
      <div className={active_style.column}>
        <h1 className={active_style.title}>
          Title
          {chineseTestTitle()+emojiTestTitle()}
        </h1>
        <h2 className={active_style.subtitle}>
          Subtitle
          {chineseTestTitle()+emojiTestTitle()}
        </h2>
        <p className={combineStyles([active_style.title, active_style.is1])}>
          Title 1
          {chineseTestTitle()+emojiTestTitle()}
        </p>
        <p className={combineStyles([active_style.subtitle, active_style.is3])}>
          Subtitle 3
          {chineseTestTitle()+emojiTestTitle()}
        </p>
        <p className={combineStyles([active_style.title, active_style.is2])}>
          Title 2
          {chineseTestTitle()+emojiTestTitle()}
        </p>
        <p className={combineStyles([active_style.subtitle, active_style.is4])}>
          Subtitle 4
          {chineseTestTitle()+emojiTestTitle()}
        </p>
        <p className={combineStyles([active_style.title, active_style.is3])}>
          Title 3
          {chineseTestTitle()+emojiTestTitle()}
        </p>
        <p className={combineStyles([active_style.subtitle, active_style.is5])}>
          Subtitle 5
          {chineseTestTitle()+emojiTestTitle()}
        </p>
      </div>
    </div>
  </section>
  )

}

export default TypographyTest