#!/usr/bin/env node

const fs = require('fs')

var temp = fs.readFileSync('./in.html',{encoding: 'utf-8'})

// const replaced_single_class_element = temp.replace(/class="([\d|\w]+?)"/g, 'class="active_style.$1"')

// temp = `
// <span class="icon">
// <span class="icon"> <i class="fas fa-home"> </i> </span>
// <span class="icon is-medium"> <i class="fas fa-lg fa-home"> </i> </span>
// <span class="icon is-large"> <i class="fas fa-2x fa-home"> </i> </span>
// `

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

const final = convert_uppercase.replace(/class="(.+?)"/g, (m, p1)=>{
  if (p1.split(',').length > 1){
    return `className={combineStyles([${p1}])}`
  }else{
    return `className={${p1}}`
  }
})

// process of the class => className ends here

const update_endings_hr = final.replace(/<hr>/g,"<hr />")
const update_endings_br = update_endings_hr.replace(/<br>/g,"<br />")


fs.writeFileSync('./out.html',update_endings_br, {encode:'utf-8'})
