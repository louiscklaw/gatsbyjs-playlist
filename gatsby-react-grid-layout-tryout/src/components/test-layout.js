import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import YoutubeTestCell from './youtube-test-cell'

import "./my-responsive-grid.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

function TestLayout(){

  let layout =
  [
    {i: 'main', x: 0, y: 0, w: 6, h: 12},
    {i: 'preview_0', x: 6, y: 0, w: 3, h: 6},
    {i: 'preview_1', x: 9, y: 0, w: 3, h: 6},
    {i: 'preview_2', x: 6, y: 3, w: 3, h: 6},
    {i: 'preview_3', x: 9, y: 3, w: 3, h: 6},
    {i: 'preview_4', x: 6, y: 6, w: 3, h: 6},
    {i: 'preview_5', x: 9, y: 6, w: 3, h: 6},
  ]

  let layout2 =
  [
    {i: 'main', x: 0, y: 0, w: 6, h: 9},
    {i: 'preview_0', x: 0, y: 0, w: 3, h: 4},
    {i: 'preview_1', x: 3, y: 0, w: 3, h: 4},
    {i: 'preview_2', x: 0, y: 3, w: 3, h: 4},
    {i: 'preview_3', x: 3, y: 3, w: 3, h: 4},
    {i: 'preview_4', x: 0, y: 6, w: 3, h: 4},
    {i: 'preview_5', x: 3, y: 6, w: 3, h: 4},
  ]

  let layouts = {
    lg: layout,
    sm: layout2
  }

  let [debug_text, setDebugText] = React.useState()

  const onLayoutChange = (layout, layouts) => {
    // setDebugText(
    //   JSON.stringify(layout),
    //   JSON.stringify(layouts)
    //   )
  }

  const onBreakpointChange = (bp) => {
    // setDebugText(
    //   bp
    // )
  }

  React.useEffect(()=>{
    setDebugText(document.body.clientWidth)
  })

  return (
    <>
      <h2>test-layout.js</h2>
      <ResponsiveGridLayout
        className="layout"

        breakpoints={{lg: 1200, sm: 768}}
        layout={layout}
        layouts={layouts}
        cols={{lg: 12, sm: 6}}

        rowHeight={30}

        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        >

        <div key="main" className="boxa" data-key="a">
          <YoutubeTestCell />
        </div>
        <div key="preview_0" className="boxc" data-key="0">
          <YoutubeTestCell />
        </div>
        <div key="preview_1" className="boxc" data-key="1">
          <YoutubeTestCell />
        </div>
        <div key="preview_2" className="boxc" data-key="2">
          <YoutubeTestCell />
        </div>
        <div key="preview_3" className="boxc" data-key="3">
          <YoutubeTestCell />
        </div>
        <div key="preview_4" className="boxc" data-key="4">
          <YoutubeTestCell />
        </div>
        <div key="preview_5" className="boxc" data-key="5">
          <YoutubeTestCell />
        </div>

      </ResponsiveGridLayout>
      <h3>debug text</h3>
      {debug_text}
    </>
  )
}


export default TestLayout