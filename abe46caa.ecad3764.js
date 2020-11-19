(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(2),r=n(6),o=(n(0),n(152)),s={id:"vba-userforms-open-part-test",title:"Testing Open new Assembly and Drawing document"},l={unversionedId:"vba-userform/vba-userforms-open-part-test",id:"vba-userform/vba-userforms-open-part-test",isDocsHomePage:!1,title:"Testing Open new Assembly and Drawing document",description:"In this post, we test our Open new Assembly and Drawing document code sample.",source:"@site/docs\\vba-userform\\2020-10-08-testing-open-assembly-and-drawing-document-macro.md",slug:"/vba-userform/vba-userforms-open-part-test",permalink:"/Test-theme/docs/vba-userform/vba-userforms-open-part-test",version:"current",sidebar:"vbaForms",previous:{title:"Open new Assembly and Drawing document",permalink:"/Test-theme/docs/vba-userform/vba-userforms-open--ass-doc"},next:{title:"Browse SOLIDWORKS file(s)",permalink:"/Test-theme/docs/vba-userform/vba-userforms-browse-files"}},p=[{value:"Code block to check",id:"code-block-to-check",children:[]},{value:"Apply check",id:"apply-check",children:[]},{value:"Cause of Error",id:"cause-of-error",children:[]}],c={rightToc:p};function i(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this post, we ",Object(o.b)("strong",{parentName:"p"},"test")," our ",Object(o.b)("strong",{parentName:"p"},"Open new Assembly and Drawing document")," code sample."),Object(o.b)("p",null,"This post is supplement of ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"vba-userforms-open--ass-doc"}),"VBA Userforms - Open new Assembly and Drawing document"))," post."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"Please visit above post before this post.")))),Object(o.b)("p",null,"From ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"vba-userforms-open--ass-doc"}),"VBA Userforms - Open new Assembly and Drawing document"))," post we expect following results :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Open Assembly"),' document when we select "',Object(o.b)("em",{parentName:"p"},"Assembly document"),'".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Open Drawing"),' document when we select "',Object(o.b)("em",{parentName:"p"},"Drawing document"),'".'))),Object(o.b)("p",null,"When we run our ",Object(o.b)("strong",{parentName:"p"},"VBA macro")," we get the expected result."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Now, as a developer, we want to give a thoroughly tested macro/application to our users.")),Object(o.b)("p",null,"For testing our VBA macro, we apply some checks so that macro perform same at all machine."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"code-block-to-check"},"Code block to check"),Object(o.b)("p",null,"Below is code block where we want to apply our check."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-VB"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n\n' Private function of Open New Part Button \nPrivate Sub OpenDocumentButton_Click()\n\n  ' Setting Solidworks variable to Solidworks application\n  Set swApp = Application.SldWorks\n  \n  ' Creating string type variable for storing default Assembly location\n  Dim defaultTemplate As String\n  \n  If DocumentTypeComboBox.Value = \"Assembly Document\" Then\n    ' Setting value of this string type variable to \"Default Assembly template\"\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateAssembly)\n  Else\n    ' Setting value of this string type variable to \"Default drawing template\" without define paper size\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n  End If\n\n  ' Setting Solidworks document to new Assembly document\n  Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n  \n  ' Hiding the Window after opening the selected document\n  OpenDocumentWindow.Hide\n  \n  ' Reset the Index of Combo Box to \"0\" again\n  DocumentTypeComboBox.ListIndex = 0\n    \nEnd Sub\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"apply-check"},"Apply check"),Object(o.b)("p",null,"In above code there is only ",Object(o.b)("strong",{parentName:"p"},"one")," check we apply."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"We need to check if get the template value or not."))),Object(o.b)("p",null,"For this, we need to put an ",Object(o.b)("inlineCode",{parentName:"p"},"If")," condition before opening a new document."),Object(o.b)("p",null,"Please see below code for condition."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),'\' Checking if we got template path\nIf defaultTemplate = vbNullString Then\n    \' If template path is empty then show message and exit from procedure.\n    MsgBox "Failed to open " + DocumentTypeComboBox.Value + " template."\n    Exit Sub\nEnd If\n')),Object(o.b)("p",null,"In above code, we check ",Object(o.b)("em",{parentName:"p"},"if got the template path or not"),"."),Object(o.b)("p",null,"If template path is ",Object(o.b)("strong",{parentName:"p"},"empty")," then "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"we ",Object(o.b)("em",{parentName:"li"},"show a message")," to user as show in below image."),Object(o.b)("li",{parentName:"ol"},"we ",Object(o.b)("strong",{parentName:"li"},"end")," our ",Object(o.b)("inlineCode",{parentName:"li"},"sub")," procedure from here.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"error-message-on-empty-template",src:n(280).default})),Object(o.b)("p",null,"After adding our check, procedure has following code."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),'\' Private function of Open New Part Button\nPrivate Sub OpenDocumentButton_Click()\n\n  \' Setting Solidworks variable to Solidworks application\n  Set swApp = Application.SldWorks\n  \n  \' Creating string type variable for storing default Assembly location\n  Dim defaultTemplate As String\n  \n  If DocumentTypeComboBox.Value = "Assembly Document" Then\n    \' Setting value of this string type variable to "Default Assembly template"\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateAssembly)\n  Else\n    \' Setting value of this string type variable to "Default drawing template" without define paper size\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n  End If\n  \n  \' Checking if we got template path\n  If defaultTemplate = vbNullString Then\n    \' If template path is empty then show message and exit from procedure.\n    MsgBox "Failed to open " + DocumentTypeComboBox.Value + " template."\n    Exit Sub\n  End If\n\n  \' Setting Solidworks document to new Assembly document\n  Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n  \n  \' Hiding the Window aft er opening the selected document\n  OpenDocumentWindow.Hide\n  \n  \' Reset the Index of Combo Box to "0" again\n  DocumentTypeComboBox.ListIndex = 0\n    \nEnd Sub\n')),Object(o.b)("hr",null),Object(o.b)("h2",{id:"cause-of-error"},"Cause of Error"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"You might wondering how can we have such error?")),Object(o.b)("p",null,"We have this error, if the value of templates path is ",Object(o.b)("strong",{parentName:"p"},"not set")," in option setting."),Object(o.b)("p",null,"For reference please see below image."),Object(o.b)("p",null,Object(o.b)("img",{alt:"default-template-options",src:n(281).default})),Object(o.b)("p",null,"As you can see, in my machine these value are already set."),Object(o.b)("p",null,"But they are empty in case of fresh installation."),Object(o.b)("p",null,"Hence if someone runs this macro on fresh SOLIDWORKS copy, they might get error message which we give."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This is it !!!")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"I hope this be will helpful to someone!")),Object(o.b)("p",null,"If you found anything to ",Object(o.b)("strong",{parentName:"p"},"add or update"),", please let me know on my ",Object(o.b)("em",{parentName:"p"},"e-mail")," which is given in bottom."),Object(o.b)("p",null,"this post helps us to ",Object(o.b)("strong",{parentName:"p"},"test")," our ",Object(o.b)("strong",{parentName:"p"},"Open new Assembly and Drawing document")," macro."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"We will see this type of testing of all our macros which we in this website.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you like the post then please share it with your friends also.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Do let me know by you like this post or not!")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Till then, Happy learning!!!")))}i.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),i=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=i(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=i(n),u=a,d=b["".concat(s,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},280:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/error-message-on-empty-template-5361cce7e2fbb020fe05519a878ab8b2.png"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/default-template-options-24282151e7bce2afd8c4ada2cf4914d8.png"}}]);