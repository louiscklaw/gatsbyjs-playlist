import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function HeroTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="hero">
    <h1 className={active_style.title}>Hero</h1>
    <hr />
    <section>
      <div>
        <nav className={active_style.navbar}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero1">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero1" className={active_style.navbarMenu}>
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
      <div className={active_style.hero}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isPrimary])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isLink])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero3">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero3" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isLink])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isInfo])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero4">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero4" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isInfo])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isSuccess])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero5">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero5" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isSuccess])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isWarning])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero6">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero6" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isWarning])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isDanger])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero7">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero7" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isDanger])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isWhite])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero8">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero8" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isWhite])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isBlack])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero9">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero9" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isBlack])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isLight])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero10">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero10" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isLight])}>
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
    <br />
    <section>
      <div>
        <nav className={combineStyles([active_style.navbar, active_style.isDark])}>
          <div className={active_style.container}>
            <div className={active_style.navbarBrand}>
              <a className={active_style.navbarItem}>
                <img src="//bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navbarMenuHero11">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero11" className={active_style.navbarMenu}>
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
      <div className={combineStyles([active_style.hero, active_style.isDark])}>
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
    <br />
  </section>
  )

}

export default HeroTest