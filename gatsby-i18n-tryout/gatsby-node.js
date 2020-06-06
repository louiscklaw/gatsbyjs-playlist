// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  console.log(page.path)
  if (page.path.match(/^\/en/)) {
  //   page.matchPath = `/^\/en/*`
  //   createPage(page)
  //   console.log(`creating page for ${lang}`)
    const { createPage } = actions
    console.log(page.path)

    page.matchPath = ``
    createPage(page)

    console.log(
      page.path,
      page.matchPath
    )

    page.matchPath = `/en`
    createPage(page)

    console.log(
      page.path,
      page.matchPath
    )
  }
}
