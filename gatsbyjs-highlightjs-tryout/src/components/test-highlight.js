import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'

import highlight from 'highlight.js'

class TestCodeHighlight extends React.Component{
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    language: PropTypes.string,
    style: PropTypes.object
  }

  componentDidMount () {
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }

  componentDidUpdate () {
    highlight.initHighlighting.called = false
    highlight.highlightBlock(findDOMNode(this.refs.code))
  }

  render(){
    const { children, className, language, style } = this.props
    return(
      <pre
        className={className}
        style={style}
      >
        <code
          className={language}
          ref='code'
        >
          {children}
        </code>
      </pre>
    )
  }
}

export default TestCodeHighlight
