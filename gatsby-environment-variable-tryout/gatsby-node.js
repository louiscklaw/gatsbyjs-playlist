/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const packageJson = require('./package');

exports.onCreateWebpackConfig = ({
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __NAME__: JSON.stringify(packageJson.name),
        __VERSION__: JSON.stringify(packageJson.version),
      }),
    ],
  })
}
