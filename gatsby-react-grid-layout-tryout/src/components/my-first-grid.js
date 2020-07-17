import React from 'react';
import GridLayout from 'react-grid-layout';

function MyFirstGrid(){

  let layout =
    [
      {i: 'a', x: 0, y: 0, w: 5, h: 6},
      {i: 'b', x: 0, y: 0, w: 5, h: 6},
      {i: 'c', x: 0, y: 0, w: 5, h: 6}
    ]

  return (
    <>
      <h2>my-first-grid.js</h2>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        >

        <div key="a" className="boxa" data-key="a">

        </div>

        <div key="b" className="boxb" data-key="b">


        </div>

        <div key="c" className="boxc" data-key="c">

        </div>

      </GridLayout>
      <pre>
        {JSON.stringify(layout)}
      </pre>
    </>

  )
}


export default MyFirstGrid