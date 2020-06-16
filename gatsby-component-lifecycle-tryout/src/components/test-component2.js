import React from 'react'

function TestComponent2() {
  React.useEffect(() => {
    function mount(){
      console.log("component2 mount")
    }

    mount()

    return function clean(){
      console.log('clean')
    }
  });

  return(
    <>
      test component2
    </>
  )
}

export default TestComponent2