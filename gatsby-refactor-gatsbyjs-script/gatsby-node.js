/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {helloworld} = require('./gatsby-nodes/helloworld')

exports.createPages = async ({ actions, graphql, reporter }) => {
  helloworld()
}