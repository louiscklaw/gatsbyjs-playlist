import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function TagTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="tag">
      <h1 className={active_style.title}> Tag </h1>
      <hr />
      <div className={active_style.tags}>

        <span className={combineStyles([active_style.tag, active_style.isPrimary])}> Primary </span>

        <span className={combineStyles([active_style.tag, active_style.isLink])}> Link </span>

        <span className={combineStyles([active_style.tag, active_style.isInfo])}> Info </span>

        <span className={combineStyles([active_style.tag, active_style.isSuccess])}> Success </span>

        <span className={combineStyles([active_style.tag, active_style.isWarning])}> Warning </span>

        <span className={combineStyles([active_style.tag, active_style.isDanger])}> Danger </span>

        <span className={combineStyles([active_style.tag, active_style.isWhite])}> White </span>

        <span className={combineStyles([active_style.tag, active_style.isBlack])}> Black </span>

        <span className={combineStyles([active_style.tag, active_style.isLight])}> Light </span>

        <span className={combineStyles([active_style.tag, active_style.isDark])}> Dark </span>

        <span className={combineStyles([active_style.tag, active_style.isPrimary, active_style.isMedium])}> Medium </span>
        <span className={combineStyles([active_style.tag, active_style.isInfo, active_style.isLarge])}> Large </span>
        <span className={combineStyles([active_style.tag, active_style.isSuccess])}> Bar
          <button className={combineStyles([active_style.delete, active_style.isSmall])}> </button>
        </span>
        <span className={combineStyles([active_style.tag, active_style.isWarning, active_style.isMedium])}> Hello
          <button className={combineStyles([active_style.delete, active_style.isSmall])}> </button>
        </span>
        <span className={combineStyles([active_style.tag, active_style.isDanger, active_style.isLarge])}> World
          <button className={active_style.delete}> </button>
        </span>
      </div>
      <div className={combineStyles([active_style.field, active_style.isGrouped, active_style.isGroupedMultiline])}>
        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <span className={combineStyles([active_style.tag, active_style.isDark])}>npm</span>
            <span className={combineStyles([active_style.tag, active_style.isInfo])}>0.5.0</span>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <span className={combineStyles([active_style.tag, active_style.isDark])}>build</span>
            <span className={combineStyles([active_style.tag, active_style.isSuccess])}>passing</span>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <span className={combineStyles([active_style.tag, active_style.isDark])}>chat</span>
            <span className={combineStyles([active_style.tag, active_style.isPrimary])}>on gitter</span>
          </div>
        </div>
      </div>
      <div className={combineStyles([active_style.field, active_style.isGrouped, active_style.isGroupedMultiline])}>
        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Technology</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>CSS</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Flexbox</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Web Design</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Open Source</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Community</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>

        <div className={active_style.control}>
          <div className={combineStyles([active_style.tags, active_style.hasAddons])}>
            <a className={combineStyles([active_style.tag, active_style.isLink])}>Documentation</a>
            <a className={combineStyles([active_style.tag, active_style.isDelete])}></a>
          </div>
        </div>
      </div>
    </section>
  )

}

export default TagTest