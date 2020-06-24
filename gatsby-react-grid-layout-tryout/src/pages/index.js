import React from 'react';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import Layout from "../components/layout"
import MyFirstGrid from '../components/my-first-grid'
import MyResponsiveGrid from '../components/my-responsive-grid'
import MyYoutubeGrid from '../components/my-youtube-grid'
import MyDraggableHandle from '../components/my-draggable-handle'
import TestUseMemo from '../components/test-use-memo'
import TestLayout from '../components/test-layout'

import TestBreakpoints from '../components/breakpoint-helloworld'

const IndexPage = () => (
  <Layout>
    {/* <MyDraggableHandle /> */}
    {/* <MyResponsiveGrid /> */}
    {/* <MyYoutubeGrid /> */}
    <TestLayout />
    {/* <TestUseMemo /> */}
    {/* <TestBreakpoints /> */}
  </Layout>
)

export default IndexPage
