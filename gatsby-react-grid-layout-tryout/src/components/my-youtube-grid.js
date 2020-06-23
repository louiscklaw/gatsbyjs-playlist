import React from 'react';
import GridLayout from 'react-grid-layout';

function MyYoutubeGrid(){

  let [layout, setLayout] = React.useState(
    [
      {i: 'a', x: 0, y: 0, w: 5, h: 6},
      {i: 'b', x: 0, y: 0, w: 5, h: 6},
      {i: 'c', x: 0, y: 0, w: 5, h: 6}
    ]
  )

  const handleTestOnClick = () => {
    setLayout([
      {i: 'a', x: 0, y: 0, w: 4, h: 5},
      {i: 'b', x: 0, y: 0, w: 4, h: 5},
      {i: 'c', x: 0, y: 0, w: 4, h: 5}
    ])
  }

  const handleMaxOnClick = (e) => {
    let ele_div = e.target.parentElement
    let div_key = ele_div.dataset.key
    setLayout([
      ...layout.filter( ele => ele.i != div_key),
      ...layout.filter( ele => ele.i == div_key)
        .map( t => {
          return {i: t.i, x: t.x, y: t.y, w: 5, h: 6}
        })
      ,
    ])
  }

  const handleMinOnClick = (e) => {
    let ele_div = e.target.parentElement
    let div_key = ele_div.dataset.key
    setLayout([
      ...layout.filter( ele => ele.i != div_key),
      ...layout.filter( ele => ele.i == div_key)
        .map( t => {
          return {i: t.i, x: t.x, y: t.y, w: 4, h: 5}
        })
      ,
    ])
  }

  React.useEffect(()=>{
    console.log(layout)
  },[layout])

  const onLayoutChange = (layout, layouts) =>{
    console.log('layout', layout)
    console.log('layouts', layouts)
  }

  return (
    <>
      <h2>my-youtube-grid.js</h2>
      <button onClick={handleTestOnClick}>Test</button>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onLayoutChange}
        >
        <div key="a" className="boxa" data-key="a">

        <div className="handler-max" onClick={handleMaxOnClick}>
            max
          </div>

          <div className="handler-min" onClick={handleMinOnClick}>
            min
          </div>

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

          <div className="handler-max" onClick={handleMaxOnClick}>
            max
          </div>

          <div className="handler-min" onClick={handleMinOnClick}>
            min
          </div>

          <div className="handler-drag">
            drag
          </div>

        </div>

        <div key="c" className="boxc" data-key="c">

          <div className="handler-max" onClick={handleMaxOnClick}>
            max
          </div>

          <div className="handler-min" onClick={handleMinOnClick}>
            min
          </div>

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


export default MyYoutubeGrid