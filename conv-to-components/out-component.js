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
      {/* card */}
<div className={active_style.card}>
  <div className={active_style.cardImage}>
    <figure className={active_style.is4by3} style={{textAlign: 'center'}}>
      <div id="canvas-holder" style={{width: '90%', margin: 'auto'}}>
        <canvas id="chart-area-unit_test" />
      </div>
    </figure>
  </div>
  <div className={active_style.cardContent}>
    <div className={active_style.media}>
      <div className={active_style.mediaContent}>
        <p className={combineStyles([active_style.title, active_style.is4])}>
          Unit test
          <FontAwesomeIcon icon={faPaste} />
        </p>
      </div>
    </div>
    <div className={active_style.content}>
      <p className={active_style.test_description_unit_test} />
      <table>
        <thead>
          <tr>
            <td>Passed</td>
            <td>Failed</td>
            <td>In progress</td>
            <td>Error</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>2</td>
            <td>13</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      <p>time spent: 1hr30min</p>
    </div>
  </div>
</div>
{/* card */}

    </>
  )
}

export default __ComponentTest__
