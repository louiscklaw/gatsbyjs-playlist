#!/usr/bin/env node

const fs = require('fs')

const temp = fs.readFileSync('./helloworld.js',{encoding: 'utf-8'})

// const replaced_single_class_element = temp.replace(/class="([\d|\w]+?)"/g, 'class="active_style.$1"')

const double_class_element = temp.replace(
  /class="(.+?)"/g, (m, p1)=>{
    return 'class="'+p1.split(' ').map(x => 'active_style.'+x).join(', ')+'"'
  }
)

const convert_uppercase = double_class_element.replace(
  /class="(.+?)"/g, (m, p1)=>{
    return 'class="'+p1.replace(/-(\w)/g, (mm, pp1)=>{
      return pp1.toUpperCase()
    })+'"'
  }
)

const add_combine_styles = convert_uppercase.replace(/class="(.+?), (.+?)"/g, (m,p1,p2)=>{
  return `class="combineStyles([${p1}, ${p2}])"`
})

const final = add_combine_styles.replace(/class="(.+?)"/g, (m, p1)=>{
  return `className={${p1}}`
})
// process of the class => className ends here

const update_endings_hr = final.replace(/<hr>/g,"<hr />")
const update_endings_br = update_endings_hr.replace(/<br>/g,"<br />")


fs.writeFileSync('./out.html',update_endings_br, {encode:'utf-8'})
