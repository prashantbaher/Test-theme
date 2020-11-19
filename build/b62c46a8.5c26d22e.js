(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(152)),r={id:"vba-debugger",title:"VBA Debugger"},l={unversionedId:"vba/vba-debugger",id:"vba/vba-debugger",isDocsHomePage:!1,title:"VBA Debugger",description:"In this section, I discuss the details of using the VBA debugging tools.",source:"@site/docs\\vba\\2019-01-7-vba-debugger.md",slug:"/vba/vba-debugger",permalink:"/Test-theme/docs/vba/vba-debugger",version:"current",sidebar:"vba",previous:{title:"Bug Finding",permalink:"/Test-theme/docs/vba/vba-bug-find"},next:{title:"VBA Bug Reduction Tips",permalink:"/Test-theme/docs/vba/vba-bug-tips"}},c=[{value:"Setting breakpoints in your code",id:"setting-breakpoints-in-your-code",children:[{value:"Using the Immediate window",id:"using-the-immediate-window",children:[]},{value:"Stepping through your code",id:"stepping-through-your-code",children:[]}]},{value:"Using the Watch window",id:"using-the-watch-window",children:[]},{value:"Using the Locals window",id:"using-the-locals-window",children:[]}],u={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section, I discuss the details of using the VBA debugging tools. "),Object(i.b)("p",null,"These tools are much more powerful than the techniques I discuss in the previous section. "),Object(i.b)("p",null,"But along with power comes responsibility. Using the debugging tools takes a bit of setup work."),Object(i.b)("h2",{id:"setting-breakpoints-in-your-code"},"Setting breakpoints in your code"),Object(i.b)("p",null,"In earlier sections, I discuss using ",Object(i.b)("inlineCode",{parentName:"p"},"MsgBox")," functions in your code to monitor the values of certain variables. "),Object(i.b)("p",null,"Displaying a message box essentially halts your code in mid-execution, and clicking the ",Object(i.b)("strong",{parentName:"p"},"OK")," button resumes execution."),Object(i.b)("p",null,"Wouldn\u2019t it be nice if you could halt a routine\u2019s execution, take a look at the value of any of your variables, and then continue execution? "),Object(i.b)("p",null,"Well, that\u2019s exactly what you can do by setting a ",Object(i.b)("em",{parentName:"p"},"breakpoint"),". "),Object(i.b)("p",null,"You can set a ",Object(i.b)("em",{parentName:"p"},"breakpoint")," in your VBA code in several ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Move the cursor to the statement at which you want execution to stop; then press ",Object(i.b)("inlineCode",{parentName:"li"},"F9"),"."),Object(i.b)("li",{parentName:"ul"},"Click in the ",Object(i.b)("em",{parentName:"li"},"gray")," margin to the left of the statement at which you want execution to stop. ",Object(i.b)("em",{parentName:"li"},"This is I used mainly.")),Object(i.b)("li",{parentName:"ul"},"Position the insertion point in the statement at which you want execution to stop. Then use the ",Object(i.b)("strong",{parentName:"li"},"Debug -> Toggle Breakpoint")," command."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Right-click")," a statement and choose ",Object(i.b)("strong",{parentName:"li"},"Toggle -> Breakpoint")," from the shortcut menu.")),Object(i.b)("p",null,"The results of setting a breakpoint are shown in below figure. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"VBE")," highlights the line to remind you that you set a breakpoint there; it also inserts a large dot in the gray margin."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Breakpoint-in-procedure",src:n(303).default})),Object(i.b)("p",null,"When you execute the procedure, VBE goes into Break mode before the line with the breakpoint is executed. "),Object(i.b)("p",null,"In ",Object(i.b)("em",{parentName:"p"},"Break mode"),", the word ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"break"))," is displayed in the VBE title bar. "),Object(i.b)("p",null,"To get out of Break mode and continue execution, press ",Object(i.b)("inlineCode",{parentName:"p"},"F5")," or click the ",Object(i.b)("strong",{parentName:"p"},"Run Sub/UserForm")," button in the VBE toolbar."),Object(i.b)("p",null,"To quickly remove a breakpoint, click the large dot in the gray margin or move the cursor to the highlighted line and press ",Object(i.b)("inlineCode",{parentName:"p"},"F9"),". "),Object(i.b)("p",null,"To remove all breakpoints in the module, press ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl+Shift+F9"),"."),Object(i.b)("p",null,"What is Break mode? You can think of it as a state of suspended animation. "),Object(i.b)("p",null,"Your VBA code stops running and the current statement is highlighted in bright yellow. In Break mode, you can"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type VBA statements in the ",Object(i.b)("em",{parentName:"li"},"Immediate window"),"."),Object(i.b)("li",{parentName:"ul"},"Press ",Object(i.b)("inlineCode",{parentName:"li"},"F8")," to step through your code one line at a time to check various things while the program is paused."),Object(i.b)("li",{parentName:"ul"},"Move the mouse pointer over a variable to display its value in a small pop-up window."),Object(i.b)("li",{parentName:"ul"},"Skip the next statement(s) and continue execution there (or even go back a couple of statements)."),Object(i.b)("li",{parentName:"ul"},"Edit a statement and then continue.")),Object(i.b)("p",null,"Below figure shows some debugging action. "),Object(i.b)("p",null,"A breakpoint is set (notice the big dot), and I\u2019m using the ",Object(i.b)("inlineCode",{parentName:"p"},"F8")," key to step through the code line by line (notice the arrow that points to the current statement). "),Object(i.b)("p",null,"I used the ",Object(i.b)("em",{parentName:"p"},"Immediate window")," to print ",Object(i.b)("inlineCode",{parentName:"p"},"Hello world"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Break-mode",src:n(304).default})),Object(i.b)("hr",null),Object(i.b)("h3",{id:"using-the-immediate-window"},"Using the Immediate window"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Immediate window")," may not be visible in the VBE. "),Object(i.b)("p",null,"You can display the VBE\u2019s ",Object(i.b)("em",{parentName:"p"},"Immediate window")," at any time by pressing ",Object(i.b)("inlineCode",{parentName:"p"},"Ctrl+G"),"."),Object(i.b)("p",null,"In Break mode, the Immediate window is particularly useful for finding the current value of any variable in your program. "),Object(i.b)("p",null,"For example, if you want to know the current value of a variable, enter the following in the Immediate window and press ",Object(i.b)("inlineCode",{parentName:"p"},"Enter"),"."),Object(i.b)("p",null,"The Immediate window lets you do other things besides check variable values. "),Object(i.b)("p",null,"For example, you can change the value of a variable, try for a new condition. "),Object(i.b)("p",null,"Just make sure that the command you enter is a valid VBA statement."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stepping-through-your-code"},"Stepping through your code"),Object(i.b)("p",null,"While in ",Object(i.b)("em",{parentName:"p"},"Break mode"),", you can also step through your code line by line. "),Object(i.b)("p",null,"One statement is executed each time you press ",Object(i.b)("inlineCode",{parentName:"p"},"F8"),". "),Object(i.b)("p",null,"Throughout this line-by-line execution of your code, you can activate the Immediate window at any time to check the status of your variables."),Object(i.b)("p",null,"You can use your mouse to change which statement VBA will execute next. "),Object(i.b)("p",null,"If you put your mouse pointer in the gray margin to the left of the currently highlighted statement (which will usually be yellow), your pointer changes to a right-pointing arrow. "),Object(i.b)("p",null,"Simply drag your mouse to the statement you want done next and watch that statement turn yellow."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"using-the-watch-window"},"Using the Watch window"),Object(i.b)("p",null,"In some cases, you may want to know whether a certain variable or expression takes on a particular value. "),Object(i.b)("p",null,"For example, suppose that a procedure loops through ",Object(i.b)("strong",{parentName:"p"},"1,000 times"),". "),Object(i.b)("p",null,"You notice that a problem occurs during the ",Object(i.b)("strong",{parentName:"p"},"800th")," iteration of the loop. "),Object(i.b)("p",null,"Well, you could insert a breakpoint in the loop, but that would mean responding to ",Object(i.b)("strong",{parentName:"p"},"799")," prompts before the code finally gets to the iteration you want to see (and that gets boring real fast). "),Object(i.b)("p",null,"A more efficient solution involves setting a ",Object(i.b)("strong",{parentName:"p"},"watch")," expression."),Object(i.b)("p",null,"For example, you can create a watch expression that puts the procedure into Break mode whenever a certain variable takes on a specific value \u2014 for example, ",Object(i.b)("inlineCode",{parentName:"p"},"AnyNumber=800"),". "),Object(i.b)("p",null,"To create a watch expression, choose ",Object(i.b)("strong",{parentName:"p"},"Debug -> Add Watch")," to display the Add Watch dialog box. See below figure."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Break-mode",src:n(305).default})),Object(i.b)("p",null,"The Add Watch dialog has three parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Expression"),": Enter a valid VBA expression or a variable here. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"AnyNumber=900")," or just ",Object(i.b)("inlineCode",{parentName:"p"},"AnyNumber"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Context"),": Select the procedure and the module you want to watch. Note that you can select All Procedures and All Modules.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Watch Type"),": Select the type of watch by clicking an option button. Your choice here depends on the expression you enter. The first choice, Watch Expression, does not cause a break; it simply displays the expression\u2019s value when a break occurs."))),Object(i.b)("p",null,"Execute your procedure after setting up your watch expression(s). "),Object(i.b)("p",null,"Things run normally until your watch expression is satisfied (based on the Watch Type you specified). "),Object(i.b)("p",null,"When that happens, VBE enters Break mode (you did set the Watch Type to \u201cBreak When Value Is True,\u201d didn\u2019t you?). "),Object(i.b)("p",null,"From there, you can step through the code or use the Immediate window to debug your code."),Object(i.b)("p",null,"When you create a watch, VBE displays the Watches window shown in below figure. "),Object(i.b)("p",null,"This window displays the value of all watches that you\u2019ve defined. "),Object(i.b)("p",null,"In this figure, when the value hit ",Object(i.b)("inlineCode",{parentName:"p"},"800"),", which caused VBE to enter Break mode."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Watch-window-dialog-box-with-all-watches",src:n(306).default})),Object(i.b)("p",null,"The best way to understand how this Watch business works is to use it and try various options. "),Object(i.b)("p",null,"Before long, you\u2019ll probably wonder how you ever got along without it."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"using-the-locals-window"},"Using the Locals window"),Object(i.b)("p",null,"Another useful debugging aid is the Locals window. "),Object(i.b)("p",null,"You can show this window by choosing ",Object(i.b)("strong",{parentName:"p"},"View -> Locals")," Window from the VBE\u2019s menu. "),Object(i.b)("p",null,"When you are in Break mode, this window will show you a list of all variables that are local to the current procedure (see below figure). "),Object(i.b)("p",null,"The nice thing about this window is that you don\u2019t have to add a load of watches manually if you want to look at the content of many variables. "),Object(i.b)("p",null,"The VBE has done all the hard workfor you."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Local-window",src:n(307).default})),Object(i.b)("p",null,"Next post will be about ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"VBA Bug Reduction Tips")),"."))}b.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),h=a,d=s["".concat(r,".").concat(h)]||s[h]||p[h]||i;return n?o.a.createElement(d,l(l({ref:t},u),{},{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1.BreakpointInProcedure-86c18379aced3d14fcd490d0d4278c86.PNG"},304:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2.BreakMode-fe18fe04e9bd9672d46805e138a7d25d.PNG"},305:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3.WatchWindowDialogBox-7226283cec0bbd3205dcdfbdfb90348a.PNG"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4.WatchWindowDialogBoxWithAllWatches-1ef197e85847a1d3a9fc510e873f9a70.PNG"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/5.LocalWindow-3960c15f4074ae124fb1026003c70090.PNG"}}]);