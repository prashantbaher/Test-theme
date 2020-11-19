(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(2),r=n(6),o=(n(0),n(152)),b={id:"vba-statement",title:"VBA Assignment Statements And Operators"},c={unversionedId:"vba/vba-statement",id:"vba/vba-statement",isDocsHomePage:!1,title:"VBA Assignment Statements And Operators",description:"An assignment statement is a VBA statement that assigns the result of an expression to a variable or an object.",source:"@site/docs\\vba\\2019-01-5-vba-assignment-statement-and-operator.md",slug:"/vba/vba-statement",permalink:"/Test-theme/docs/vba/vba-statement",version:"current",sidebar:"vba",previous:{title:"VBA String Basics",permalink:"/Test-theme/docs/vba/vba-string-basic"},next:{title:"VBA Arrays",permalink:"/Test-theme/docs/vba/vba-arrays"}},l=[{value:"Operators",id:"operators",children:[{value:"Smooth Operators",id:"smooth-operators",children:[]}]}],s={rightToc:l};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"assignment statement")," is a ",Object(o.b)("em",{parentName:"p"},"VBA statement")," that assigns the result of an expression to a variable or an object. "),Object(o.b)("p",null,"In a book I read Excel\u2019s Help system defines the term expression as: "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'"Combination of keywords, operators, variables, and constants that yields a string, number, or object. An expression can be used to perform a calculation, manipulate characters, or test data." '))),Object(o.b)("p",null,"Much of your work in VBA involves ",Object(o.b)("em",{parentName:"p"},"developing (and debugging)")," expressions. "),Object(o.b)("p",null,"If you know how to create simple formulas in Excel, you\u2019ll have no trouble creating expressions. "),Object(o.b)("p",null,"With a formula, Excel displays the result in a cell. "),Object(o.b)("p",null,"A VBA expression, on the other hand, can be assigned to a variable. "),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For understanding purpose, I used Excel as an example. Please don't get confused with it. "))),Object(o.b)("p",null,"In the assignment statement examples that follow, the expressions are to the right of the equal sign: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"X = 1\nX = x + 1\nX = (y * 2) / (z * 2)\nNumberOfParts = 15\nSelectObject = True\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Expressions")," can be as complex as you need them to be; use the line continuation character (a space followed by an underscore) to make lengthy expressions easier to read. "),Object(o.b)("hr",null),Object(o.b)("h2",{id:"operators"},"Operators"),Object(o.b)("p",null,"As you can see in the VBA uses the equal sign as its ",Object(o.b)("em",{parentName:"p"},"assignment operator"),". "),Object(o.b)("p",null,"You\u2019re probably accustomed to using an ",Object(o.b)("inlineCode",{parentName:"p"},"equal")," sign as a mathematical symbol for equality. "),Object(o.b)("p",null,"Therefore, an assignment statement like the following may cause you to raise your eyebrows: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"x = x + 1\n")),Object(o.b)("p",null,"How can the variable ",Object(o.b)("inlineCode",{parentName:"p"},"x")," be equal to itself plus 1? "),Object(o.b)("p",null,"Answer: It can\u2019t. "),Object(o.b)("p",null,"In this case, the assignment statement is increasing the value of ",Object(o.b)("inlineCode",{parentName:"p"},"x")," by ",Object(o.b)("strong",{parentName:"p"},"1"),". "),Object(o.b)("p",null,"Just remember that an assignment uses the ",Object(o.b)("em",{parentName:"p"},"equal")," sign as an ",Object(o.b)("inlineCode",{parentName:"p"},"operator"),", not a symbol of equality. "),Object(o.b)("hr",null),Object(o.b)("h3",{id:"smooth-operators"},"Smooth Operators"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Operators")," play a major role in VBA. Besides the assignment operator i.e. equal sign (discussed in the previous topic), VBA provides several other operators. "),Object(o.b)("p",null,"Below table lists these operators. "),Object(o.b)("table",{class:"w3-table-all w3-mobile w3-card-4"},Object(o.b)("tr",null,Object(o.b)("th",{class:"w3-center",colspan:"2"},"VBA\u2019s Operators")),Object(o.b)("tr",null,Object(o.b)("th",null,"Function"),Object(o.b)("th",null,"Operator Symbol")),Object(o.b)("tr",null,Object(o.b)("td",null,"Addition"),Object(o.b)("td",null,"+")),Object(o.b)("tr",null,Object(o.b)("td",null,"Multiplication"),Object(o.b)("td",null,"*")),Object(o.b)("tr",null,Object(o.b)("td",null,"Division"),Object(o.b)("td",null,"/")),Object(o.b)("tr",null,Object(o.b)("td",null,"Subtraction"),Object(o.b)("td",null,"-")),Object(o.b)("tr",null,Object(o.b)("td",null,"Exponentiation"),Object(o.b)("td",null,"^")),Object(o.b)("tr",null,Object(o.b)("td",null,"String concatenation"),Object(o.b)("td",null,"&")),Object(o.b)("tr",null,Object(o.b)("td",null,"Integer division (the result is always an integer)"),Object(o.b)("td",null,"\\")),Object(o.b)("tr",null,Object(o.b)("td",null,"Modulo arithmetic (returns the remainder of a division operation)"),Object(o.b)("td",null,"Mod"))),Object(o.b)("p",null,"The term ",Object(o.b)("strong",{parentName:"p"},"concatenation")," is programmer speak for \u201cjoin together\u201d. "),Object(o.b)("p",null,"Thus, if you concatenate strings, you are combining strings to make a new and improved string. "),Object(o.b)("p",null,"VBA also provides a full set of logical operators. Below table, shows some of logical operators. "),Object(o.b)("table",{class:"w3-table-all w3-mobile w3-card-4"},Object(o.b)("tr",null,Object(o.b)("th",{class:"w3-center",colspan:"2"},"VBA\u2019s Logical Operators")),Object(o.b)("tr",null,Object(o.b)("th",null,"Operator"),Object(o.b)("th",null,"What is does")),Object(o.b)("tr",null,Object(o.b)("td",null,"Not"),Object(o.b)("td",null,"Performs a logical negation on an expression.")),Object(o.b)("tr",null,Object(o.b)("td",null,"And"),Object(o.b)("td",null,"Performs a logical conjunction on two expressions.")),Object(o.b)("tr",null,Object(o.b)("td",null,"Or"),Object(o.b)("td",null,"Performs a logical disjunction on two expressions.")),Object(o.b)("tr",null,Object(o.b)("td",null,"XoR"),Object(o.b)("td",null,"Performs a logical exclusion on two expressions.")),Object(o.b)("tr",null,Object(o.b)("td",null,"Eqv"),Object(o.b)("td",null,"Performs a logical equivalence on two expressions.")),Object(o.b)("tr",null,Object(o.b)("td",null,"Imp"),Object(o.b)("td",null,"Performs a logical implication on two expressions."))),Object(o.b)("p",null,"The precedence order for ",Object(o.b)("em",{parentName:"p"},"operators")," in VBA is exactly the same as in ",Object(o.b)("em",{parentName:"p"},"Excel formulas"),". "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exponentiation")," has the highest precedence. ",Object(o.b)("em",{parentName:"p"},"multiplication")," and ",Object(o.b)("em",{parentName:"p"},"division")," come next, followed by ",Object(o.b)("em",{parentName:"p"},"addition")," and ",Object(o.b)("em",{parentName:"p"},"subtraction"),". "),Object(o.b)("p",null,"You can use ",Object(o.b)("em",{parentName:"p"},"parentheses")," to change the natural precedence order, making whatever\u2019s operation in parentheses come before any operator. "),Object(o.b)("p",null,"Take a look at this code: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"z = x + 5 * y\n")),Object(o.b)("p",null,"When this code is executed, what\u2019s the value of ",Object(o.b)("inlineCode",{parentName:"p"},"z"),"? "),Object(o.b)("p",null,"If you answered ",Object(o.b)("strong",{parentName:"p"},"13"),", you get a gold star that proves you understand the concept of operator precedence. "),Object(o.b)("p",null,"If you answered ",Object(o.b)("strong",{parentName:"p"},"16"),", read this: The ",Object(o.b)("em",{parentName:"p"},"multiplication")," operation (5 * y) is performed first, and that result is added to ",Object(o.b)("inlineCode",{parentName:"p"},"x"),". "),Object(o.b)("p",null,"If you answered something other than ",Object(o.b)("strong",{parentName:"p"},"13")," or ",Object(o.b)("strong",{parentName:"p"},"16"),", I have no comment."),Object(o.b)("p",null,"By the way, I can never remember how operator precedence works, so I tend to use parentheses even when they aren\u2019t required. "),Object(o.b)("p",null,"For example, in real life I would write that last assignment statement like this: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"z = x + (5 * y)\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Don\u2019t be shy about using ",Object(o.b)("em",{parentName:"p"},"parentheses")," even if they aren\u2019t required \u2014 especially if doing so makes your code easier to understand. VBA doesn\u2019t care if you use ",Object(o.b)("em",{parentName:"p"},"extra parentheses"),". "))),Object(o.b)("p",null,"Next post will be about ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"VBA Arrays")),"."))}i.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,d=p["".concat(b,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,b=new Array(o);b[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var s=2;s<o;s++)b[s]=n[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);