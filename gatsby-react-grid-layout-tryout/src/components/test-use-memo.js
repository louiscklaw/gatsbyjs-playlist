import React from 'react';
import GridLayout from 'react-grid-layout';

import './test-layout.css'

function MyFirstGrid(props){

  let layout =
    [
      {i: '1', x: 0, y: 0, w: 5, h: 6},
      {i: '2', x: 0, y: 0, w: 5, h: 6},
      {i: '3', x: 0, y: 0, w: 5, h: 6}
    ]

  const children = React.useMemo(()=>{
    return new Array(4).fill(undefined).map((val, idx) => {
      return (
        <div className="box" key={idx} data-grid={{x: idx, y: 1, w: 1, h: 1}} />

      )
    });
  }, [props.count])

  return (
    <>
      <h2>test-use-memo.js</h2>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        >
        {children}
      </GridLayout>
      <pre>
        {JSON.stringify(layout)}
      </pre>
    </>

  )
}


export default MyFirstGrid