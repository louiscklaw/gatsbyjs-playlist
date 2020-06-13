import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BulmaButton from '../components/bulma-button'
import BulmaSwitch from '../components/bulma-switch'
import BumlaTagsInput from '../components/bulma-tags-input'
import BulmaCheckRadio from '../components/bulma-check-radio'
import BulmaColumn from '../components/bulma-column'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div> helloworld </div>

    <h3>button tryout, modal box tryout</h3>
    <BulmaButton />

    <h3>switch tryout</h3>
    <BulmaSwitch />

    <h3>tags input, not working</h3>
    https://creativebulma.net/product/bulma-tagsinput/demo
    https://codepen.io/CreativeBulma/pen/PoPJVQx?__cf_chl_jschl_tk__=448030c0b8eb47d7a87dcc717f756c200ff6b445-1592074132-0-AW63YJXJhXqX9NCKV4S4buJzhrpF4-XTVRLiglTIr7m-A_4Cz7IAok5YmF--cKK2eXX-7chIL0jxdMCI9mBpX2bIVLykJR7HhDjHi2fKfziaVer2wUprrKwegWtPmOg01vD-Us7QlidY81cd3fZEckBz7vBS0tJGpI0tNs65wNP_P12YaLOWLXhR788ZzPZPlQ7K9Y-JIuJhkYt3rlfG6l6IJ_03wXWJAcYAZvzdo9AAFTzocqQCpw-ONECn02CJfMOJpFqYWtVeu9uvfrctv7ER0T-sDQqmZYc42aPkpeyEjDQgKWTWI-i5qp1nYnX7JrZpgWJw_OpXnuh2AYR5u6CG3zPwIBxdayFTQTAyToOPIqqHQrrJL8S1wB5CX5tz1g

    <BumlaTagsInput />

    <h3>check radio</h3>
    <BulmaCheckRadio />

    <h3>BulmaColumn</h3>
    <BulmaColumn />

    https://creativebulma.net/product/calendar


    https://creativebulma.net/product/carousel/demo



    <h3>bulma badge</h3>
    https://creativebulma.net/product/bulma-badge/demo

    <h3>bulma tooltip</h3>
    https://creativebulma.net/product/bulmatooltip

  </Layout>
)

export default IndexPage
