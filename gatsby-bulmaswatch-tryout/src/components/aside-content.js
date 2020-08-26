import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function AsideContent(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <aside className={combineStyles([active_style.menu, active_style.section])}>
      <p className={active_style.menuLabel}> Elements </p>
      <ul className={active_style.menuList}>
        <li>
          <a href="#typography"> Typography </a>
        </li>
        <li>
          <a href="#box"> Box </a>
        </li>
        <li>
          <a href="#button"> Button </a>
        </li>
        <li>
          <a href="#content"> Content </a>
        </li>
        <li>
          <a href="#delete"> Delete </a>
        </li>
        <li>
          <a href="#form"> Form </a>
        </li>
        <li>
          <a href="#icon"> Icon </a>
        </li>
        <li>
          <a href="#images"> Images </a>
        </li>
        <li>
          <a href="#notifications"> Notifications </a>
        </li>
        <li>
          <a href="#progress"> Progress bars </a>
        </li>
        <li>
          <a href="#table"> Table </a>
        </li>
        <li>
          <a href="#tag"> Tag </a>
        </li>
      </ul>
      <p className={active_style.menuLabel}> Components </p>
      <ul className={active_style.menuList}>
        <li>
          <a href="#breadcrumb"> Breadcrumb </a>
        </li>
        <li>
          <a href="#dropdown"> Dropdown </a>
        </li>
        <li>
          <a href="#card"> Card </a>
        </li>
        <li>
          <a href="#hero"> Hero </a>
        </li>
        <li>
          <a href="#level"> Level </a>
        </li>
        <li>
          <a href="#media"> Media object </a>
        </li>
        <li>
          <a href="#menu"> Menu </a>
        </li>
        <li>
          <a href="#message"> Message </a>
        </li>
        <li>
          <a href="#modal"> Modal </a>
        </li>
        <li>
          <a href="#navbar"> Navbar </a>
        </li>
        <li>
          <a href="#pagination"> Pagination </a>
        </li>
        <li>
          <a href="#panel"> Panel </a>
        </li>
        <li>
          <a href="#tabs"> Tabs </a>
        </li>
      </ul>
    </aside>

  )
}

export default AsideContent