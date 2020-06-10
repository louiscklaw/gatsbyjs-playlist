import React from "react"
import PropTypes from "prop-types"

import style from '../scss/desktop.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={style.test}>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
