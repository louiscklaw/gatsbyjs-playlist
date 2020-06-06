// http://localhost:9000/legacy-path

module.exports = {
  createPages: ({ actions }) => {
    console.log('creating redirect')
    const { createRedirect } = actions
    createRedirect({
      fromPath: "/testpath",
      toPath: "https://www.example.com",
    })
  },
}
