webpackJsonp([0],{"+JiV":function(e,t,a){var n=a("aXCK");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("1e90015d",n,!0)},"+Sw7":function(e,t,a){"use strict";var n=a("pHAe"),i=a.n(n),o=a("Uo83"),r=a.n(o),s=a("ptRl"),c=a.n(s),l=a("ZmT5"),d=a("9Utb");t.a={data:function(){return{about:i.a,experience:r.a,education:c.a}},components:{Intro:l.a,ExperienceItem:d.a}}},"/TYz":function(e,t,a){"use strict";function n(e){a("SG93")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("+Sw7"),o=a("pAJ3"),r=a("VU/8"),s=n,c=r(i.a,o.a,!1,s,"data-v-547003a7",null);t.default=c.exports},"3C7x":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"experience"},[a("p",{staticClass:"period"},[e._v("\n    "+e._s(e.start.month)+" "+e._s(e.start.year)+" - "+e._s(e.end.month)+" "+e._s(e.end.year)+"\n    "),e.location?a("span",{staticClass:"location"},[e._v("("+e._s(e.location)+")")]):e._e()]),e.name?a("h3",{staticClass:"name"},[e._v(e._s(e.name))]):e._e(),a("p",{staticClass:"role"},[e._v("\n    "+e._s(e.role)+"\n    "),e.isContractor?a("span",{staticClass:"type"},[e._v("Contractor")]):e._e()]),a("markdown",{attrs:{source:e.description}}),e.technologies?a("div",{staticClass:"technologies"},[a("h4",[e._v("Technologies")]),a("ul",e._l(e.technologies,function(t){return a("li",[e._v(e._s(t))])}))]):e._e()],1)},i=[],o={render:n,staticRenderFns:i};t.a=o},"5SuD":function(e,t,a){"use strict";t.a={props:{name:String,role:String,location:String,isContractor:Boolean,start:Object,end:Object,description:String,technologies:Array}}},"8ciV":function(e,t,a){var n=a("ZGVo");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("2920f39c",n,!0)},"9Utb":function(e,t,a){"use strict";function n(e){a("+JiV")}var i=a("5SuD"),o=a("3C7x"),r=a("VU/8"),s=n,c=r(i.a,o.a,!1,s,"data-v-776a1ce3",null);t.a=c.exports},CsaA:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"h2[data-v-547003a7]{color:#aaa;margin:0 0 30px;text-transform:uppercase;font-weight:800;letter-spacing:1px;page-break-inside:avoid;page-break-after:avoid}h2[data-v-547003a7]:not(:first-child){margin-top:50px}@media screen{@media (min-width:60em){.intro[data-v-547003a7]{width:30%}.container[data-v-547003a7]{display:-webkit-box;display:-ms-flexbox;display:flex}.intro[data-v-547003a7]{min-width:300px}}main[data-v-547003a7]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:30px}h2[data-v-547003a7]{position:-webkit-sticky;position:sticky;top:0;line-height:1;margin:50px -30px 30px;padding:30px;border-bottom:1px solid rgba(0,0,0,.05);background-color:hsla(0,0%,100%,.95)}h2[data-v-547003a7]:first-child{margin-top:-30px}}@media print{.intro[data-v-547003a7]{min-width:0;float:left;width:30%;margin-right:30px}main[data-v-547003a7]{overflow:hidden}h2[data-v-547003a7]{color:#ddd}}",""])},"Jr/v":function(e,t,a){"use strict";var n=a("kfwF"),i=a.n(n);t.a={components:{pdfIcon:i.a},props:{name:String,title:String,summary:String,contact:Object,coreSkills:Array,currentFocus:Array}}},MufE:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"intro"},[a("nav",{staticClass:"util print-hidden"},[a("a",{attrs:{href:"cv.pdf",title:"Open PDF version"}},[a("span",{staticClass:"visually-hidden"},[e._v("Download PDF")]),a("pdf-icon",{staticClass:"icon"})],1)]),a("div",{staticClass:"head"},[a("h1",[e._v(e._s(e.name))]),a("h2",[e._v(e._s(e.title))])]),a("div",{staticClass:"body"},[a("markdown",{staticClass:"summary",attrs:{source:e.summary}}),a("div",{staticClass:"skills"},[a("h3",[e._v("Core skills")]),a("ul",e._l(e.coreSkills,function(t){return a("li",[e._v(e._s(t))])}))]),a("div",{staticClass:"skills"},[a("h3",[e._v("Current focus")]),a("ul",e._l(e.currentFocus,function(t){return a("li",[e._v(e._s(t))])}))])],1),a("div",{staticClass:"foot"},[a("dl",[a("dt",{staticClass:"visually-hidden"},[e._v("Mobile number")]),a("dd",[e._v(e._s(e.contact.phone))]),a("dt",{staticClass:"visually-hidden"},[e._v("Email")]),a("dd",[a("markdown",{attrs:{source:e.contact.email}})],1)])])])},i=[],o={render:n,staticRenderFns:i};t.a=o},SG93:function(e,t,a){var n=a("CsaA");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("67bad4ee",n,!0)},Uo83:function(e,t){e.exports=[{name:"BCG Digital Ventures",role:"Senior Frontend Engineer",isContractor:!0,start:{month:"October",year:2017},end:{month:"November",year:2017},description:"Short lived project where within a small team I was actively involved in building dashboard UI for displaying and interacting with data for a large cement producer.",technologies:["JavaScript (React, Redux, Jest, Webpack)","CSS Modules","Git"]},{name:"Department for International Trade (DIT)",role:"Senior Frontend Developer",isContractor:!0,start:{month:"May",year:2017},end:{month:"October",year:2017},description:"Was instrumental in driving forward the development of a complex CRM tool for the department. Building the application with wide range of browser support (including legacy). Innovating within constraints to fulfil the user needs, improve development tools and processes.",technologies:["JavaScript (Vanilla, node.js, Express, Webpack, Mocha, Nightwatch JS, Nunjucks)","Sass","Git"]},{name:"NHS Digital",role:"Senior Frontend Developer",isContractor:!0,start:{month:"November",year:2016},end:{month:"April",year:2017},description:"Working in a team on transformation of NHS.UK. Created and maintained common components library which documents and shows usage of various components that make various NHS.UK online services, such as beta.nhs.uk. It is currently being used by several services.",technologies:["JavaScript (node.js, Express, Webpack, Gulp, Mocha)","Sass","Git","Fractal (component library)"]},{name:"Barclays",role:"Senior Frontend Developer",isContractor:!0,start:{month:"July",year:2016},end:{month:"November",year:2016},description:"Principal front-end developer working on internal tool for managing risks in agile development of projects within the bank.\n\nResponsible for ensuring that the application is meeting Barclays standards for accessibility and usability. Introduced a number of front-end best practices the team. Optimised and improved maintainability of the front-end codebase.\n",technologies:["JavaScript (Angular JS, Webpack)","Unit testing (Jasmine, Karma, Spock)","CSS/Less","Git","Jenkins"]},{name:"BBC",role:"Senior JavaScript Application Developer",isContractor:!0,start:{month:"December",year:2015},end:{month:"June",year:2016},description:"Working in a small team responsible for launching the BBC Three online service.\n\nBuilding isomorphic BBC Three components in React and BBC Morph modules in node.js. Using BBC GEL design framework with focus on reusability, unit/acceptance testing, performance and consistent cross-device/browser experience.\n\nDesigned and built a number of BBC Three specific features as well as taking an opportunity to improve performance/organisation of existing code.\n",technologies:["JavaScript (React JS, Node.js, Express, Gulp, Webpack)","Unit testing (Mocha, skin-deep, React Shallow Render, Web Driver, BrowserStack, Galen Framework)","CSS/PostCSS","Git/Github","Jenkins"]},{name:"UK Ministry of Justice",role:"Developer",isContractor:!0,start:{month:"September",year:2014},end:{month:"December",year:2015},description:"Responsible for front-end development and design of Civil Legal Advice public website. Continuous development of functional prototypes used in rounds of user-testing to test hypothesis and validate design decisions. Maintained an AngularJS call-centre application.\n\nDeveloped component libraries and generated service style guides. Built NPM packages to ease the exchange and development of assets and components across government websites and web applications.\n",technologies:["JavaScript (Vanilla, node.js, AngularJS, Nightwatch, Gulp, Webpack)","CSS/Sass","Ruby (Rails, Middleman)","Python (Django, Flask, Jinja)","Git/Github","Jenkins","Graphviz","Google Analytics","Sketch"]},{name:"state.com",role:"Frontend Developer",start:{month:"May",year:2012},end:{month:"September",year:2014},description:"Working in a team of four. Responsible for development and maintenance of public site and internal applications. Primarily working with Ruby, node.js, Sass, HTML5 and JavaScript running on AWS.\n\nLeading the development and management of scalable modular stylesheet architecture for State’s platform. Developed methodology and processes for management of complex stylesheets which allows efficient reuse of components across various products.\n\nRegularly built functional prototypes for usability testing. Made large contributions to component server for testing, development and presentation of complex interfaces which allows interactive testing of each interface component in isolation.\n\nManaged a large number of cross-client email templates. Built tools for their creation and testing (integrated with MailChimp API), used by the whole team.\n\nRedesigned site’s admin panel (Rails) and API documentation.\n",technologies:["JavaScript (Vanilla, Dojo, AMD, node.js, AngularJS, Buster.js, D3, Grunt)","CSS/Sass","SVG","Ruby (Rails, Middleman)","Git/Github","MongoDB","Redis","Photoshop/Illustrator"]},{name:"VisualDNA",role:"Frontend Developer",start:{month:"January",year:2012},end:{month:"May",year:2012},description:"Responsible for initial development of internal Quiz Editor rich application, intended to replace legacy application that was managing all of company’s quizzes.",technologies:["JavaScript/CoffeeScript (jQuery, Backbone.js)","CSS","PHP (Twig)","SVN/Git","Photoshop"]},{name:"streetlife.com",role:"Designer/Developer",start:{month:"January",year:2012},end:{month:"May",year:2012},description:"Joined the team of one back-end developer, and two founders. Assumed responsibilities of designer and full-stack developer. Built initial prototypes and led the research and design of the product (Information Architecture, sketches and wireframes, prototypes, visual design, and full front-end implementation). The site rapidly grew to tens of thousands of active users and hundreds of communities in the UK and featured across British media.",technologies:["JavaScript (jQuery)","CSS","Python (Django, Flask, Jinja2)","Vagrant","Puppet","Git/Github Photoshop/Illustrator","OmniGraffle"]},{name:"DigitasLBi",role:"Interface Developer",isContractor:!0,start:{month:"January",year:2010},end:{month:"February",year:2010},description:"Worked in small team of designers and developers on redesign of discoverireland.ie.",technologies:["JavaScript (jQuery)","CSS","HTML","Photoshop"]},{name:"Microsoft",role:"UX Designer",start:{month:"December",year:2007},end:{month:"November",year:2009},description:"Worked in a medium size team on Bing Maps UK as a UX researcher and developer. Created interactive prototypes and conducted usability tests to help shape decisions on product direction. Worked with other software engineers to deliver a number features for high-traffic Bing Maps. Including UI for Bird’s Eye view, public transit information, printable and shareable maps.",technologies:["JavaScript","HTML/XML","CSS","Script#","C#","Photoshop/Illustrator"]},{name:"Multimap",role:"Web Developer",start:{month:"September",year:2006},end:{month:"December",year:2007},description:"Joined the development team as one of the core developers, redesigning a website featuring complex and interactive standards-based web interface. Responsible for the majority of new stylesheets and markup. Restyling of all map interface elements for the public API and website with full cross-browser support.",technologies:["JavaScript","CSS","HTML","Perl","Template Toolkit","Perforce","Photoshop/Illustrator"]},{name:"Sportingbet",role:"Web Developer",start:{month:"September",year:2006},end:{month:"December",year:2007},description:"Working in a multilingual team of developers. Rebuilt table-based Russian website with web standards and best practices, greatly improving performance and maintainability. Promoted web standards across the team. Maintained internal Wiki to share best practices, assets and resources. Designed mobile UI elements.",technologies:["HTML","CSS","JavaScript","Wikimedia","Photoshop"]},{name:"Freelancing",role:"Design, Development",start:{month:"February",year:2004},end:{month:"October",year:2005},description:"Worked on a number of projects ranging from wireframes, websites, CMS integrations and design (branding and promotional material).",technologies:["HTML","CSS","JavaScript","PHP","Photoshop","Illustrator and others"]}]},ZGVo:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,'.intro[data-v-cf45d120]{position:relative}.head[data-v-cf45d120]{padding-right:35px}.util[data-v-cf45d120]{position:absolute;right:25px;top:25px}.body[data-v-cf45d120]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.skills[data-v-cf45d120]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:20px;margin-right:20px}.foot[data-v-cf45d120]{-webkit-box-flex:0;-ms-flex:0;flex:0;margin-top:20px;position:-webkit-sticky;position:sticky;top:calc(100vh - 6rem)}.foot[data-v-cf45d120]:before{content:"";border-top:4px solid;opacity:.3;margin:28px 0;width:30px;display:block}h1[data-v-cf45d120]{letter-spacing:1px;line-height:1;font-size:48px;font-size:3rem;margin:0}h2[data-v-cf45d120]{font-size:25px;opacity:.5;font-weight:400;margin:10px 0}h3[data-v-cf45d120]{margin:0 0 5px;font-size:1em}ul[data-v-cf45d120]{margin:0;padding:0 0 0 1.1em}.intro[data-v-cf45d120] p{margin:0}.intro[data-v-cf45d120] p+p{margin-top:10px}dl[data-v-cf45d120]{margin:0}dd[data-v-cf45d120]{margin-left:0}@media screen{.intro[data-v-cf45d120]{color:#fff;padding:30px;background:linear-gradient(120deg,#2b417a,#0e1019)}.body[data-v-cf45d120] p,.body[data-v-cf45d120] ul,.foot[data-v-cf45d120]{opacity:.85}.foot[data-v-cf45d120]:before{color:#fff}@media (min-width:80em){.foot[data-v-cf45d120]{top:calc(100vh - 7.5rem)}}}@media print{h1[data-v-cf45d120]{font-size:2.8rem}h2[data-v-cf45d120]{font-size:1.4rem}}',""])},ZmT5:function(e,t,a){"use strict";function n(e){a("8ciV")}var i=a("Jr/v"),o=a("MufE"),r=a("VU/8"),s=n,c=r(i.a,o.a,!1,s,"data-v-cf45d120",null);t.a=c.exports},aXCK:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,'.experience[data-v-776a1ce3]{page-break-inside:avoid;max-width:50em}.experience+.experience[data-v-776a1ce3]{margin-top:60px}.experience+.experience[data-v-776a1ce3]:before{content:"";border-top:4px solid #1643a9;opacity:.3;margin-top:-28px;margin-bottom:28px;width:30px;display:block}.name[data-v-776a1ce3]{margin:0;font-size:1.25em;line-height:1.2}.name span[data-v-776a1ce3]{margin-right:10px}.name span+span[data-v-776a1ce3]{font-weight:400;display:inline-block}.period[data-v-776a1ce3],.role[data-v-776a1ce3]{margin:0;font-size:1.1em}.period[data-v-776a1ce3]{line-height:1;margin-bottom:5px}.role[data-v-776a1ce3]{margin-top:5px;line-height:1.2;color:#666}.type[data-v-776a1ce3]{font-size:12px;font-size:.75rem;line-height:1;font-weight:500;display:inline-block;padding:2px 4px;background-color:#aaa;color:#fff;text-transform:uppercase;border-radius:3px}.technologies[data-v-776a1ce3]{font-size:.9em}h4[data-v-776a1ce3]{margin:0;font-size:1em}.technologies ul[data-v-776a1ce3]{list-style:none;margin:5px 0 0;padding:0}.technologies li[data-v-776a1ce3]{display:inline}.technologies li+li[data-v-776a1ce3]:before{content:", "}@media print{.type[data-v-776a1ce3]{color:#aaa;border:1px solid;background-color:transparent}.experience+.experience[data-v-776a1ce3]:before{border-color:#000}}',""])},kfwF:function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{height:"32",width:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},[_c("path",{attrs:{d:"M21 26v2.003A1.995 1.995 0 0 1 19.003 30H3.997A2 2 0 0 1 2 27.993V5.007C2 3.898 2.9 3 4.009 3H14v6.002c0 1.111.898 1.998 2.006 1.998H21v2h-8.993A3.003 3.003 0 0 0 9 15.999V23A2.996 2.996 0 0 0 12.007 26H21zM15 3v5.997c0 .554.451 1.003.99 1.003H21l-6-7zm-3.005 11C10.893 14 10 14.9 10 15.992v7.016A2 2 0 0 0 11.995 25h17.01C30.107 25 31 24.1 31 23.008v-7.016A2 2 0 0 0 29.005 14h-17.01zM25 19v-2h4v-1h-5v7h1v-3h3v-1h-3zm-13-1v5h1v-3h1.995a2 2 0 0 0 0-4H12v2zm1-1v2h2.001A.997.997 0 0 0 16 18c0-.552-.443-1-.999-1H13zm5-1v7h2.995A1.998 1.998 0 0 0 23 20.994v-2.988A2.003 2.003 0 0 0 20.995 16H18zm1 1v5h2.001A.997.997 0 0 0 22 21v-3c0-.552-.443-1-.999-1H19z",fill:"currentColor","fill-rule":"evenodd"}})])}}},pAJ3:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("intro",e._b({},"intro",e.about,!1)),a("main",[a("h2",[e._v("Experience")]),e._l(e.experience,function(t){return a("experience-item",e._b({key:t.company+t.start.year},"experience-item",t,!1))}),a("h2",[e._v("Education")]),e._l(e.education,function(t){return a("experience-item",e._b({key:t.name+t.start.year},"experience-item",t,!1))})],2)],1)},i=[],o={render:n,staticRenderFns:i};t.a=o},pHAe:function(e,t){e.exports={name:"Tyom Semonov",title:"Frontend Developer",contact:{email:"tyom@semonov.com",phone:"+44 7984 695 623"},online:["github.com/tyom","linkedin.com/tyoms","twitter.com/tyom"],summary:"A passionate developer with over 13 years of professional experience in building high-traffic complex websites and applications using web standards and best practices for desktops and mobile devices.\n\nGreat attention to detail, code maintainability and performance. A keen learner. Advocate of data-driven, user-centred, accessible, mobile-first design.\n",coreSkills:["JavaScript","Node.js","Webpack","Express","React","CSS/PostCSS/Sass","HTML5","Accessibility","Git","Photoshop, Illustrator, Sketch"],currentFocus:["Node.js","Express","React/Redux","Vue JS"]}},ptRl:function(e,t){e.exports=[{name:"Sumy State University",start:{year:1997},end:{year:2e3},location:"Ukraine",description:"Linguistics and Translation"}]}});
//# sourceMappingURL=index.f8e6500ff3337661e1d8.js.map