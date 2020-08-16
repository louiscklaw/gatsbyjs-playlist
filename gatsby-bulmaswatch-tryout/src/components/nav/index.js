import React from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const combineStyle = (styles) => styles.join(' ')

function Navbar(props){
  const {active_style, rotateStyle, lookUpStyleName} = React.useContext(ThemeContext)

  return(
    <nav className={active_style.navbar} role="navigation" aria-label="main navigation">
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className={[active_style.navbarBurger, active_style.burger]} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem}>
            Home
          </a>

          <a className={active_style.navbarItem}>
            Documentation
          </a>

          <a className={active_style.navbarItem} href="//jenil.github.io/bulmaswatch/" target="_blank">
            Bulmaswatch
          </a>

          <div className={combineStyle([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink}>
              More
            </a>

            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem}> About </a>
              <a className={active_style.navbarItem}> Jobs </a>
              <a className={active_style.navbarItem}> Contact </a>

              <hr className={active_style.navbarDivider} />

              <a className={active_style.navbarItem}> Report an issue </a>

            </div>
          </div>
        </div>

        <div className={active_style.navbarEnd}>
          <div className={active_style.navbarItem}>
            <div className={active_style.buttons}>
              <button
                className={combineStyle([active_style.button, active_style.isLight])}
                onClick={rotateStyle}
              >
                {JSON.stringify(lookUpStyleName(active_style))}next theme
              </button>
              <a className={combineStyle([active_style.button, active_style.isPrimary])}>
                <strong>Sign up</strong>
              </a>
              <a className={combineStyle([active_style.button, active_style.isLight])}>
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
