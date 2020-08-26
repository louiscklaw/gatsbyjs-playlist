import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function NavbarMenuHero2Test(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isPrimary])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero2">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero2" className={active_style.navbarMenu}>
              <div className={active_style.navbarEnd}>
                <a className={combineStyles([active_style.navbarItem, active_style.isActive])}>
                  Home
                </a>
                <a className={active_style.navbarItem}>
                  Examples
                </a>
                <a className={active_style.navbarItem}>
                  Documentation
                </a>
                <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
                  <div className={active_style.navbarLink}>
                    More
                  </div>
                  <div id="moreDropdown" className={active_style.navbarDropdown}>
                    <a className={active_style.navbarItem} href="#">
                      <div className={combineStyles([active_style.level, active_style.isMobile])}>
                        <div className={active_style.levelLeft}>
                          <div className={active_style.levelItem}>
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className={active_style.navbarItem}>
                  <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isInverted])}>
                    <span className={active_style.icon}>
                      <i className={combineStyles([active_style.fab, active_style.faGithub])} />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Hero content: will be in the middle */}
      <div className={combineStyles([active_style.hero, active_style.isPrimary])}>
        <div className={active_style.heroBody}>
          <div className={combineStyles([active_style.container, active_style.hasTextCentered])}>
            <h1 className={active_style.title}>
              Title
            </h1>
            <h2 className={active_style.subtitle}>
              Subtitle
            </h2>
          </div>
        </div>
        {/* Hero footer: will stick at the bottom */}
        <div className={active_style.heroFoot}>
          <nav className={active_style.tabs}>
            <div className={active_style.container}>
              <ul>
                <li className={active_style.isActive}>
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )

}

export default NavbarMenuHero2Test