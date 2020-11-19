(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(i,".").concat(m)]||c[m]||b[m]||a;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(152)),i={id:"sw-cpp-pre",title:"Prerequisite"},l={unversionedId:"solidworks-Cpp-tutorials/sw-cpp-pre",id:"solidworks-Cpp-tutorials/sw-cpp-pre",isDocsHomePage:!1,title:"Prerequisite",description:"In this post, I tell you what you need to start with Solidworks C++ API:",source:"@site/docs\\solidworks-Cpp-tutorials\\1.cpp-prerequisite.md",slug:"/solidworks-Cpp-tutorials/sw-cpp-pre",permalink:"/Test-theme/docs/solidworks-Cpp-tutorials/sw-cpp-pre",version:"current",sidebar:"swcpp",previous:{title:"Solidworks C++ API",permalink:"/Test-theme/docs/sw-cpp"},next:{title:"Open Solidworks & Hello World",permalink:"/Test-theme/docs/solidworks-Cpp-tutorials/sw-cpp-open"}},p=[{value:"Visual Studio Community edition",id:"visual-studio-community-edition",children:[]},{value:"Knowledge of C++ programming language",id:"knowledge-of-c-programming-language",children:[]}],s={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this post, I tell you what you need to start with ",Object(a.b)("em",{parentName:"p"},"Solidworks C++ API"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Of course, Solidworks is required. Any version will do. But ",Object(a.b)("em",{parentName:"p"},"Solidworks 2016")," or more is preferable.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"We need ",Object(a.b)("em",{parentName:"p"},"Visual studio Community edition")," and we will download it for ",Object(a.b)("strong",{parentName:"p"},"free"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Knowledge of ",Object(a.b)("em",{parentName:"p"},"C++ programming language.")))),Object(a.b)("h2",{id:"visual-studio-community-edition"},"Visual Studio Community edition"),Object(a.b)("p",null,"Since we want to learn ",Object(a.b)("em",{parentName:"p"},"Solidworks C++ API"),". We need Solidworks Software."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"So I assume that you have it otherwise you don't come to this website!"))),Object(a.b)("p",null,"Now we need ",Object(a.b)("em",{parentName:"p"},"Visual Studio Community edition")," and ",Object(a.b)("em",{parentName:"p"},"Visual Studio 2019 Community edition")," is the latest version."),Object(a.b)("p",null,"If you are downloading ",Object(a.b)("em",{parentName:"p"},"1st")," time, then download ",Object(a.b)("em",{parentName:"p"},"2019 version"),"."),Object(a.b)("p",null,"I have ",Object(a.b)("em",{parentName:"p"},"Visual Studo 2017 Community edition")," installed hence I will use ",Object(a.b)("em",{parentName:"p"},"2017 Community version")," which is a ",Object(a.b)("em",{parentName:"p"},"free version")," for learning purpose."),Object(a.b)("p",null,"One benefit of using ",Object(a.b)("em",{parentName:"p"},"Visual Studio")," is that it is a industry standard ",Object(a.b)("strong",{parentName:"p"},"IDE")," hence if someone wants to do a job as ",Object(a.b)("em",{parentName:"p"},"developer")," s/he can use it and have the experience."),Object(a.b)("p",null,"There are lots of videos out there which show you how to download Visual Studio Community edition."),Object(a.b)("p",null,"One such video is shown below. Please go through that video which provide you all steps."),Object(a.b)("div",{class:"youtube-responsive-container"},Object(a.b)("iframe",{src:"https://www.youtube.com/embed/1OsGXuNA5cc",frameborder:"0",allowfullscreen:!0})),Object(a.b)("p",null,"Please note that this video is ",Object(a.b)("strong",{parentName:"p"},"2 years")," old but still relevent, ",Object(a.b)("strong",{parentName:"p"},"URLs")," are same for downloading purpose."),Object(a.b)("p",null,"Benefit of this video is that it is part of ",Object(a.b)("em",{parentName:"p"},"C++ tutorial")," in ",Object(a.b)("em",{parentName:"p"},"Visual studio"),"."),Object(a.b)("h2",{id:"knowledge-of-c-programming-language"},"Knowledge of C++ programming language"),Object(a.b)("p",null,"If you don't have Knowledge of ",Object(a.b)("em",{parentName:"p"},"C++ programming language"),", then you can use any course from ",Object(a.b)("strong",{parentName:"p"},"YouTube"),"."),Object(a.b)("p",null,"I personally find below playlist more useful, so if you like you can learn from below playlist also."),Object(a.b)("div",{class:"youtube-responsive-container"},Object(a.b)("iframe",{src:"https://www.youtube.com/embed/videoseries?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",frameborder:"0",allowfullscreen:!0})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This is it !!!")),Object(a.b)("p",null,"Now we are ready to start our ",Object(a.b)("em",{parentName:"p"},"1st Hello World")," program in ",Object(a.b)("em",{parentName:"p"},"Solidworks")," using ",Object(a.b)("strong",{parentName:"p"},"Solidworks C++ APIs"),"."),Object(a.b)("p",null,"Hope this post helps you to ",Object(a.b)("em",{parentName:"p"},"setup softwares"),"."),Object(a.b)("p",null,"If you like the post then please share it with your friends also."),Object(a.b)("p",null,"Do let me know by you like this post or not! I will continue creating Solidworks C++ posts."),Object(a.b)("p",null,"Till then, Happy learning!!!"))}u.isMDXComponent=!0}}]);