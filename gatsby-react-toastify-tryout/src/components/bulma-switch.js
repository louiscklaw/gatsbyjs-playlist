import React from 'react'

import style from '../scss/desktop.module.scss'

function BulmaSwitch(){
  return(
    <>
      <div className={style.field}>

        <input id="switchExample" type="checkbox" name="switchExample" className={style.switch} checked="checked" />
        <label for="switchExample">Switch example</label>

        <input id="switchExample1" type="checkbox" name="switchExample1" className={style.switch}  />
        <label for="switchExample1">Switch example</label>


      </div>
    </>
  )
}

export default BulmaSwitch