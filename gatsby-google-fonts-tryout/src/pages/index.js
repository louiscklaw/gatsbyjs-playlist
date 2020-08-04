import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let div_style ={
  marginTop: '1 em'
}

const IndexPage = () => (
  <Layout>
    <div style={{
      marginTop: '1rem'
    }}>
      <div style={{
        fontFamily: 'limelight',
        marginTop: '1rem'
      }}>
        hello google fonts limelight
      </div>

      <div style={{
        fontFamily: 'Oswald',
        marginTop: '1rem'
      }}>
        hello google fonts Oswald
      </div>

      <div style={{
        fontFamily: 'Noto Sans TC',
        marginTop: '1rem'
      }}>
        hello google fonts Noto Sans TC
        中文字
      </div>

      <div style={{
        fontFamily: 'Noto Serif TC',
        marginTop: '1rem'
      }}>
        hello google fonts Noto Serif TC
        中文字
      </div>


      <div style={{
        fontFamily: 'Rowdies',
        marginTop: '1rem'
      }}>
        hello google fonts Rowdies
        中文字
      </div>



    </div>



    <div style={{marginTop: '1rem'}}>
      <a href="https://fonts.google.com" target="_blank">https://fonts.google.com</a>
    </div>

    <div>
      <a href="http://fontpair.co/" target="_blank">http://fontpair.co/</a>
    </div>


  </Layout>
)

export default IndexPage
