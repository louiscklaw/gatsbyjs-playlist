(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8oxB":function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],s=!1,m=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):m=-1,l.length&&f())}function f(){if(!s){var e=u(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++m<t;)c&&c[m].run();m=-1,t=l.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||u(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=d,a.addListener=d,a.once=d,a.off=d,a.removeListener=d,a.removeAllListeners=d,a.emit=d,a.prependListener=d,a.prependOnceListener=d,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=function(e){var t=e.siteTitle;return a.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var u=o;n("8ypT"),t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,{siteTitle:n.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,t),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},R971:function(e,t,n){"use strict";n.r(t),n.d(t,"data",(function(){return l})),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n("q1tI"),a=n.n(r),i=n("7ljp"),o=n("Bl7J"),u=n("zECr"),c=function(){return a.a.createElement("form",{style:{borderRadius:"5px",backgroundColor:"#f2f2f2",padding:"20px",display:"inline-block"}},a.a.createElement("label",null,"Email: ",a.a.createElement("input",{type:"email",name:"email"})),a.a.createElement("label",null,"Name: ",a.a.createElement("input",{type:"text",name:"Name"})),a.a.createElement("input",{type:"submit",value:"submit"}))},l=[{label:"In App Purchase Income",datums:[{x:"2020",y:9},{x:"2019",y:32},{x:"2018",y:35},{x:"2017",y:36},{x:"2016",y:38},{x:"2015",y:30},{x:"2014",y:29}]},{label:"Advertising Income",datums:[{x:"2020",y:4},{x:"2019",y:3},{x:"2018",y:12},{x:"2017",y:14},{x:"2016",y:10},{x:"2015",y:9},{x:"2014",y:17}]}],s={},m={data:l,_frontmatter:s},p=o.a;function f(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"React Charts examples in MDX"),Object(i.b)("p",null,"This file is written in MDX and has a live React component you can interact with; try hovering over the data to get more granular information."),Object(i.b)("h3",null,"Data represented in BarChart"),Object(i.b)("figure",{style:{height:300}},Object(i.b)(u.Chart,{data:l,series:{type:"bar"},axes:[{primary:!0,type:"ordinal",position:"left"},{position:"bottom",type:"linear",stacked:!0}],tooltip:!0,mdxType:"Chart"})),Object(i.b)("h3",null,"Data represented in ColumnChart"),Object(i.b)("figure",{style:{height:300}},Object(i.b)(u.Chart,{data:l,series:{type:"bar"},axes:[{primary:!0,type:"ordinal",position:"bottom"},{position:"left",type:"linear",stacked:!1}],tooltip:!0,mdxType:"Chart"})),Object(i.b)("h3",null,"Data represented in AreaChart"),Object(i.b)("figure",{style:{height:300}},Object(i.b)(u.Chart,{data:l,series:{type:"bar"},axes:[{primary:!0,position:"bottom",type:"time"},{position:"left",type:"linear",stacked:!0}],tooltip:!0,mdxType:"Chart"})),Object(i.b)("p",null,"Want to be informed about updates to this data? Sign up here:"),Object(i.b)(c,{mdxType:"Form"}))}f.isMDXComponent=!0},bQgK:function(e,t,n){(function(t){(function(){var n,r,a,i,o,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),u=1e9*t.uptime(),o=i-u):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zECr:function(e,t,n){e.exports=n("+Lyh")}}]);
//# sourceMappingURL=component---src-pages-chart-info-mdx-ca28c8d8abbc7f66686a.js.map