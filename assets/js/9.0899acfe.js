(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{262:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"配置默认主页、目录浏览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置默认主页、目录浏览"}},[t._v("#")]),t._v(" 配置默认主页、目录浏览")]),t._v(" "),n("h2",{attrs:{id:"设置默认主页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置默认主页"}},[t._v("#")]),t._v(" 设置默认主页")]),t._v(" "),n("p",[t._v("直接可以使用目录形式打开的页面称为默认主页，一般常见的有: "),n("code",[t._v("index.html")]),t._v("、"),n("code",[t._v("index.htm")]),t._v("、"),n("code",[t._v("index.php")]),t._v(" 这些，要吧通过配置来完成，如:")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("网站根目录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置默认主页，支持多个，按优先级来，空格分格")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"设置目录浏览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置目录浏览"}},[t._v("#")]),t._v(" 设置目录浏览")]),t._v(" "),n("p",[t._v("当一个目录内没有默认主页的文件时，直接访问目录会报 "),n("code",[t._v("403 Forbidden")]),t._v(" 错误，而启用目录浏览功能后可以直接列出当前目录下的文件、文件夹，如:")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("网站根目录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 优先使用默认主页")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当默认主页不存在时直接列出目录内文件树")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("autoindex")]),t._v(" on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("但多 "),n("code",[t._v("autoindex")]),t._v(" 相关可官方文档: "),n("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_autoindex_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nginx.org/en/docs/http/ngx_http_autoindex_module.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("注意，"),n("strong",[t._v("线上运行环境最好别开启该配置")]),t._v("，因为这将直接暴露你的文件~")])])}),[],!1,null,null,null);s.default=e.exports}}]);