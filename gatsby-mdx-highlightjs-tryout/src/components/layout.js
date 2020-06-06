import React from 'react'
import { MDXProvider } from "@mdx-js/react"

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{color: 'tomato'}} {...props} />
}

export default function Layout(props) {
  return (
    <>
      {props.children}
    </>
  )
}
