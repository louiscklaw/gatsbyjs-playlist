import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function NotificationsTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="notifications">
      <h1 className={active_style.title}> Notifications </h1>
      <hr />
      <div className={combineStyles([active_style.columns, active_style.isMultiline])}>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isPrimary])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isLink])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isInfo])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isSuccess])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isWarning])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

        <div className={combineStyles([active_style.column, active_style.isHalf])}>
          <div className={combineStyles([active_style.notification, active_style.isDanger])}>
            <button className={active_style.delete}> </button> Lorem ipsum dolor sit amet,
            <a href="#">consectetur</a> adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
        </div>

      </div>
    </section>
  )

}

export default NotificationsTest