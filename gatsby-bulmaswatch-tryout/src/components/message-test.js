import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function MessageTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="message">
    <h1 className={active_style.title}>Message</h1>
    <hr />
    <div className={combineStyles([active_style.columns, active_style.isMultiline])}>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={active_style.message}>
          <div className={active_style.messageHeader}>
            <p>
              Message
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isPrimary])}>
          <div className={active_style.messageHeader}>
            <p>
              Primary
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isLink])}>
          <div className={active_style.messageHeader}>
            <p>
              Link
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isInfo])}>
          <div className={active_style.messageHeader}>
            <p>
              Info
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isSuccess])}>
          <div className={active_style.messageHeader}>
            <p>
              Success
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isWarning])}>
          <div className={active_style.messageHeader}>
            <p>
              Warning
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isDanger])}>
          <div className={active_style.messageHeader}>
            <p>
              Danger
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isWhite])}>
          <div className={active_style.messageHeader}>
            <p>
              White
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isBlack])}>
          <div className={active_style.messageHeader}>
            <p>
              Black
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isLight])}>
          <div className={active_style.messageHeader}>
            <p>
              Light
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
      <div className={combineStyles([active_style.column, active_style.isHalf])}>
        <article className={combineStyles([active_style.message, active_style.isDark])}>
          <div className={active_style.messageHeader}>
            <p>
              Dark
            </p>
            <button className={active_style.delete} />
          </div>
          <div className={active_style.messageBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
            placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
            dictum
            <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>.
          </div>
        </article>
      </div>
    </div>
  </section>
  )

}

export default MessageTest