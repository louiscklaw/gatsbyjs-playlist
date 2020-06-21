import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { render } from "react-dom"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <Layout>
        <SEO title="Home" />
        helloworld
        <form onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
      </Layout>
    )
  }
}

export default IndexPage
