const chalk = require('chalk');

formatGatsbyConsoleOutput = (text_in) => {
  return `xxxxxx -> ${text_in}`
}

printGatsbyConsoleOutput = (text_in) => {
  const cyan = chalk.cyan
  const log = console.log
  log(cyan(formatGatsbyConsoleOutput(text_in)))
}

helloworld = () => {
  printGatsbyConsoleOutput('Hello world! from gatsby-nodes directory')
}

module.exports={
  helloworld
}