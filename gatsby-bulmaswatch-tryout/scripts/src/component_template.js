const component_template = `

import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

function __Component_name__(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    hello_content
  )

}

export default __Component_name__
`.trim()

const component_name = (find_id) => find_id.charAt(0).toUpperCase() + find_id.slice(1)

const get_component = (html_content, find_id) => {

  return component_template
    .replace('hello_content', html_content)
    .replace(/__Component_name__/g, component_name(find_id)+'Test')
}

module.exports={
  component_template,
  get_component,
  component_name
}
