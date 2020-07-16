import React from "react"

function PurpleBorder(props)
  {
    return (
      <div>
        {JSON.stringify({'a':'b'})}
        {props.children}
      </div>
    )
  }



export default PurpleBorder