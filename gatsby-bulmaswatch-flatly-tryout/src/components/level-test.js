import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function LevelTest(props){


  return(
    <section className={active_style.section} id="level">
    <h1 className={active_style.title}>Level</h1>
    <hr />
    {/* Main container */}
    <nav className={active_style.level}>
      {/* Left side */}
      <div className={active_style.levelLeft}>
        <div className={active_style.levelItem}>
          <p className={combineStyles([active_style.subtitle, active_style.is5])}> <strong>123</strong> posts </p>
        </div>
        <div className={active_style.levelItem}>
          <div className={combineStyles([active_style.field, active_style.hasAddons])}>
            <p className={active_style.control}>
              <input className={active_style.input} type="text" placeholder="Find a post" />
            </p>
            <p className={active_style.control}>
              <button className={active_style.button}>
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className={active_style.levelRight}>
        <p className={active_style.levelItem}><strong>All</strong></p>
        <p className={active_style.levelItem}>
          <a>Published</a>
        </p>
        <p className={active_style.levelItem}>
          <a>Drafts</a>
        </p>
        <p className={active_style.levelItem}>
          <a>Deleted</a>
        </p>
        <p className={active_style.levelItem}>
          <a className={combineStyles([active_style.button, active_style.isSuccess])}>New</a>
        </p>
      </div>
    </nav>
    <hr />
    <nav className={active_style.level}>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Tweets</p>
          <p className={active_style.title}>3,456</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Following</p>
          <p className={active_style.title}>123</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Followers</p>
          <p className={active_style.title}>456K</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Likes</p>
          <p className={active_style.title}>789</p>
        </div>
      </div>
    </nav>
    <hr />
    <nav className={active_style.level}>
      <p className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <a className={combineStyles([active_style.link, active_style.isInfo])}>Home</a>
      </p>
      <p className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <a className={combineStyles([active_style.link, active_style.isInfo])}>Menu</a>
      </p>
      <p className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}> <img src="https://bulma.io/images/bulma-type.png" alt="" style={{height: '30px'}} /> </p>
      <p className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <a className={combineStyles([active_style.link, active_style.isInfo])}>Reservations</a>
      </p>
      <p className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <a className={combineStyles([active_style.link, active_style.isInfo])}>Contact</a>
      </p>
    </nav>
    <hr />
    <nav className={combineStyles([active_style.level, active_style.isMobile])}>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Tweets</p>
          <p className={active_style.title}>3,456</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Following</p>
          <p className={active_style.title}>123</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Followers</p>
          <p className={active_style.title}>456K</p>
        </div>
      </div>
      <div className={combineStyles([active_style.levelItem, active_style.hasTextCentered])}>
        <div>
          <p className={active_style.heading}>Likes</p>
          <p className={active_style.title}>789</p>
        </div>
      </div>
    </nav>
    <hr />
  </section>
  )

}

export default LevelTest