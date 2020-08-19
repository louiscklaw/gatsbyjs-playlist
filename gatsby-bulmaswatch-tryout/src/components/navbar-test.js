import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import FontAwesomeContext from '../contexts/FontAwesomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {combineStyles} from '../utils/common'

function NavbarTest(props){
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

  const fa = React.useContext(FontAwesomeContext)

  return(
    <section className={active_style.section} id="navbar">
    <h1 className={active_style.title}>Navbar</h1>
    <hr />
    <nav className={active_style.navbar}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample1">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample1" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>
                    0.4.3
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls){chineseTestShort()}</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  {chineseTestShort()}</p>
                  <p>Metro UI CSS grid with Bulma tiles{chineseTestShort()}</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                    {chineseTestShort()}
                  </p>
                  <p>Blog launched, new responsive columns, new helpers{chineseTestShort()}</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />

                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>Side projects to enhance Bulma {chineseTestShort()}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isPrimary])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample2">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample2" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isLink])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample3">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample3" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isInfo])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample4">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample4" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isSuccess])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample5">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample5" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isWarning])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample6">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample6" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isDanger])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample7">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample7" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isWhite])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample8">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample8" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isBlack])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample9">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample9" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isLight])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample10">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample10" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <nav className={combineStyles([active_style.navbar, active_style.isDark])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExample11">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExample11" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Modifiers {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Grid {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Form {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Elements {chineseTestShort()}
              </a>
              <a className={combineStyles([active_style.navbarItem, active_style.isActive])} href="#">
                Components {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Layout {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={active_style.navbarLink} href="#blog/">
              Blog {chineseTestShort()}
            </a>
            <div id="blogDropdown" className={active_style.navbarDropdown} data-style="width: 18rem;">
              <a className={active_style.navbarItem} href="/2017/03/10/new-field-element/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>10 Mar 2017</small>
                  </p>
                  <p>New field element (for better controls)</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>11 Apr 2016</small>
                  </p>
                  <p>Metro UI CSS grid with Bulma tiles</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                <div className={active_style.navbarContent}>
                  <p>
                    <small className={active_style.hasTextInfo}>09 Feb 2016</small>
                  </p>
                  <p>Blog launched, new responsive columns, new helpers</p>
                </div>
              </a>
              <a className={active_style.navbarItem} href="#blog/">
                More posts
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div className={active_style.navbarContent}>
                  <div className={combineStyles([active_style.level, active_style.isMobile])}>
                    <div className={active_style.levelLeft}>
                      <div className={active_style.levelItem}>
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className={active_style.levelRight}>
                      <div className={active_style.levelItem}>
                        <a className={combineStyles([active_style.button, active_style.isRss, active_style.isSmall])} href="#atom.xml">
                          <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                            <FontAwesomeIcon icon={fa.faRss} size="1x" />
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <div className={active_style.navbarLink}>
              More {chineseTestShort()}
            </div>
            <div id="moreDropdown" className={active_style.navbarDropdown}>
              <a className={active_style.navbarItem} href="#extensions/">
                <div className={combineStyles([active_style.level, active_style.isMobile])}>
                  <div className={active_style.levelLeft}>
                    <div className={active_style.levelItem}>
                      <p>
                        <strong>Extensions {chineseTestShort()}</strong>
                        <br />
                        <small>
                          Side projects to enhance Bulma
                          {chineseTest()}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a className={active_style.navbarItem} href="//twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <h2 className={active_style.subtitle}>Transparent</h2>
    <nav className={combineStyles([active_style.navbar, active_style.isTransparent])}>
      <div className={active_style.navbarBrand}>
        <a className={active_style.navbarItem} href="//bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//github.com/jgthms/bulma" target="_blank">
          <span className={active_style.icon} style={{color: '#333'}}>
            <FontAwesomeIcon icon={fa.faGithub} size="1x" />
          </span>
        </a>
        <a className={combineStyles([active_style.navbarItem, active_style.isHiddenDesktop])} href="//twitter.com/jgthms" target="_blank">
          <span className={active_style.icon} style={{color: '#55acee'}}>
            <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
          </span>
        </a>
        <div className={combineStyles([active_style.navbarBurger, active_style.burger])} data-target="navMenuExamplet">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenuExamplet" className={active_style.navbarMenu}>
        <div className={active_style.navbarStart}>
          <a className={active_style.navbarItem} href="#">
            Home {chineseTestShort()}
          </a>
          <div className={combineStyles([active_style.navbarItem, active_style.hasDropdown, active_style.isHoverable])}>
            <a className={combineStyles([active_style.navbarLink, active_style.isActive])} href="#">
              Docs {chineseTestShort()}
            </a>
            <div className={combineStyles([active_style.navbarDropdown, active_style.isBoxed])}>
              <a className={active_style.navbarItem} href="#">
                Overview {chineseTestShort()}
              </a>
              <a className={active_style.navbarItem} href="#">
                Discover {chineseTestShort()}
              </a>
              <hr className={active_style.navbarDivider} />
              <div className={active_style.navbarItem}>
                <div>version
                  <p className={combineStyles([active_style.hasTextInfo, active_style.isSize6Desktop])}>0.4.3</p> {chineseTestShort()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={active_style.navbarEnd}>
          <a className={active_style.navbarItem} href="//github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <div className={active_style.navbarItem}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={active_style.control}>
                <a id="twitter" className={active_style.button}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={active_style.control}>
                <a className={combineStyles([active_style.button, active_style.isPrimary])} href="//github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span className={active_style.icon}>
                    <FontAwesomeIcon icon={fa.faDownload} size="1x" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
  )

}

export default NavbarTest