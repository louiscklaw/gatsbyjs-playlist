import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import {combineStyles} from '../utils/common'

function DeleteTest(props){
  const {active_style} = React.useContext(ThemeContext)
  const {
    chineseTest,
    emojiTest,
    koreaTest,
    japaneseTest,

    chineseTestShort,
    emojiTestShort,
    koreaTestShort,
    japaneseTestShort
  } = React.useContext( LangContext )

  return(
    <section className={active_style.section} id="delete">
    <h1 className={active_style.title}> Delete </h1>
    <hr />
    <div className={active_style.block}>
      <span className={combineStyles([active_style.tag, active_style.isSuccess])}>
        Hello World
        <button className={combineStyles([active_style.delete, active_style.isSmall])}> </button>
      </span>
      <span style={{width: '0.5em'}} > </span>

      <a className={combineStyles([active_style.delete, active_style.isSmall])}> </a>
      <span style={{width: '0.5em'}} > </span>

      <a className={active_style.delete}> </a>
      <span style={{width: '0.5em'}} > </span>

      <a className={combineStyles([active_style.delete, active_style.isMedium])}> </a>
      <span style={{width: '0.5em'}} > </span>

      <a className={combineStyles([active_style.delete, active_style.isLarge])}> </a>
      <span style={{width: '0.5em'}} > </span>

    </div>

    <div className={combineStyles([active_style.notification, active_style.isDanger])}>
      <button className={active_style.delete}> </button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
    </div>

    <article className={combineStyles([active_style.message, active_style.isInfo])}>

      <div className={active_style.messageHeader}> Info
        <button className={active_style.delete}> </button>
      </div>

      <div className={active_style.messageBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus
        quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
        dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
        sem eget, facilisis sodales sem.
        <br />
        <br />
        {chineseTest()}<br/>
        {emojiTest()}<br/>
        {japaneseTest()}<br/>
        {koreaTest()}<br/>
      </div>
    </article>

  </section>
  )

}

export default DeleteTest