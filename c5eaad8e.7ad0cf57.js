(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(152)),l={id:"vba-variable-life",title:"Public, Static and Variable's Life"},o={unversionedId:"vba/vba-variable-life",id:"vba/vba-variable-life",isDocsHomePage:!1,title:"Public, Static and Variable's Life",description:"In the following sections we will discussed about following topics:",source:"@site/docs\\vba\\2019-01-5-vba-publc-stattic-variable-life.md",slug:"/vba/vba-variable-life",permalink:"/Test-theme/docs/vba/vba-variable-life",version:"current",sidebar:"vba",previous:{title:"Variable Scope",permalink:"/Test-theme/docs/vba/vba-variable-scope"},next:{title:"VBA Constants",permalink:"/Test-theme/docs/vba/vba-constants"}},b=[{value:"Public Variables",id:"public-variables",children:[]},{value:"Static Variables",id:"static-variables",children:[]},{value:"Life of Variables",id:"life-of-variables",children:[]}],c={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the following sections we will discussed about following topics: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Public Variables")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Static Variables")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Life of Variables"))),Object(i.b)("p",null,"Let's look at them one by one."),Object(i.b)("h2",{id:"public-variables"},"Public Variables"),Object(i.b)("p",null,"If you need to make a variable ",Object(i.b)("em",{parentName:"p"},"available")," to all the procedures in all your VBA modules, declare the variable at the module level (in the ",Object(i.b)("em",{parentName:"p"},"Declarations")," section) by using the ",Object(i.b)("inlineCode",{parentName:"p"},"Public")," keyword. "),Object(i.b)("p",null,"For example, in previous figure, if I use ",Object(i.b)("inlineCode",{parentName:"p"},"Public")," in place of ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," in declaration section of ",Object(i.b)("strong",{parentName:"p"},"VBE"),", then you can use those variables in other procedures of same modules, and for other modules also. "),Object(i.b)("p",null,"If you would like a variable to be available to other modules, you must declare the variable as ",Object(i.b)("inlineCode",{parentName:"p"},"Public"),". "),Object(i.b)("p",null,"In practice, sharing a variable across modules is hardly ever done. "),Object(i.b)("p",null,"But I guess it\u2019s nice to know that it can be done. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"static-variables"},"Static Variables"),Object(i.b)("p",null,"Normally, when a procedure ends, all the procedure\u2019s variables are reset. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Static")," variables are a special case because they retain their value even when the procedure ends. "),Object(i.b)("p",null,"You declare a static variable at the ",Object(i.b)("em",{parentName:"p"},"procedure level"),". "),Object(i.b)("p",null,"A static variable may be useful if you need to track the number of times you execute a procedure. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"life-of-variables"},"Life of Variables"),Object(i.b)("p",null,"Nothing lives forever, including ",Object(i.b)("strong",{parentName:"p"},"variables"),". "),Object(i.b)("p",null,"The scope of a variable not only determines where that variable may be used, it also affects under which circumstances the variable is removed from memory. "),Object(i.b)("p",null,"You can ",Object(i.b)("em",{parentName:"p"},"purge")," (remove) all variables from memory by using three methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click the ",Object(i.b)("em",{parentName:"p"},"Reset")," toolbar button (the ",Object(i.b)("em",{parentName:"p"},"little blue")," square button on the ",Object(i.b)("em",{parentName:"p"},"Standard")," toolbar in previous figure).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("inlineCode",{parentName:"p"},"End")," when a ",Object(i.b)("em",{parentName:"p"},"runtime error")," message dialog box shows up.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Include an ",Object(i.b)("inlineCode",{parentName:"p"},"End")," statement anywhere in your code. This is not the same as an ",Object(i.b)("inlineCode",{parentName:"p"},"End Sub")," or ",Object(i.b)("inlineCode",{parentName:"p"},"End Function")," statement. Generally it is an Exit statement. "))),Object(i.b)("p",null,"Otherwise, only procedure-level variables will be removed from memory when the ",Object(i.b)("em",{parentName:"p"},"macro code")," has completed running."),Object(i.b)("p",null,"Static variables, module level variables, and global (",Object(i.b)("inlineCode",{parentName:"p"},"public"),") variables all retain their values in between runs of your code. "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you use ",Object(i.b)("em",{parentName:"p"},"module-level")," or ",Object(i.b)("em",{parentName:"p"},"global-level")," variables, make sure they have the value you expect them to have. You never know whether one of the situations I just mentioned may have caused your variables to lose their content! "))),Object(i.b)("p",null,"Next post will be about ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"VBA Constants")),"."))}s.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);