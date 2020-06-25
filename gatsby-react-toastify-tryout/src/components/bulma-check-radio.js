import React from 'react'

import style from '../scss/desktop.module.scss'

function BulmaCheckRadio(){
  return(
    <>
      <div className={style.field}>
        <input className={style.isCheckradio} id="exampleCheckbox" type="checkbox" name="exampleCheckbox" checked="checked" />
        <label for="exampleCheckbox">Check me</label>
      </div>
      <div className={style.field}>
        <input className={style.isCheckradio} id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked" />
        <label for="exampleRadioInline1">Option 1</label>
        <input className={style.isCheckradio} id="exampleRadioInline2" type="radio" name="exampleRadioInline" />
        <label for="exampleRadioInline2">Option 2</label>
      </div>
    </>
  )
}

export default BulmaCheckRadio