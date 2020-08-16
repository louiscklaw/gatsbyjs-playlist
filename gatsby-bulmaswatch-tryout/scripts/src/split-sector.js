#!/usr/bin/env node
var HTMLtoJSX = require( './htmltojsx.js' );

var converter = new HTMLtoJSX( {
  createClass: false
} );

const {get_component, component_name} = require('./component_template')

const fs = require('fs');

var file_content = fs.readFileSync('./in.html',{encoding:'utf-8'});

file_content = converter.convert( file_content );

// console.log(file_content)

let s = '<section>blablabla</section>';
const sector_regex = /<section.+?^  <\/section>/sgm

const list_sector = s.match(sector_regex);
const list_file_sections = file_content.match(sector_regex);

// let r = /<sector.+?<\/sector>/s;
// console.log('Match? ' + sector_regex.test(s));
// console.log(list_sector)
// console.log(list_file_sections.length)

// console.log(list_file_sections)



const classname_post_process = (text_in) => {
  const double_class_element = text_in.replace(
    /className="(.+?) ?"/g, (m, p1)=>{
      return 'className="'+p1.split(' ').filter(x => x.trim() != '').map(x => 'active_style.'+x).join(', ')+'"'
    }
  )

  const convert_uppercase = double_class_element.replace(
    /className="(.+?) ?"/g, (m, p1)=>{
      return 'className="'+p1.replace(/-(\w)/g, (mm, pp1)=>{
        return pp1.toUpperCase()
      })+'"'
    }
  )

  const final = convert_uppercase.replace(/className="(.+?) ?"/g, (m, p1)=>{
    if (p1.split(',').length > 1){
      return `className={combineStyles([${p1}])}`
    }else{
      return `className={${p1}}`
    }
  })

  return final
}

list_file_sections.forEach(file_section => {
  // console.log(file_section)
  const find_id = file_section.match(/id="(.+?)"/)[1]
  const target_file_path=`/home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/src/components/${find_id}-test.js`

  const after_post_process = classname_post_process(file_section)

  fs.writeFileSync(target_file_path, get_component(after_post_process, find_id))

})

const find_id_list = list_file_sections.map( file_section => {
  return file_section.match(/id="(.+?)"/)[1]
})

// component index
const component_index = list_file_sections.map( file_section => {
  const find_id = file_section.match(/id="(.+?)"/)[1]
  return `{/* <${component_name(find_id)}Test /> */}`
})

fs.writeFileSync('./component_index.js', component_index.join('\n'))
// component index

// component import
const component_import = find_id_list.sort().map( find_id => {
  return `// import ${component_name(find_id)}Test from './${find_id}-test'`
})

fs.writeFileSync('./component_import.js', component_import.join('\n'))
// component import


// git checkout template
const git_checkouts = find_id_list.sort().map( find_id => {
  return `# git checkout /home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/src/components/${find_id}-test.js`
})

fs.writeFileSync('./git_checkout_template.sh', git_checkouts.join('\n'))
// git checkout template

console.log('done')
