import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function MenuTest(props){
  const {active_style} = React.useContext(ThemeContext)

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
              <a>Dashboard</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
          </ul>
          <p className={active_style.menuLabel}>
            Administration
          </p>
          <ul className={active_style.menuList}>
            <li>
              <a>Team Settings</a>
            </li>
            <li>
              <a className={active_style.isActive}>Manage Your Team</a>
              <ul>
                <li>
                  <a>Members</a>
                </li>
                <li>
                  <a>Plugins</a>
                </li>
                <li>
                  <a>Add a member</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Invitations</a>
            </li>
            <li>
              <a>Cloud Storage Environment Settings</a>
            </li>
            <li>
              <a>Authentication</a>
            </li>
          </ul>
          <p className={active_style.menuLabel}>
            Transactions
          </p>
          <ul className={active_style.menuList}>
            <li>
              <a>Payments</a>
            </li>
            <li>
              <a>Transfers</a>
            </li>
            <li>
              <a>Balance</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )

}

export default MenuTest