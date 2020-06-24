import React from 'react';
import _ from 'lodash'
import { Responsive, WidthProvider } from 'react-grid-layout';

import YoutubeTestCell from './youtube-test-cell'
import "./my-responsive-grid.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

let reformBySubKey = (o, key_wanted) => _.mapValues(layout_settings, (o)=>{return o[key_wanted]})

let layout_settings = {
  lg: {
    breakpoints: 1200,
    seating_plan: [
      {i: 'view_0',  x: 0, y: 0, w: 3, h: 3},
      {i: 'view_1',  x: 0, y: 3, w: 1, h: 1},
      {i: 'view_2',  x: 1, y: 3, w: 1, h: 1},
      {i: 'view_3',  x: 2, y: 3, w: 1, h: 1},
      {i: 'view_4',  x: 0, y: 4, w: 1, h: 1},
      {i: 'view_5',  x: 1, y: 4, w: 1, h: 1},

      {i: 'view_6',  x: 2, y: 4, w: 1, h: 1},

      {i: 'view_7',  x: 3, y: 0, w: 1, h: 1},
      {i: 'view_8',  x: 4, y: 0, w: 1, h: 1},
      {i: 'view_9',  x: 3, y: 1, w: 1, h: 1},
      {i: 'view_10', x: 4, y: 1, w: 1, h: 1},
      {i: 'view_11', x: 3, y: 2, w: 1, h: 1},
      {i: 'view_12', x: 4, y: 2, w: 1, h: 1},
      {i: 'view_13', x: 3, y: 3, w: 1, h: 1},
      {i: 'view_14', x: 4, y: 3, w: 1, h: 1},
      {i: 'view_15', x: 3, y: 4, w: 1, h: 1},
      {i: 'view_16', x: 4, y: 4, w: 1, h: 1}
    ],
    cols: 5
  },
  sm:{
    breakpoints: 600,
    seating_plan: [
      {i: 'view_0', x: 0, y: 0, w: 2, h: 2},
      {i: 'view_1', x: 0, y: 2, w: 1, h: 1},
      {i: 'view_2', x: 1, y: 2, w: 1, h: 1},
      {i: 'view_3', x: 0, y: 3, w: 1, h: 1},
      {i: 'view_4', x: 1, y: 3, w: 1, h: 1},
      {i: 'view_5', x: 0, y: 4, w: 1, h: 1},
      {i: 'view_6', x: 1, y: 4, w: 1, h: 1}
    ],
    cols: 2
  }
}

let layout_breakpoints = reformBySubKey(layout_settings, 'breakpoints')
// lookup layout name by width
let reverse_layout_breakpoints = _.invert(layout_breakpoints)
let widths_from_max_to_min = Object.keys(reverse_layout_breakpoints).reverse()

let layout_seatingplan = reformBySubKey(layout_settings, 'seating_plan')
let layout_cols = reformBySubKey(layout_settings, 'cols')

console.log('test-layout.js','layout_breakpoints',layout_breakpoints)
console.log('test-layout.js','layout_seatingplan',layout_seatingplan)

let getNameByWidth = (width) => reverse_layout_breakpoints[width]
let min_width_layout_name = _.last(widths_from_max_to_min)
let default_layout_name = min_width_layout_name

function TestLayout(){
  let [debug_text, setDebugText] = React.useState()
  let [current_layout_name, setCurrentLayoutName] = React.useState('')

  let preview_refs = [
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef(),
    React.useRef()
  ]

  let preview_ref = React.useRef()

  const getPreviewBox = (number_of_box) => {
    return new Array(number_of_box).fill(undefined).map((val, idx) => {
      let view_idx = `view_${idx+1}`
      let preview_ref = preview_refs[idx]

      return (
        // preview_refs

        <div ref={preview_ref} className="box" key={view_idx} > {view_idx} </div>
      )
    });
  }

  let [num_of_preview, setNumOfPreview] = React.useState(16)
  const preview_panel = React.useMemo(()=> getPreviewBox(num_of_preview),[num_of_preview])

  const preview_panel_lg = getPreviewBox(16)
  const preview_panel_sm = getPreviewBox(6)
  let [test_preview_panel, setTestPreviewPanel] = React.useState(preview_panel_lg)

  let checkLayoutNames = (screen_width) => {
    let layout_name =  widths_from_max_to_min.filter( width => screen_width > width )

    // return smallest layout name if no match
    return getNameByWidth(layout_name.length > 0 ? layout_name[0]: default_layout_name)
  }

  const updateLayoutName = () => {
    // setDebugText(checkLayoutNames(document.body.clientWidth))
    setCurrentLayoutName(checkLayoutNames(document.body.clientWidth))
  }

  const onLayoutChange = (layout, layouts) => {
    console.log('test-layout.js','layout',layout)
    console.log('test-layout.js','layouts',layouts)
    // setPreviewPanel(getPreviewBox(preview_panel_count_lg))
  }


  const showRightSidePreview = () => {
    _.range(6,16).map(idx => {
      preview_refs[idx].current.classList.remove('hide-box')
    })
  }

  const hideRightSidePreview = () => {
    _.range(6,16).map(idx => {
      preview_refs[idx].current.classList.add('hide-box')
    })
  }

  const [render_test, setRenderTest] = React.useState(1)
  const onBreakpointChange = (breakpoint_name, num_cols) => {
    // get triggered when breakpoint change
    // regenerate the required children
    // setPreviewPanel(preview_panel_lg)
    // layout_seatingplan[]
    // console.log('test-layout.js', breakpoint_name)
    // console.log(breakpoint_name)

    // let num_of_preview_cell = layout_seatingplan[breakpoint_name].length
    // setNumOfPreview(num_of_preview_cell)
    // setRenderTest(1)
    if (breakpoint_name == 'sm'){
      setTestPreviewPanel(preview_panel_lg)
      preview_refs[6].current.classList.add('hide-box')
      hideRightSidePreview()

    }else{
      setTestPreviewPanel(preview_panel_lg)
      preview_refs[6].current.classList.remove('hide-box')
      showRightSidePreview()
    }
  }
  const onWidthChange = () => {}

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        breakpoints={layout_breakpoints}
        layouts={layout_seatingplan}
        cols={layout_cols}

        rowHeight={190}

        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        onWidthChange={onWidthChange}

        margin={[0,0]}
        containerPadding={[0,0]}

        render={render_test}

        style={{
          height: '100vh'
        }}
        >

        <div key="view_0" className="boxa" data-key="view_0">
          <YoutubeTestCell />
        </div>

        {/* { preview_panel } */}
        { test_preview_panel }

      </ResponsiveGridLayout>
    </>
  )
}


export default TestLayout