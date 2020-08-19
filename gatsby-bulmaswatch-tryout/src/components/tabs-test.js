import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'

import FontAwesomeContext from '../contexts/FontAwesomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {combineStyles} from '../utils/common'


function TabsTest(props){
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
    <section className={active_style.section} id="tabs">
    <h1 className={active_style.title}>Tabs</h1>
    <hr />
    <div className={active_style.tabs}>
      <ul>
        <li className={active_style.isActive}>
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isCentered])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isSmall])}>
      <ul>
        <li className={active_style.isActive}>
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isMedium])}>
      <ul>
        <li className={active_style.isActive}>
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isLarge])}>
      <ul>
        <li className={active_style.isActive}>
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isBoxed])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isToggle])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isToggle, active_style.isToggleRounded])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isFullwidth])}>
      <ul>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faAngleLeft} size="1x" /></span>
            <span>Left</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faAngleUp} size="1x" /></span>
            <span>Up</span>
          </a>
        </li>
        <li>
          <a>
            <span>Right</span>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faAngleRight} size="1x" /></span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isCentered, active_style.isBoxed])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isToggle, active_style.isFullwidth, active_style.isLarge])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={fa.faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
  )

}

export default TabsTest