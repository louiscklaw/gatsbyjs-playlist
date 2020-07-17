import React from 'react'

function TestComponent() {
  React.useEffect(() => {
    console.log("component mount")
  },[])

  React.useEffect(()=>{
    return ()=>{
      console.log('component unmount')
    }
  })

  return(
    <>
      test component
    </>
  )
}

export default TestComponent