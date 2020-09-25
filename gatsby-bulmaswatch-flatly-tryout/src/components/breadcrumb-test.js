import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'


import {combineStyles} from '../utils/common'

function BreadcrumbTest(props){
  return(
    <section className={active_style.section} id="breadcrumb">
    <h1 className={active_style.title}>Breadcrumb</h1>
    <hr />
    <nav className={active_style.breadcrumb}>
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className={active_style.isActive}>
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  </section>
  )

}

export default BreadcrumbTest