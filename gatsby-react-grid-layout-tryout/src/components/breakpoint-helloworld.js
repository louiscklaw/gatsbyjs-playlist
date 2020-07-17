import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    let layout_lg = [
      {i: 'a', x: 0, y: 0, w: 10, h: 5},
      {i: 'b', x: 0, y: 0, w: 10, h: 5},
      {i: 'c', x: 0, y: 0, w: 10, h: 5}
    ]

    let layout_sm = [
      {i: 'a', x: 0, y: 0, w: 3, h: 3},
      {i: 'b', x: 0, y: 0, w: 3, h: 3}
    ]
    const layouts = {
      lg: layout_lg,
      sm: layout_sm
    };

    const onLayoutChange = (layout, layouts) =>{
      console.log('test-breakpoints.js', 'layouts', layouts)
      console.log('test-breakpoints.js', 'layout', layout)
    }

    const onBreakpointChange = (breakpoint_name, col_number) =>{
      console.log('test-breakpoint.js','breakpoint_name', breakpoint_name)
    }
    return (
      <>
        <h3>test breakpoints</h3>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{lg: 1200, sm: 768}}
          cols={{lg: 12, sm: 6}}

          onBreakpointChange={onBreakpointChange}
          onLayoutChange={onLayoutChange}
          >
          <div key="1">1</div>
          <div key="2">2</div>
          <div key="3">3</div>
        </ResponsiveGridLayout>
      </>
    )
  }
}

export default MyResponsiveGrid