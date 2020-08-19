import React from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LangContext from '../contexts/LangContext'
import {combineStyles} from '../utils/common'

import FontAwesomeContext from '../contexts/FontAwesomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonTest(props){
  const {active_style} = React.useContext(ThemeContext)

  const {chineseTest, emojiTest, koreaTest, japaneseTest} = React.useContext(LangContext)
  const {chineseTestShort, emojiTestShort, koreaTestShort, japaneseTestShort} = React.useContext(LangContext)

  const fa = React.useContext(FontAwesomeContext)

  return(
    <section className={active_style.section} id="button">
    <h1 className={active_style.title}> Button </h1>

    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <div className={active_style.buttons}>
          <a className={active_style.button}> Button </a>
          <a className={combineStyles([active_style.button, active_style.isWhite])}>
            White
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isLight])}>
            Light
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDark])}>
            Dark
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isBlack])}>
            Black
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isLink])}>
            Link
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isText])}>
            Link
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isPrimary])}>
            Primary
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isInfo])}>
            Info
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess])}>
            Success
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isWarning])}>
            Warning
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger])}>
            Danger
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isWarning, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isFocused])}>
            Focus
            {chineseTestShort()+emojiTestShort()}
          </a>
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
              <FontAwesomeIcon icon={fa.faBold} size="1x" />
            </span>
          </a>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faItalic} size="1x" />
            </span>
          </a>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faUnderline} size="1x" />
            </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faGithub} size="1x" />
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary])}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faTwitter} size="1x" />
            </span>
            <span> Twitter </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faCheck} size="1x" />
            </span>
            <span> Save </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isOutlined])}>
            <span> Delete </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faTimes} size="1x" />

            </span>
          </a>
        </p>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <FontAwesomeIcon icon={fa.faBold} size="1x" />

              </span>
              <span>Bold</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>

                <FontAwesomeIcon icon={fa.faItalic} size="1x" />

              </span>
              <span>Italic</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <FontAwesomeIcon icon={fa.faUnderline} size="1x" />

              </span>
              <span>Underline</span>
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <FontAwesomeIcon icon={fa.faAlignLeft} size="1x" />

              </span>
              <span>Left</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <FontAwesomeIcon icon={fa.faAlignCenter} size="1x" />

              </span>
              <span>Center</span>
            </a>
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}>
                <FontAwesomeIcon icon={fa.faAlignRight} size="1x" />

              </span>
              <span>Right</span>
            </a>
          </p>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isLink, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isRounded])}>
            Rounded
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
      </div>
      <div className={active_style.column}>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}>
            Small
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={active_style.button}> Normal </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            Medium
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            Large
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
        <div className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isOutlined])}>
            Outlined
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isOutlined])}>
            Outlined
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isOutlined])}>
            Outlined
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isOutlined])}>
            Outlined
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isOutlined])}>
            Outlined
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
        <div className={combineStyles([active_style.buttons, active_style.notification, active_style.isPrimary])}>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isInverted, active_style.isOutlined])}>
            Invert
            {chineseTestShort()+emojiTestShort()}
          Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isInverted, active_style.isOutlined])}>
            Invert
            {chineseTestShort()+emojiTestShort()}
          Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isInverted, active_style.isOutlined])}>
            Invert
            {chineseTestShort()+emojiTestShort()}
          Outlined </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isInverted, active_style.isOutlined])}>
            Invert
            {chineseTestShort()+emojiTestShort()}
          Outlined </a>
        </div>
        <div className={combineStyles([active_style.buttons, active_style.notification, active_style.isPrimary])}>
          <a className={combineStyles([active_style.button, active_style.isPrimary, active_style.isInverted])}>
            Inverted
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isInverted])}>
            Inverted
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isSuccess, active_style.isInverted])}>
            Inverted
            {chineseTestShort()+emojiTestShort()}
          </a>
          <a className={combineStyles([active_style.button, active_style.isDanger, active_style.isInverted])}>
            Inverted
            {chineseTestShort()+emojiTestShort()}
          </a>
        </div>
        <p className={active_style.buttons}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faGithub} size="1x" />
            </span>
            <span> GitHub </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faGithub} size="1x" />
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faGithub} size="1x" />
            </span>
            <span> GitHub </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <FontAwesomeIcon icon={fa.faGithub} size="1x" />
            </span>
            <span> GitHub </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isSmall])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faHeading} size="1x" />
            </span>
          </a>
        </p>
        https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
        <p className={active_style.field}>
          <a className={active_style.button}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faHeading} size="1x" />
            </span>
          </a>
          <a className={active_style.button}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faHeading} style={{fontSize:'1.3em'}} />
            </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faHeading} size="1x" />
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={active_style.icon}>
              <FontAwesomeIcon icon={fa.faHeading} style={{fontSize:'1.3em'}} />
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isMedium])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <FontAwesomeIcon icon={fa.faHeading} size="2x" />

            </span>
          </a>
        </p>
        <p className={active_style.field}>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isSmall])}>
              <FontAwesomeIcon icon={fa.faHeading} size="1x" />
            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isMedium])}>
              <FontAwesomeIcon icon={fa.faHeading} style={{fontSize:'1.3em'}} />

            </span>
          </a>
          <a className={combineStyles([active_style.button, active_style.isLarge])}>
            <span className={combineStyles([active_style.icon, active_style.isLarge])}>
              <i className={combineStyles([active_style.fa, active_style.faHeading, active_style.fa2x])}> </i>
              <FontAwesomeIcon icon={fa.faHeading} size="2x" />

            </span>
          </a>
        </p>
      </div>
    </div>
  </section>
  )

}

export default ButtonTest