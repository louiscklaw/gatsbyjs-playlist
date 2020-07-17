import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import "./my-responsive-grid.css"

const ResponsiveGridLayout = WidthProvider(Responsive);


function TestOnlayoutUpdate(){

  let layout1 =
  [
    {i: 'a', x: 0, y: 0, w: 5, h: 6},
    {i: 'b', x: 0, y: 0, w: 5, h: 6},
    {i: 'c', x: 0, y: 0, w: 5, h: 6}
  ]

  let layout2 =
  [
    {i: 'a', x: 0, y: 0, w: 2, h: 1},
    {i: 'b', x: 0, y: 0, w: 2, h: 1},
    {i: 'c', x: 0, y: 0, w: 2, h: 1}
  ]

  // let layouts = { lg: layout1 }
  let [layouts, setLayouts] = React.useState({lg: layout1})

  let [debug_text, setDebugText] = React.useState()

  let [delayedSave, setDelayedSave] = React.useState(null)
  React.useEffect(()=>{
    setDelayedSave(setTimeout(() => {
      alert('save to firebase')
    }, 3000))

    clearTimeout(delayedSave)

  },[layouts])

  const onLayoutChange = (layout, layouts) => {
    setDebugText( JSON.stringify(layout), JSON.stringify(layouts) )
    console.log('test-onlayoutudpate.js','findme')

    setLayouts({lg: layout})

  }
  const clickButton1 = () => {
    setLayouts( {
      lg: layout1
    } )
  }
  const clickButton2 = () => {
    setLayouts( {
      lg: layout2
    } )
  }

  return (
    <>
      <h2>my-responsive-grid.js</h2>
      <button onClick={clickButton1}>button 1</button>
      <button onClick={clickButton2}>button 2</button>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        onLayoutChange={onLayoutChange}

        breakpoints={{lg: 1200}}
        cols={{lg: 12}}

        rowHeight={30}
        width={1200}
        >

        <div key="a" className="boxa" data-key="a"></div>
        <div key="b" className="boxb" data-key="b"></div>
        <div key="c" className="boxc" data-key="c"></div>

      </ResponsiveGridLayout>
      <h3>debug text</h3>
      {debug_text}
    </>
  )
}


export default TestOnlayoutUpdate