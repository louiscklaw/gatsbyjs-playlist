import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function ButtonTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="button">
    <h1 className={active_style.title}> Button </h1>
    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <div className={active_style.buttons}>
          <a className={active_style.button}> Button </a>
          <a className={combineStyles([active_style.button, active_style.isWhite])}> White </a>
          <a className={combineStyles([active_style.button, active_style.isLight])}> Light </a>
          <a className={combineStyles([active_style.button, active_style.isDark])}> Dark </a>
          <a className={combineStyles([active_style.button, active_style.isBlack])}> Black </a>
          <a className={combineStyles([active_style.button, active_style.isLink])}> Link </a>
          <a className={combineStyles([active_style.button, active_style.isText])}> Link </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isPrimary])}> Primary </a>
          <a className={combineStyles([active_style.button, active_style.isInfo])}> Info </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess])}> Success </a>
          <a className={combineStyles([active_style.button, active_style.isWarning])}> Warning </a>
          <a className={combineStyles([active_style.button, active_style.isDanger])}> Danger </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isFocused])}> Focus </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isFocused])}> Focus </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isFocused])}> Focus </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isFocused])}> Focus </a>
          <a className={combineStyles([active_style.button, active_style.isWarning, active_style.isFocused])}> Focus </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isFocused])}> Focus </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isHovered])}> Hover </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isHovered])}> Hover </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isHovered])}> Hover </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isHovered])}> Hover </a>
          <a className={combineStyles([active_style.button, active_style.isWarning, active_style.isHovered])}> Hover </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isHovered])}> Hover </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isActive])}> Active </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isActive])}> Active </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isActive])}> Active </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isActive])}> Active </a>
          <a className={combineStyles([active_style.button, active_style.isWarning, active_style.isActive])}> Active </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isActive])}> Active </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isLoading])}> Loading </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isLoading])}> Loading </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isLoading])}> Loading </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isLoading])}> Loading </a>
          <a className={combineStyles([active_style.button, active_style.isWarning, active_style.isLoading])}> Loading </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isLoading])}> Loading </a>
        </div>
        <p className={active_style.field}>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faBold])}> </i>
            </span>
          </a>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faItalic])}> </i>
            </span>
          </a>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faUnderline])}> </i>
            </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fab, active_style.faGithub])}> </i>
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary])}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fab, active_style.faTwitter])}> </i>
            </span>
            <span> Twitter </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])}> </i>
            </span>
            <span> Save </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isOutlined])}>
            <span> Delete </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faTimes])}> </i>
            </span>
          </a>
        </p>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faBold])} />
              </span>
              <span>Bold</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faItalic])} />
              </span>
              <span>Italic</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faUnderline])} />
              </span>
              <span>Underline</span>
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faAlignLeft])} />
              </span>
              <span>Left</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faAlignCenter])} />
              </span>
              <span>Center</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <i className={combineStyles([active_style.fa, active_style.faAlignRight])} />
              </span>
              <span>Right</span>
            </a>
          </p>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isRounded])}>Rounded</a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isRounded])}>Rounded</a>
          <a className={combineStyles([active_style.button, active_style.isLink, active_style.isRounded])}>Rounded</a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isRounded])}>Rounded</a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isRounded])}>Rounded</a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isRounded])}>Rounded</a>
        </div>
      </div>
      <div className={active_style.column}>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}> Small </a>
          <a className={active_style.button}> Normal </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}> Medium </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}> Large </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isOutlined])}> Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isOutlined])}> Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isOutlined])}> Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isOutlined])}> Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isOutlined])}> Outlined </a>
        </div>
        <div className={combineStyles([active_style.buttons, active_style.notification, active_style.isPrimary])}>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isInverted, active_style.isOutlined])}> Invert Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isInverted, active_style.isOutlined])}> Invert Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isInverted, active_style.isOutlined])}> Invert Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isInverted, active_style.isOutlined])}> Invert Outlined </a>
        </div>
        <div className={combineStyles([active_style.buttons, active_style.notification, active_style.isPrimary])}>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isInverted])}> Inverted </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isInverted])}> Inverted </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isInverted])}> Inverted </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isInverted])}> Inverted </a>
        </div>
        <p className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fab, active_style.faGithub])}> </i>
            </span>
            <span> GitHub </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fab, active_style.faGithub])}> </i>
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fab, active_style.faGithub])}> </i>
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <i className={combineStyles([active_style.fab, active_style.faGithub])}> </i>
            </span>
            <span> GitHub </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading])}> </i>
            </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading])}> </i>
            </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.faLg])}> </i>
            </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading])}> </i>
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={active_style.icon}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.faLg])}> </i>
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.fa2x])}> </i>
            </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading])}> </i>
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.faLg])}> </i>
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isLarge])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.fa2x])}> </i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </section>
  )

}

export default ButtonTest