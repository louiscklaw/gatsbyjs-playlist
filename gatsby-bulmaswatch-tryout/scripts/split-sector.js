#!/usr/bin/env node
const {get_component, component_name} = require('./component_template')

const fs = require('fs');

const file_content = fs.readFileSync('./out.html',{encoding:'utf-8'});

// console.log(file_content)

let s = '<section>blablabla</section>';
const sector_regex = /<section.+?<\/section>/sg

const list_sector = s.match(sector_regex);
const list_file_sections = file_content.match(sector_regex);

// let r = /<sector.+?<\/sector>/s;

// console.log('Match? ' + sector_regex.test(s));
// console.log(list_sector)
console.log(list_file_sections.length)

list_file_sections.forEach(file_section => {
  // console.log(file_section)
  const find_id = file_section.match(/id="(.+?)"/)[1]
  const target_file_path=`/home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/src/components/${find_id}-test.js`


  fs.writeFileSync(target_file_path, get_component(file_section, find_id))

})

const find_id_list = list_file_sections.map( file_section => {
  return file_section.match(/id="(.+?)"/)[1]
})

const component_index = list_file_sections.map( file_section => {
  const find_id = file_section.match(/id="(.+?)"/)[1]
  return `{/* <${component_name(find_id)}Test /> */}`
})

fs.writeFileSync('./component_index.js', component_index.join('\n'))

// component import
const component_import = find_id_list.sort().map( find_id => {
  return `// import ${component_name(find_id)}Test from './${find_id}-test'`
})

fs.writeFileSync('./component_import.js', component_import.join('\n'))



// component import
const git_checkouts = find_id_list.sort().map( find_id => {
  return `# git checkout /home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/src/components/${find_id}-test.js`
})

fs.writeFileSync('./git_checkout_template.sh', git_checkouts.join('\n'))
