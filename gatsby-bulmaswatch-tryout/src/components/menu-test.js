import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import {combineStyles} from '../utils/common'


function MenuTest(props){
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
    <section className={active_style.section} id="menu">
    <h1 className={active_style.title}>Menu</h1>
    <hr />
    <div className={combineStyles([active_style.column, active_style.is3])}>
      <aside className={active_style.menu}>
        <p className={active_style.menuLabel}>
          General
        </p>
        <ul className={active_style.menuList}>
          <li>
            <a>Dashboard{chineseTestShort()}</a>
          </li>
          <li>
            <a>Customers{chineseTestShort()}</a>
          </li>
        </ul>
        <p className={active_style.menuLabel}>
          Administration
        </p>
        <ul className={active_style.menuList}>
          <li>
            <a>Team Settings{chineseTestShort()}</a>
          </li>
          <li>
            <a className={active_style.isActive}>Manage Your Team{chineseTestShort()}</a>
            <ul>
              <li>
                <a>Members{chineseTestShort()}</a>
              </li>
              <li>
                <a>Plugins{chineseTestShort()}</a>
              </li>
              <li>
                <a>Add a member{chineseTestShort()}</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Invitations{chineseTestShort()}</a>
          </li>
          <li>
            <a>Cloud Storage Environment Settings{chineseTestShort()}</a>
          </li>
          <li>
            <a>Authentication{chineseTestShort()}</a>
          </li>
        </ul>
        <p className={active_style.menuLabel}>
          Transactions
        </p>
        <ul className={active_style.menuList}>
          <li>
            <a>Payments{chineseTestShort()}</a>
          </li>
          <li>
            <a>Transfers{chineseTestShort()}</a>
          </li>
          <li>
            <a>Balance{chineseTestShort()}</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
  )

}

export default MenuTest