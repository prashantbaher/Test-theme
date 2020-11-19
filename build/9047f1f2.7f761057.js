(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),i=(n(0),n(152)),l={id:"sw-macro-selection-methods",title:"Selection Methods"},r={unversionedId:"solidworks-macros/sw-macro-selection-methods",id:"solidworks-macros/sw-macro-selection-methods",isDocsHomePage:!1,title:"Selection Methods",description:"In this post, we select Default planes with following methods:",source:"@site/docs\\solidworks-macros\\2019-02-13-select-plane-from-tree.md",slug:"/solidworks-macros/sw-macro-selection-methods",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-selection-methods",version:"current",sidebar:"swvba",previous:{title:"Open Assembly and Drawing document",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-open-asm-and-dwg"},next:{title:"Open Saved Documents",permalink:"/Test-theme/docs/solidworks-macros/sw-macro-open-saved-documents"}},c=[{value:"By <strong>SelectByID</strong> method From <strong>ModelDoc2</strong> Interface",id:"by-selectbyid-method-from-modeldoc2-interface",children:[{value:"Using SelectByID method in previous example",id:"using-selectbyid-method-in-previous-example",children:[]},{value:"Using SelectByID method in an Open document",id:"using-selectbyid-method-in-an-open-document",children:[]}]},{value:"By <strong>SelectByID2</strong> method From <strong>IModelDocExtension</strong> Interface",id:"by-selectbyid2-method-from-imodeldocextension-interface",children:[{value:"Using SelectByID2 method in previous example",id:"using-selectbyid2-method-in-previous-example",children:[]},{value:"Using SelectByID2 method in an Open document",id:"using-selectbyid2-method-in-an-open-document",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this post, we select ",Object(i.b)("strong",{parentName:"p"},"Default planes")," with following methods:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"By ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," method From ",Object(i.b)("inlineCode",{parentName:"p"},"ModelDoc2")," Interface")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"By ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," method From ",Object(i.b)("inlineCode",{parentName:"p"},"IModelDocExtension")," Interface"))),Object(i.b)("h2",{id:"by-selectbyid-method-from-modeldoc2-interface"},"By ",Object(i.b)("strong",{parentName:"h2"},"SelectByID")," method From ",Object(i.b)("strong",{parentName:"h2"},"ModelDoc2")," Interface"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," method From ",Object(i.b)("inlineCode",{parentName:"p"},"ModelDoc2")," Interface is the easiest method for selecting Default plane."),Object(i.b)("p",null,"I will explain the use of this method in 2 different scenerio as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Using this method in the previous example of creating a new document and then select a Plane.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Using this method in an open document."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"using-selectbyid-method-in-previous-example"},"Using SelectByID method in previous example"),Object(i.b)("p",null,"In the previous 2 posts, we learned how to create ",Object(i.b)("em",{parentName:"p"},"a new part document, an assembly document, and a drawing document"),"."),Object(i.b)("p",null,"Now we use the same code and ",Object(i.b)("em",{parentName:"p"},"extended")," it for using selecting planes."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n' Boolean Variable\nDim BoolStatus As Boolean\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default part location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default part template\"\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)\n\n    ' Setting Solidworks document to new part document\n    Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n\n    ' Selecting Front Plane\n    BoolStatus = swDoc.SelectByID(\"Front Plane\", \"PLANE\", 0, 0, 0)\n\nEnd Sub\n")),Object(i.b)("p",null,'Above code, 1st create a new part document and then select "',Object(i.b)("strong",{parentName:"p"},"Front Plane"),'" in VBA macro.'),Object(i.b)("p",null,"To select the plane, I have to add 2 lines. 1st I create a boolean varible above main function as shown in below code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),"' Boolean Variable\nDim BoolStatus As Boolean\n")),Object(i.b)("p",null,"Then I use this ",Object(i.b)("inlineCode",{parentName:"p"},"BoolStatus")," variable to selecting ",Object(i.b)("em",{parentName:"p"},"Front Plane")," as shown in below code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),'\' Selecting Front Plane\nBoolStatus = swDoc.SelectByID("Front Plane", "PLANE", 0, 0, 0)\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," takes following parameters:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Name")," : Name of the object or an empty string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Type")," : Type of object in uppercase or an empty string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"X")," : X selection location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Y")," : Y selection location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Z")," : Z selection location"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Return Value")," - If the item is select then this method returns ",Object(i.b)("inlineCode",{parentName:"p"},"True")," and otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"False"),"."),Object(i.b)("p",null,"Since this method returns ",Object(i.b)("inlineCode",{parentName:"p"},"True")," or ",Object(i.b)("inlineCode",{parentName:"p"},"False"),", hence we use a ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," variable to perfom this method."),Object(i.b)("p",null,"If we want to select ",Object(i.b)("strong",{parentName:"p"},"Right Plane")," then we just need to replace ",Object(i.b)("inlineCode",{parentName:"p"},'"Front Plane"')," -> ",Object(i.b)("inlineCode",{parentName:"p"},'"Right Plane"')," in previous code sample."),Object(i.b)("p",null,"Similar for selecting ",Object(i.b)("strong",{parentName:"p"},"Top Plane"),", we need to replace ",Object(i.b)("inlineCode",{parentName:"p"},'"Front Plane"')," -> ",Object(i.b)("inlineCode",{parentName:"p"},'"Top Plane"')," in previous code sample."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"using-selectbyid-method-in-an-open-document"},"Using SelectByID method in an Open document"),Object(i.b)("p",null,"For using ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," method in an open document we use differnet code sample."),Object(i.b)("p",null,"The code sample is given below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n' Boolean Variable\nDim BoolStatus As Boolean\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n        \n    ' Setting Solidworks document to active open document\n    Set swDoc = swApp.ActiveDoc\n        \n    ' Selecting Front Plane\n    BoolStatus = swDoc.SelectByID(\"Front Plane\", \"PLANE\", 0, 0, 0)\n\nEnd Sub\n")),Object(i.b)("p",null,"Most of the things in this code sample is already explained in ",Object(i.b)("strong",{parentName:"p"},"(",Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"sw-macro-open-part"}),"Solidworks Macros - Open new Part document"),")")," post and in previous section of this very post."),Object(i.b)("p",null,"In this code I have set the ",Object(i.b)("em",{parentName:"p"},"Solidworks document variable")," ",Object(i.b)("inlineCode",{parentName:"p"},"swDoc")," to active open document."),Object(i.b)("p",null,"And then we use similar method to select ",Object(i.b)("strong",{parentName:"p"},'"Front Plane"'),"."),Object(i.b)("p",null,"As explained in previous section we can select ",Object(i.b)("strong",{parentName:"p"},"Right Plane")," and ",Object(i.b)("strong",{parentName:"p"},"Top Plane"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"by-selectbyid2-method-from-imodeldocextension-interface"},"By ",Object(i.b)("strong",{parentName:"h2"},"SelectByID2")," method From ",Object(i.b)("strong",{parentName:"h2"},"IModelDocExtension")," Interface"),Object(i.b)("p",null,"This method is similar to ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," from previous section infact it is the ",Object(i.b)("em",{parentName:"p"},"updated version")," of previous method."),Object(i.b)("p",null,"Since it is ",Object(i.b)("em",{parentName:"p"},"updated")," and has ",Object(i.b)("em",{parentName:"p"},"additional functionality"),", I will explain it I ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"frequently"))," use this method. Previous method is easiest method, by far, for selecting objects."),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," is updated version of ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID")," it has similar syntax and usage."),Object(i.b)("p",null,"I will explain the use of ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," method in 2 different scenerio as done in previous method:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Using this method in the previous example of creating a new document and then select a Plane.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Using this method in an open document."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"using-selectbyid2-method-in-previous-example"},"Using SelectByID2 method in previous example"),Object(i.b)("p",null,"Now we use the same code and ",Object(i.b)("em",{parentName:"p"},"extended")," it for using selecting planes by ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," method."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n' Boolean Variable\nDim BoolStatus As Boolean\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n    \n    ' Creating string type variable for storing default part location\n    Dim defaultTemplate As String\n    ' Setting value of this string type variable to \"Default part template\"\n    defaultTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)\n\n    ' Setting Solidworks document to new part document\n    Set swDoc = swApp.NewDocument(defaultTemplate, 0, 0, 0)\n\n    ' Selecting Front Plane\n    BoolStatus = swDoc.Extension.SelectByID2(\"Front Plane\", \"PLANE\", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)\n\nEnd Sub\n")),Object(i.b)("p",null,"This method is doing the ",Object(i.b)("em",{parentName:"p"},"same thing")," which I already explained in the previous method. "),Object(i.b)("p",null,"The difference is in the ",Object(i.b)("em",{parentName:"p"},"syntax")," and ",Object(i.b)("em",{parentName:"p"},"input parameters"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),'\' Selecting Front Plane\nBoolStatus = swDoc.Extension.SelectByID2("Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)\n')),Object(i.b)("p",null,"As you can see from the above code sample, this method is a method of ",Object(i.b)("inlineCode",{parentName:"p"},"Extension")," interface/object."),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"Extension")," interface/object is part of ",Object(i.b)("inlineCode",{parentName:"p"},"swDoc")," variable. This variable is the type of ",Object(i.b)("inlineCode",{parentName:"p"},"ModelDoc2")," interface/object."),Object(i.b)("p",null,"Apart from that, we need to give additional input parameters also."),Object(i.b)("p",null,"Below I have explained about the input parameters of ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," method:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Name")," : Name of the object or an empty string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Type")," : Type of object in uppercase or an empty string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"X")," : X selection location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Y")," : Y selection location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Z")," : Z selection location"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Append")," : ",Object(i.b)("inlineCode",{parentName:"p"},"True")," or ",Object(i.b)("inlineCode",{parentName:"p"},"False"),". It is used the adding the selection into selection list."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Mark")," : Value you want to use as a Mark; this value is used by other functions that require ordered selection."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Callout ")," : Pointer to the ",Object(i.b)("inlineCode",{parentName:"p"},"Callout")," interface/object. (Default value most of the time is ",Object(i.b)("inlineCode",{parentName:"p"},"nothing"),".)"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"SelectOption")," : Selection option. You can use either ",Object(i.b)("inlineCode",{parentName:"p"},"swSelectOptionDefault")," or ",Object(i.b)("inlineCode",{parentName:"p"},"swSelectOptionExtensive")," value."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Return Value")," - If the item is select then this method returns ",Object(i.b)("inlineCode",{parentName:"p"},"True")," and otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"False"),"."),Object(i.b)("p",null,"There is ",Object(i.b)("strong",{parentName:"p"},"a lot more")," about this method in the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Remark"))," section. For more information visit ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"}),"here"),"."),Object(i.b)("p",null,"Since this method returns ",Object(i.b)("inlineCode",{parentName:"p"},"True")," or ",Object(i.b)("inlineCode",{parentName:"p"},"False"),", here also we use a ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," variable to perfom this method."),Object(i.b)("p",null,"If we want to select ",Object(i.b)("strong",{parentName:"p"},"Right Plane")," then we just need to replace ",Object(i.b)("inlineCode",{parentName:"p"},'"Front Plane"')," -> ",Object(i.b)("inlineCode",{parentName:"p"},'"Right Plane"')," in previous code sample."),Object(i.b)("p",null,"Similar for selecting ",Object(i.b)("strong",{parentName:"p"},"Top Plane"),", we need to replace ",Object(i.b)("inlineCode",{parentName:"p"},'"Front Plane"')," -> ",Object(i.b)("inlineCode",{parentName:"p"},'"Top Plane"')," in previous code sample."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"using-selectbyid2-method-in-an-open-document"},"Using SelectByID2 method in an Open document"),Object(i.b)("p",null,"For using ",Object(i.b)("inlineCode",{parentName:"p"},"SelectByID2")," method in an open document we use same code sample as used in previous method."),Object(i.b)("p",null,"The code sample is given below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-vb"}),"Option Explicit\n\n' Creating variable for Solidworks application\nDim swApp As SldWorks.SldWorks\n' Creating variable for Solidworks document\nDim swDoc As SldWorks.ModelDoc2\n' Boolean Variable\nDim BoolStatus As Boolean\n\n' Main function of our VBA program\nSub main()\n\n    ' Setting Solidworks variable to Solidworks application\n    Set swApp = Application.SldWorks\n        \n    ' Setting Solidworks document to active open document\n    Set swDoc = swApp.ActiveDoc\n        \n    ' Selecting Front Plane\n    BoolStatus = swDoc.Extension.SelectByID2(\"Front Plane\", \"PLANE\", 0, 0, 0, False, 0, Nothing, swSelectOption_e.swSelectOptionDefault)\n\nEnd Sub\n")),Object(i.b)("p",null,"Most of the things in this code sample is already explained in ",Object(i.b)("strong",{parentName:"p"},"(",Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"sw-macro-open-part"}),"Solidworks Macros - Open new Part document"),")")," post and in previous section of this very post."),Object(i.b)("p",null,"In this code I have set the ",Object(i.b)("em",{parentName:"p"},"Solidworks document variable")," ",Object(i.b)("inlineCode",{parentName:"p"},"swDoc")," to active open document."),Object(i.b)("p",null,"And then we use similar method to select ",Object(i.b)("strong",{parentName:"p"},'"Front Plane"'),"."),Object(i.b)("p",null,"As explained in previous section we can select ",Object(i.b)("strong",{parentName:"p"},"Right Plane")," and ",Object(i.b)("strong",{parentName:"p"},"Top Plane"),"."),Object(i.b)("p",null,"This is all for now. This post is getting too long."),Object(i.b)("p",null,"In next post we learn about ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Open Saved Documents")),"."))}s.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(u,r(r({ref:t},p),{},{components:n})):a.a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);