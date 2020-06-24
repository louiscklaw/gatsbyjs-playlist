import React from 'react';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import Layout from "../components/layout"
import MyFirstGrid from '../components/my-first-grid'
import MyResponsiveGrid from '../components/my-responsive-grid'
import MyYoutubeGrid from '../components/my-youtube-grid'
import MyDraggableHandle from '../components/my-draggable-handle'

import TestLayout from '../components/test-layout'

const IndexPage = () => (
  <Layout>
    {/* <MyDraggableHandle /> */}
    {/* <MyResponsiveGrid /> */}
    {/* <MyYoutubeGrid /> */}
    <TestLayout />
  </Layout>
)

export default IndexPage
