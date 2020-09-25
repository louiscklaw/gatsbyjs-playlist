import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function TabsTest(props){


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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
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
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
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
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faAngleLeft])} /></span>
            <span>Left</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faAngleUp])} /></span>
            <span>Up</span>
          </a>
        </li>
        <li>
          <a>
            <span>Right</span>
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faAngleRight])} /></span>
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={combineStyles([active_style.tabs, active_style.isCentered, active_style.isBoxed])}>
      <ul>
        <li className={active_style.isActive}>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
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
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faImage])} /></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faMusic])} /></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faFilm])} /></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span className={active_style.icon}><i className={combineStyles([active_style.fa, active_style.faFileAlt])} /></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
  )

}

export default TabsTest