(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||r;return n?o.a.createElement(d,b(b({ref:t},i),{},{components:n})):o.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(152)),l={id:"vba-prog-concept",title:"Programming Concepts, Comments and Data-types"},b={unversionedId:"vba/vba-prog-concept",id:"vba/vba-prog-concept",isDocsHomePage:!1,title:"Programming Concepts, Comments and Data-types",description:"Visual Basic for application (VBA) is a real, live programming language, it uses many elements common to all programming languages.",source:"@site/docs\\vba\\2019-01-4-vba-programming-concepts-comments-and-datatypes.md",slug:"/vba/vba-prog-concept",permalink:"/Test-theme/docs/vba/vba-prog-concept",version:"current",sidebar:"vba",previous:{title:"Executing Sub and Function Procedures",permalink:"/Test-theme/docs/vba/vba-procedures-exec"},next:{title:"VBA Variables",permalink:"/Test-theme/docs/vba/vba-variables"}},c=[{value:"Comments in VBA Code",id:"comments-in-vba-code",children:[]},{value:"Data types in VBA",id:"data-types-in-vba",children:[]}],i={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Visual Basic for application")," (VBA) is a real, live programming language, it uses many elements common to all programming languages. "),Object(r.b)("p",null,"In subsequent topics, we go through several of these elements: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Comments"),Object(r.b)("li",{parentName:"ul"},"Variables"),Object(r.b)("li",{parentName:"ul"},"Constants"),Object(r.b)("li",{parentName:"ul"},"Data types"),Object(r.b)("li",{parentName:"ul"},"Arrays and few other concepts")),Object(r.b)("p",null,"If you\u2019ve programmed with other languages, some of this topics will be familiar or if you\u2019re a programming ",Object(r.b)("em",{parentName:"p"},"newbie"),", it\u2019s time to roll up your sleeves and get busy. "),Object(r.b)("hr",null),Object(r.b)("h2",{id:"comments-in-vba-code"},"Comments in VBA Code"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," is the simplest type of ",Object(r.b)("inlineCode",{parentName:"p"},"VBA statement")," because ",Object(r.b)("inlineCode",{parentName:"p"},"VBA")," ignores these statements, they can consist of anything you want. "),Object(r.b)("p",null,"You can insert a ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," to ",Object(r.b)("em",{parentName:"p"},"remind")," yourself why you did something or to ",Object(r.b)("em",{parentName:"p"},"clarify")," some particularly code you wrote. "),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," liberally and extensively to describe what the code does (which isn\u2019t always obvious by reading the code itself). "),Object(r.b)("p",null,"Often, code that makes perfect sense today mystifies you tomorrow."),Object(r.b)("p",null,"You begin a ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," with an apostrophe (",Object(r.b)("em",{parentName:"p"},"'"),"). ",Object(r.b)("inlineCode",{parentName:"p"},"VBA")," ignores any text that follows an apostrophe in a line of code."),Object(r.b)("p",null,"You can use a complete line for your ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," or insert your ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," at the end of a line of code. "),Object(r.b)("p",null,"The following example shows a ",Object(r.b)("inlineCode",{parentName:"p"},"VBA")," procedure with three ",Object(r.b)("inlineCode",{parentName:"p"},"comments"),", although they\u2019re not necessarily good comments: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Sub CommentDemo()\n'  This procedure does nothing of value\n   x = 0   'x represents nothing\n   'Display the result\n   MsgBox x\nEnd Sub\n")),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"apostrophe")," indicates a ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," rule has one exception. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VBA")," doesn\u2019t interpret an ",Object(r.b)("em",{parentName:"p"},"apostrophe")," inside a set of quotation marks as a ",Object(r.b)("inlineCode",{parentName:"p"},"comment")," indicator. "),Object(r.b)("p",null,"For example, the following statement doesn\u2019t contain a ",Object(r.b)("inlineCode",{parentName:"p"},"comment"),", even though it has an ",Object(r.b)("em",{parentName:"p"},"apostrophe"),": "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),'MsgBox = "Can\'t continue."\n')),Object(r.b)("p",null,"When you\u2019re writing code, you may want to test a procedure by excluding a particular statement or group of statements. "),Object(r.b)("p",null,"You could ",Object(r.b)("em",{parentName:"p"},"delete")," the statements and then ",Object(r.b)("em",{parentName:"p"},"retype")," them later but that\u2019s a waste of time. "),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"better")," solution is to simply turn those statements into ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," by inserting ",Object(r.b)("em",{parentName:"p"},"apostrophes"),". "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VBA")," ignores statements beginning with ",Object(r.b)("em",{parentName:"p"},"apostrophes")," when executing a routine. "),Object(r.b)("p",null,"To reactivate those ",Object(r.b)("inlineCode",{parentName:"p"},"commented")," statements, just remove the ",Object(r.b)("em",{parentName:"p"},"apostrophes"),"."),Object(r.b)("p",null,"Here\u2019s a quick way to convert a block of statements to ",Object(r.b)("inlineCode",{parentName:"p"},"comments"),". "),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"VBE"),", choose ",Object(r.b)("strong",{parentName:"p"},"View -> Toolbars -> Edit")," to display the ",Object(r.b)("em",{parentName:"p"},"Edit")," toolbar. "),Object(r.b)("p",null,"To convert a block of statements to ",Object(r.b)("inlineCode",{parentName:"p"},"comments"),", select the statements and click the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," Block button. "),Object(r.b)("p",null,"To remove the ",Object(r.b)("em",{parentName:"p"},"apostrophes"),", select the statements and click the ",Object(r.b)("inlineCode",{parentName:"p"},"Uncomment")," Block button."),Object(r.b)("p",null,"Although ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," can be helpful, not all comments are created equal. "),Object(r.b)("p",null,"For example, the following procedure uses lots of ",Object(r.b)("inlineCode",{parentName:"p"},"comments"),", but they add nothing of value. "),Object(r.b)("p",null,"In this case, the code is clear enough without the comments. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"Sub BadComments()\n'  Declare variables\n   Dim x As Integer\n   Dim y As Integer\n   Dim z As Integer\n'  Start the routine\n   x = 100    'Assign 100 to x\n   y = 100    'Assign 100 to y\n'  Add x and y and store in z\n   z = x + y\n'  Show the result\n   MsgBox z\nEnd Sub\n")),Object(r.b)("p",null,"Everyone develops his or her own style of commenting. "),Object(r.b)("p",null,"To be useful, however, ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," should convey information that\u2019s not immediately obvious from reading the code."),Object(r.b)("p",null,"Otherwise, ",Object(r.b)("inlineCode",{parentName:"p"},"comments")," just chew up bytes and make files larger than necessary."),Object(r.b)("p",null,"The following tips can help you make effective use of comments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Briefly describe the purpose of each ",Object(r.b)("inlineCode",{parentName:"p"},"Sub")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," procedure you write.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("em",{parentName:"p"},"comments")," to keep track of changes you make to a procedure.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use a ",Object(r.b)("em",{parentName:"p"},"comment")," to indicate that you\u2019re using a function or a construct in an unusual or nonstandard manner.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use ",Object(r.b)("em",{parentName:"p"},"comments")," to describe the variables you use, especially if you don\u2019t use meaningful variable names.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use a ",Object(r.b)("em",{parentName:"p"},"comment")," to describe any workarounds you develop to overcome bugs in your code.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Write ",Object(r.b)("em",{parentName:"p"},"comments")," as you develop code, instead of saving the task for a final step.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Depending on your work environment, consider adding a joke or two as a comment. The person who takes over your job when you get promoted might appreciate the humour."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"data-types-in-vba"},"Data types in VBA"),Object(r.b)("p",null,"When I talk about ",Object(r.b)("inlineCode",{parentName:"p"},"data type"),", I\u2019m referring to the manner in which a program stores data in memory - for example, as ",Object(r.b)("inlineCode",{parentName:"p"},"integers"),", ",Object(r.b)("inlineCode",{parentName:"p"},"real numbers"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"strings"),". "),Object(r.b)("p",null,"Although ",Object(r.b)("inlineCode",{parentName:"p"},"VBA")," can take care of these details automatically, it does so at a cost (There\u2019s no free lunch). "),Object(r.b)("p",null,"Letting ",Object(r.b)("inlineCode",{parentName:"p"},"VBA")," handle your data typing results in ",Object(r.b)("em",{parentName:"p"},"slower execution")," and ",Object(r.b)("em",{parentName:"p"},"inefficient memory")," use. "),Object(r.b)("p",null,"For ",Object(r.b)("em",{parentName:"p"},"small applications"),", this usually doesn\u2019t present much of a problem. "),Object(r.b)("p",null,"But for ",Object(r.b)("em",{parentName:"p"},"large or complex applications"),", which may be slow or need to conserve every last byte of memory, you need to be on familiar terms with ",Object(r.b)("inlineCode",{parentName:"p"},"data types"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VBA")," automatically handles all the ",Object(r.b)("em",{parentName:"p"},"data")," details, which makes life easier for programmers. "),Object(r.b)("p",null,"Not all programming languages provide this luxury. "),Object(r.b)("p",null,"For example, some languages are strictly typed, which means the programmer must explicitly define the data type for every variable used."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VBA")," does not require that you declare the variables that you use, but it\u2019s definitely a good practice. "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"VBA")," has a variety of built-in ",Object(r.b)("em",{parentName:"p"},"data types"),". Below table lists the most common types of data that VBA can handle. "),Object(r.b)("table",{class:"w3-table-all w3-mobile  w3-card-4"},Object(r.b)("tr",null,Object(r.b)("th",{class:"w3-center",colspan:"3"},"VBA\u2019s Built-In Data Types")),Object(r.b)("tr",null,Object(r.b)("th",null,"Data Type"),Object(r.b)("th",null,"Byte used"),Object(r.b)("th",null,"Range of values")),Object(r.b)("tr",null,Object(r.b)("td",null,"Boolean"),Object(r.b)("td",null,"2"),Object(r.b)("td",null,"True or False")),Object(r.b)("tr",null,Object(r.b)("td",null,"Integer"),Object(r.b)("td",null,"2"),Object(r.b)("td",null,"\u201332,768 to 32,767")),Object(r.b)("tr",null,Object(r.b)("td",null,"Long"),Object(r.b)("td",null,"4"),Object(r.b)("td",null,"\u20132,147,483,648 to 2,147,483,647")),Object(r.b)("tr",null,Object(r.b)("td",null,"Single"),Object(r.b)("td",null,"4"),Object(r.b)("td",null,"\u20133.402823E38 to 1.401298E45")),Object(r.b)("tr",null,Object(r.b)("td",null,"Double (negative)"),Object(r.b)("td",null,"8"),Object(r.b)("td",null,"\u20131.79769313486232E308 to \u20134.94065645841247E-324")),Object(r.b)("tr",null,Object(r.b)("td",null,"Double (positive)"),Object(r.b)("td",null,"8"),Object(r.b)("td",null,"4.94065645841247E\u2013324 to  1.79769313486232E308")),Object(r.b)("tr",null,Object(r.b)("td",null,"Currency"),Object(r.b)("td",null,"8"),Object(r.b)("td",null,"\u2013922,337,203,685,477.5808 to 922,337,203,685,477.5807")),Object(r.b)("tr",null,Object(r.b)("td",null,"Date"),Object(r.b)("td",null,"8"),Object(r.b)("td",null,"1/1/100 to 12/31/9999")),Object(r.b)("tr",null,Object(r.b)("td",null,"String"),Object(r.b)("td",null,"1 per char"),Object(r.b)("td",null,"varies")),Object(r.b)("tr",null,Object(r.b)("td",null,"Object"),Object(r.b)("td",null,"4"),Object(r.b)("td",null,"Any defined object")),Object(r.b)("tr",null,Object(r.b)("td",null,"Variant"),Object(r.b)("td",null,"Varies"),Object(r.b)("td",null,"Any data type")),Object(r.b)("tr",null,Object(r.b)("td",null,"User defined"),Object(r.b)("td",null,"Varies"),Object(r.b)("td",null,"Varies"))),Object(r.b)("p",null,"Next post will be about ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"VBA Variables")),"."))}p.isMDXComponent=!0}}]);