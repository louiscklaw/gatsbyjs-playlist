import React from 'react'
import {Link} from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faBug,
  faPalette,
  faQuestionCircle,
  faRoad,
  faCodeBranch,
  faClock,
  faBook,
  faPaste
} from '@fortawesome/free-brands-svg-icons'

import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../../utils/common'
const combineStyles = (styles) => styles.join(' ')


function __ComponentTest__(props){
  const {active_style, rotateStyle} = React.useContext(ThemeContext)

  return(
    <>
      <component_html_content>
    </>
  )
}

export default __ComponentTest__
