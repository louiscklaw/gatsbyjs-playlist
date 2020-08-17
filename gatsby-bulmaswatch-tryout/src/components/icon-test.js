import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
  faReply,
  faRetweet,
  faHeart,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

function IconTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="icon">
    <h1 className={active_style.title}> Icons </h1>
    <hr />
    <span className={active_style.icon}>
      <FontAwesomeIcon icon={faHome} size="1x" />

    </span>
    <span className={combineStyles([active_style.icon, active_style.isMedium])}>
      <FontAwesomeIcon icon={faHome} style={{fontSize: '1.33em'}} />

    </span>
    <span className={combineStyles([active_style.icon, active_style.isLarge])}>
      <FontAwesomeIcon icon={faHome} size="2x" />

    </span>
  </section>
  )

}

export default IconTest