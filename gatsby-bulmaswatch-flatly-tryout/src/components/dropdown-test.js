import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function DropdownTest(props){


  return(
    <section className={active_style.section} id="dropdown">
    <h1 className={active_style.title}>Dropdown</h1>
    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <div className={combineStyles([active_style.dropdown, active_style.isActive])}>
          <div className={active_style.dropdownTrigger}>
            <button className={active_style.button} aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Dropdown button</span>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faAngleDown])} aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className={active_style.dropdownMenu} id="dropdown-menu" role="menu">
            <div className={active_style.dropdownContent}>
              <a href="#" className={active_style.dropdownItem}>
                Dropdown item
              </a>
              <a className={active_style.dropdownItem}>
                Other dropdown item
              </a>
              <a href="#" className={combineStyles([active_style.dropdownItem, active_style.isActive])}>
                Active dropdown item
              </a>
              <a href="#" className={active_style.dropdownItem}>
                Other dropdown item
              </a>
              <hr className={active_style.dropdownDivider} />
              <a href="#" className={active_style.dropdownItem}>
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={active_style.column}>
        <div className={combineStyles([active_style.dropdown, active_style.isActive])}>
          <div className={active_style.dropdownTrigger}>
            <button className={combineStyles([active_style.button, active_style.isInfo])} aria-haspopup="true" aria-controls="dropdown-menu2">
              <span>Content</span>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faAngleDown])} aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className={active_style.dropdownMenu} id="dropdown-menu2" role="menu">
            <div className={active_style.dropdownContent}>
              <div className={active_style.dropdownItem}>
                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
              </div>
              <hr className={active_style.dropdownDivider} />
              <div className={active_style.dropdownItem}>
                <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
              </div>
              <hr className={active_style.dropdownDivider} />
              <a href="#" className={active_style.dropdownItem}>
                This is a link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )

}

export default DropdownTest