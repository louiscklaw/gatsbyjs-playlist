import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import "./my-responsive-grid.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

function MyResponsiveGrid(){

  let layout =
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

  let layouts = {
    lg: layout,
    md: layout2
  }

  let [debug_text, setDebugText] = React.useState()

  const onLayoutChange = (layout, layouts) => {
    setDebugText(
      JSON.stringify(layout),
      JSON.stringify(layouts)
      )

  }

  return (
    <>
      <h2>my-responsive-grid.js</h2>
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        layouts={layouts}
        onLayoutChange={onLayoutChange}

        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}

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


export default MyResponsiveGrid