(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(152)),i={id:"sw-macro-open-asm-and-dwg",title:"Open Assembly and Drawing document"},s={unversionedId:"solidworks-macros/sw-macro-open-asm-and-dwg",id:"solidworks-macros/sw-macro-open-asm-and-dwg",isDocsHomePage:!1,title:"Open Assembly and Drawing document",description:"In this post, we see how to open following documents with Solidworks VBA macro:",source:"@site/docs\\solidworks-macros\\2019-02-8-open-assembly-and-drawing.md",slug:"/solidworks-macros/sw-macro-open-asm-and-dwg",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-open-asm-and-dwg",version:"current",sidebar:"swvba",previous:{title:"Open new Part document",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-open-part"},next:{title:"Selection Methods",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-selection-methods"}},p=[{value:"Open Assembly Document",id:"open-assembly-document",children:[]},{value:"Open Drawing Document without Paper size",id:"open-drawing-document-without-paper-size",children:[]},{value:"Open Drawing Document with Default Paper size",id:"open-drawing-document-with-default-paper-size",children:[]},{value:"Open Drawing Document with Custom Paper size",id:"open-drawing-document-with-custom-paper-size",children:[]}],l={rightToc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this post, we see how to open following documents with ",Object(o.b)("em",{parentName:"p"},"Solidworks VBA macro"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Solidworks Assembly document"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Solidworks Drawing document")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Without")," Pre-defined Sheet size")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"With")," Pre-defined Sheet size")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"With Custom Sheet size")))))),Object(o.b)("h2",{id:"open-assembly-document"},"Open Assembly Document"),Object(o.b)("p",null,"The code for opening ",Object(o.b)("em",{parentName:"p"},"default Assembly document")," is identical to the ",Object(o.b)("em",{parentName:"p"},"default Part template")," with only one change."),Object(o.b)("p",null,"First, let us see the code to open default Assembly document."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default Assembly location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default Assembly template\"\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateAssembly)\n\n    ' Setting Solidworks document to new Assembly document\n    Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n\nEnd Sub\n")),Object(o.b)("p",null,"As you can see in the above code and the code is given in the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"sw-macro-open-part"}),"previous post"))," is almost identically."),Object(o.b)("p",null,"In case you have not read my previous post ",Object(o.b)("strong",{parentName:"p"},"(",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"sw-macro-open-part"}),"Solidworks Macros - Open new Part document"),")"),", I recommend you to read that post first. "),Object(o.b)("p",null,"I have already explained each and every line in this code there. So I will not explain them in this post."),Object(o.b)("p",null,"To open default assembly template, you just need to change ",Object(o.b)("inlineCode",{parentName:"p"},"defaultTemplate")," variable and use ",Object(o.b)("inlineCode",{parentName:"p"},"swDefaultTemplateAssembly")," in place of ",Object(o.b)("inlineCode",{parentName:"p"},"swDefaultTemplatePart"),"."),Object(o.b)("p",null,"With this you can open a new assembly document."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"open-drawing-document-without-paper-size"},"Open Drawing Document without Paper size"),Object(o.b)("p",null,"To open new ",Object(o.b)("em",{parentName:"p"},"Default drawing document")," we use same code as used above but with slight modification."),Object(o.b)("p",null,"If we make similar change as we have done for ",Object(o.b)("em",{parentName:"p"},"Assembly document")," then we open ",Object(o.b)("em",{parentName:"p"},"Default drawing document")," ",Object(o.b)("strong",{parentName:"p"},"without")," specifying sheet size."),Object(o.b)("p",null,"The code sample shows how to do it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default drawing location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default drawing template\" without define paper size\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n\n    ' Setting Solidworks document to new drawing document\n    Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n\nEnd Sub\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"open-drawing-document-with-default-paper-size"},"Open Drawing Document with Default Paper size"),Object(o.b)("p",null,"To open a ",Object(o.b)("em",{parentName:"p"},"new Drawing")," with ",Object(o.b)("strong",{parentName:"p"},"pre-define")," sheet size we use following code sample:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default drawing location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default drawing template\" with pre-define paper size\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n\n    ' Setting Solidworks document to new drawing document\n    Set swDoc = swApp.NewDocument(defaultTemplate, swDwgPaperSizes_e.swDwgPaperA4sizeVertical, 0, 0)\n\nEnd Sub\n")),Object(o.b)("p",null,"This code is ",Object(o.b)("em",{parentName:"p"},"similar")," to what we have used in the ",Object(o.b)("em",{parentName:"p"},"previous section")," but has a ",Object(o.b)("em",{parentName:"p"},"one modification"),"."),Object(o.b)("p",null,"That is while setting the document (at ",Object(o.b)("inlineCode",{parentName:"p"},"Set Doc"),") we ",Object(o.b)("em",{parentName:"p"},"define Paper size or Sheet size"),"."),Object(o.b)("p",null,"I used A4 Sheet with vertical orientation by using ",Object(o.b)("inlineCode",{parentName:"p"},"swDwgPaperSizes_e.swDwgPaperA4sizeVertical")," enumarator."),Object(o.b)("p",null,"You can use other values from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://help.solidworks.com/2013/English/api/swconst/SolidWorks.Interop.swconst~SolidWorks.Interop.swconst.swDwgPaperSizes_e.html"}),"this list"),"."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"open-drawing-document-with-custom-paper-size"},"Open Drawing Document with Custom Paper size"),Object(o.b)("p",null,"To open a new Drawing with ",Object(o.b)("em",{parentName:"p"},"Custom sheet size")," we use following code sample:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default drawing location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default drawing template\" with custom paper size\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n\n    ' Setting Solidworks document to new drawing document\n    Set swDoc = swApp.NewDocument(defaultTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 2, 3)\n\nEnd Sub\n")),Object(o.b)("p",null,"For ",Object(o.b)("em",{parentName:"p"},"custom paper size"),", we need to use ",Object(o.b)("inlineCode",{parentName:"p"},"swDwgPaperSizes_e.swDwgPapersUserDefined")," value of paper size."),Object(o.b)("p",null,"Since we are using custom value, we need to define ",Object(o.b)("strong",{parentName:"p"},"paper width")," and ",Object(o.b)("strong",{parentName:"p"},"paper height")," also."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It important to remember that API use ",Object(o.b)("strong",{parentName:"p"},"Metric system")," only. So you need to use the converted value in defining paper width and paper height."))),Object(o.b)("p",null,"This is all for now. In the next post I will tell you how select a plane in a part document and if possible how to create a skecth segment."))}c.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,s(s({ref:t},l),{},{components:n})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);