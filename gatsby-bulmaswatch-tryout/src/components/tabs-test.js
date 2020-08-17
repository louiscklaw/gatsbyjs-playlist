import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAtom,
  faBus,
  faCheck,
  faCloudUploadAlt,
  faCoffee,
  faCoins,
  faDice,
  faEnvelop,
  faEnvelope,
  faFileAlt,
  faFilm,
  faImage,
  faLock,
  faMusic,
  faUpload,
  faUser,
  faWarning,
} from '@fortawesome/free-solid-svg-icons'

function TabsTest(props){
  const {active_style} = React.useContext(ThemeContext)

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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
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
            <span className={active_style.icon}><FontAwesomeIcon icon={faAngleLeft} size="1x" /></span>
            <span>Left</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={faAngleUp} size="1x" /></span>
            <span>Up</span>
          </a>
        </li>
        <li>
          <a>
            <span>Right</span>
            <span className={active_style.icon}><FontAwesomeIcon icon={faAngleRight} size="1x" /></span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isCentered, active_style.isBoxed])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
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
            <span className={active_style.icon}><FontAwesomeIcon icon={faImage} size="1x" /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={faMusic} size="1x" /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={faFilm} size="1x" /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><FontAwesomeIcon icon={faFileAlt} size="1x" /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
  )

}

export default TabsTest