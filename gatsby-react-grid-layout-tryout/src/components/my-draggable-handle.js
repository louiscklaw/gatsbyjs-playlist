import React from 'react';
import GridLayout from 'react-grid-layout';

import "./my-draggable-handle.css"

function MyDraggableHandle(){

  let [layout, setLayout] = React.useState(
    [
      {i: 'a', x: 0, y: 0, w: 5, h: 6},
      {i: 'b', x: 0, y: 0, w: 5, h: 6},
      {i: 'c', x: 0, y: 0, w: 5, h: 6}
    ]
  )

  const onLayoutChange = (layout, layouts) =>{
    console.log('layout', layout)
    console.log('layouts', layouts)
  }

  const onDrag = (i) => {
    console.log(i)
  }

  return(
    <>
    <h2>my-youtube-grid.js</h2>

    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={onLayoutChange}
      draggableHandle=".handler-drag-test"
      onDrag={onDrag}
      >
      <div key="a" className="boxa" data-key="a">

        <div className="handler-drag">
          drag
        </div>
      </div>

      <div key="b" className="boxb" data-key="b">

        <iframe
          src="//www.youtube.com/embed/yCOY82UdFrw"
          frameborder="0"
          allowfullscreen
          class="video"
          />


        <div className="handler-drag-test">
          drag
        </div>

      </div>

      <div key="c" className="boxc" data-key="c">

        <div className="handler-drag">
          drag
        </div>

      </div>

    </GridLayout>
    <pre>
      {JSON.stringify(layout)}
    </pre>
  </>

  )
}


export default MyDraggableHandle