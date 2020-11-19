(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{152:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},229:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/1.VariableExamples-8d70943c64958fbaf96ca837f6ff063d.PNG"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(152)),o={id:"vba-variable-scope",title:"Variable Scope"},l={unversionedId:"vba/vba-variable-scope",id:"vba/vba-variable-scope",isDocsHomePage:!1,title:"Variable Scope",description:"A variable\u2019s scope determines which modules and procedures can use the variable.",source:"@site/docs\\vba\\2019-01-5-vba-variable-scope.md",slug:"/vba/vba-variable-scope",permalink:"/Test-theme/docs/vba/vba-variable-scope",version:"current",sidebar:"vba",previous:{title:"Declaring and Scoping of Variables",permalink:"/Test-theme/docs/vba/vba-variables-decl"},next:{title:"Public, Static and Variable's Life",permalink:"/Test-theme/docs/vba/vba-variable-life"}},b=[{value:"Procedure-only Variables",id:"procedure-only-variables",children:[]},{value:"Module-only Variables",id:"module-only-variables",children:[]}],c={rightToc:b};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"variable\u2019s")," scope determines which modules and procedures can use the variable."),Object(i.b)("h2",{id:"procedure-only-variables"},"Procedure-only Variables"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"lowest")," level of scope for a variable is at the ",Object(i.b)("strong",{parentName:"p"},"procedure")," level. "),Object(i.b)("p",null,"A procedure is either a ",Object(i.b)("inlineCode",{parentName:"p"},"Sub")," or a ",Object(i.b)("inlineCode",{parentName:"p"},"Function")," procedure. "),Object(i.b)("p",null,"Variables declared with this scope can be used only in the procedure in which they are declared. "),Object(i.b)("p",null,"When the procedure ends, the variable no longer exists (it goes to the great big bucket in the sky), and your ",Object(i.b)("strong",{parentName:"p"},"CAD")," application frees up its memory. "),Object(i.b)("p",null,"If you execute the procedure again, the variable comes back to life, but its previous value is lost."),Object(i.b)("p",null,"The most common way to declare a ",Object(i.b)("em",{parentName:"p"},"procedure-only")," variable is with a ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," statement. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Dim")," doesn\u2019t refer to the mental capacity of the VBA designers. "),Object(i.b)("p",null,"Rather, it\u2019s an old programming term that\u2019s short for dimension, which simply means you are setting aside memory for a particular variable. "),Object(i.b)("p",null,"You usually place ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," statements immediately after the ",Object(i.b)("inlineCode",{parentName:"p"},"Sub")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Function")," statement and before the procedure\u2019s code. "),Object(i.b)("p",null,"The following example shows some procedure-only variables declared by using ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," statements: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-vb"}),"Sub MySub()\n  Dim x As Integer\n  Dim First As Long\n  Dim PartDimension As Single\n  Dim myValue\n' ...[The procedure\u2019s code goes here]...\nEnd Sub \n")),Object(i.b)("p",null,"Notice that the last ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," statement in the preceding example doesn\u2019t declare a data type; it declares only the variable itself. The effect is that the variable ",Object(i.b)("inlineCode",{parentName:"p"},"MyValue")," is a ",Object(i.b)("em",{parentName:"p"},"Variant"),"."),Object(i.b)("p",null,"By the way, you can also declare several variables with a single ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," statement, as in the following example: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-vb"}),"Dim x As Integer, y As Integer, z As Integer\nDim First As Long, Last As Double\n")),Object(i.b)("p",null,"Unlike some languages, ",Object(i.b)("strong",{parentName:"p"},"VBA")," doesn\u2019t allow you to declare a ",Object(i.b)("em",{parentName:"p"},"group")," of variables to be a particular ",Object(i.b)("em",{parentName:"p"},"data type")," by separating the variables with ",Object(i.b)("strong",{parentName:"p"},"commas"),". "),Object(i.b)("p",null,"For example, though valid, the following statement does not declare all the variables as ",Object(i.b)("em",{parentName:"p"},"Integers"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-vb"}),"Dim i, j, k As Integer\n")),Object(i.b)("p",null,"In this example, only ",Object(i.b)("inlineCode",{parentName:"p"},"k")," is declared to be an ",Object(i.b)("em",{parentName:"p"},"Integer"),"; the other variables are declared to be ",Object(i.b)("em",{parentName:"p"},"Variants"),". "),Object(i.b)("p",null,"If you declare a variable with ",Object(i.b)("em",{parentName:"p"},"procedure-only")," scope, other procedures in the same module can use the same variable name, but each instance of the variable is unique to its own procedure."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In general, variables declared at the ",Object(i.b)("em",{parentName:"p"},"procedure level")," are the most efficient because ",Object(i.b)("strong",{parentName:"p"},"VBA")," frees up the memory they use when the procedure ends."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"module-only-variables"},"Module-only Variables"),Object(i.b)("p",null,"Sometimes, you want a ",Object(i.b)("em",{parentName:"p"},"variable")," to be available to ",Object(i.b)("em",{parentName:"p"},"all procedures")," in a module. "),Object(i.b)("p",null,"If so, just declare the ",Object(i.b)("em",{parentName:"p"},"variable")," (using ",Object(i.b)("inlineCode",{parentName:"p"},"Dim")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Private"),") before the module\u2019s first ",Object(i.b)("inlineCode",{parentName:"p"},"Sub")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Function")," statement \u2014 outside any procedures. "),Object(i.b)("p",null,"This is done in the ",Object(i.b)("strong",{parentName:"p"},"Declarations")," section, at the ",Object(i.b)("em",{parentName:"p"},"beginning")," of your module. "),Object(i.b)("p",null,"This is also where the ",Object(i.b)("inlineCode",{parentName:"p"},"Option Explicit")," statement is located. "),Object(i.b)("p",null,"Below figure shows how you know when you\u2019re working with the ",Object(i.b)("strong",{parentName:"p"},"Declarations")," section. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"Variable-Scope-Example",src:a(229).default})),Object(i.b)("p",null,"As shown in above image, I want a variable named ",Object(i.b)("inlineCode",{parentName:"p"},"swApp"),", so that it can available to all procedures in this module. "),Object(i.b)("p",null,"Hence I declare this variable in ",Object(i.b)("strong",{parentName:"p"},"Declaration")," section of ",Object(i.b)("strong",{parentName:"p"},"VBE"),". "),Object(i.b)("p",null,"Next post wil be about ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Public, Static and Variable's Life")),"."))}p.isMDXComponent=!0}}]);