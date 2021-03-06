import React from 'react'

import style from '../../scss/style.module.scss'

const combineStyle = (styles) => styles.join(' ')

function Navbar(props){
  return(
    <nav className={style.navbar} role="navigation" aria-label="main navigation">
      <div className={style.navbarBrand}>
        <a className={style.navbarItem} href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className={[style.navbarBurger, style.burger]} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={style.navbarMenu}>
        <div className={style.navbarStart}>
          <a className={style.navbarItem}>
            Home
          </a>

          <a className={style.navbarItem}>
            Documentation
          </a>

          <div className={combineStyle([style.navbarItem, style.hasDropdown, style.isHoverable])}>
            <a className={style.navbarLink}>
              More
            </a>

            <div className={style.navbarDropdown}>
              <a className={style.navbarItem}> About </a>
              <a className={style.navbarItem}> Jobs </a>
              <a className={style.navbarItem}> Contact </a>

              <hr className={style.navbarDivider} />

              <a className={style.navbarItem}> Report an issue </a>

            </div>
          </div>
        </div>

        <div className={style.navbarEnd}>
          <div className={style.navbarItem}>
            <div className={style.buttons}>
              <a className={combineStyle([style.button, style.isPrimary])}>
                <strong>Sign up</strong>
              </a>
              <a className={combineStyle([style.button, style.isLight])}>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
