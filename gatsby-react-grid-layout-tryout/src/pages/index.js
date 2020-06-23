import React from 'react';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import Layout from "../components/layout"
import MyFirstGrid from '../components/my-first-grid'
import MyResponsiveGrid from '../components/my-responsive-grid'


const IndexPage = () => (
  <Layout>
    <MyResponsiveGrid />
  </Layout>
)

export default IndexPage
