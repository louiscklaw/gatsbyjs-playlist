import React from 'react'
import {Link} from 'gatsby'

import style from '../scss/desktop.module.scss'

function Page2(){
  return(
    <>
      this is page2
      <Link className={style.button} to="/">back</Link>
    </>
  )
}

export default Page2