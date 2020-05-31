/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import NProgress from "nprogress"

export const onPreRouteUpdate = () => {
  NProgress.start()
  console.log('nprogress start')
}

export const onRouteUpdate = () => {
  NProgress.done()
  console.log('nprogress done')
}
