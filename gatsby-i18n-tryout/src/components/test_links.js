import React from "react"
import { Link } from "gatsby"

function TestLinks(){
  return(
    <ul>
      <li><Link to="/">default</Link></li>
      <li><Link to="/en/">en</Link></li>
      <li><Link to="/zh/">中</Link></li>
      <li><Link to="/zh/page-2">zh/page-2</Link></li>
      <li><Link to="/not_exist/">not exist link</Link></li>
    </ul>
  )
}



export default TestLinks