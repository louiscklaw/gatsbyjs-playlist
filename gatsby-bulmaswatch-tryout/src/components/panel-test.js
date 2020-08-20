import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function PanelTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="panel">
    <h1 className={active_style.title}>Panel</h1>
    <hr />
    <div className={combineStyles([active_style.column, active_style.is4])}>
      <nav className={active_style.panel}>
        <p className={active_style.panelHeading}> Repositories </p>
        <div className={active_style.panelBlock}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft])}>
            <input className={combineStyles([active_style.input, active_style.isSmall])} type="text" placeholder="Search" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faSearch])} />
            </span>
          </p>
        </div>
        <p className={active_style.panelTabs}>
          <a className={active_style.isActive}>All</a>
          <a>Public</a>
          <a>Private</a>
          <a>Sources</a>
          <a>Forks</a>
        </p>
        <a className={combineStyles([active_style.panelBlock, active_style.isActive])}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faBook])} /> </span> bulma </a>
        <a className={active_style.panelBlock}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faBook])} /> </span> marksheet </a>
        <a className={active_style.panelBlock}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faBook])} /> </span> minireset.css </a>
        <a className={active_style.panelBlock}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faBook])} /> </span> jgthms.github.io </a>
        <a className={active_style.panelBlock}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faCodeBranch])} /> </span> daniellowtw/infBoard </a>
        <a className={active_style.panelBlock}>
          <span className={active_style.panelIcon}> <i className={combineStyles([active_style.fa, active_style.faCodeBranch])} /> </span> mojs </a>
        <label className={active_style.panelBlock}>
          <input type="checkbox" /> Remember me </label>
        <div className={active_style.panelBlock}>
          <button className={combineStyles([active_style.button, active_style.isPrimary, active_style.isOutlined, active_style.isFullwidth])}> Reset all filters </button>
        </div>
      </nav>
    </div>
  </section>
  )

}

export default PanelTest