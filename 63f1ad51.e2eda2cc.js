(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),s=a,f=p["".concat(b,".").concat(s)]||p[s]||m[s]||o;return n?r.a.createElement(f,u(u({ref:t},l),{},{components:n})):r.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,b=new Array(o);b[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,b[1]=u;for(var l=2;l<o;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},254:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACaCAYAAACEyNJzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAmtSURBVHhe7d3LbttWHoBxbQYz72PACz9JYczCKz9Dd15660fw3sg2eyNNmyCJc784TpOmRVF01zfg8FCkdEhTiqhImr/k3wd8iHgV6cCfjo5lePT3338Xf/75Z/HHH38UX79+Lb58+VJ8/vy5+PXXX4tPnz4VNzc3xcePH4vr6+vKDx8+kCQH+P79+4nNuqapqa+ps6m3qb2//fZb1eO//vqrGP338IeCJBnL33//fRxoAEAcUpfTLIZAA0AwUpfT1IdAA0AwUpfTfLVAA0AwUpffvHkj0AAQjdTlV69eCTQARCN1+cWLFwINANFIXX7+/LlAA0A0UpefPXsm0AAQjdTlp0+fCjQAfC+j0agK6iyq2Jb7LErq8pMnTwYG+uasOCifJD1R5cFZcVNvWinV8xwUZ2s5OQCslhTgf/37P72RnrdtFqnLjx8/HhDonmjePz4u7tePv4/7xbEgA9hi+kK8TJwTqcuPHj1aNNA3xdnBqDheTY17EGgA208e5GXjnEhd/uWXXxYMdDV6njdaHgf2+PigGDX7taZDsmNvrU/HNsul1atAHuz68dnxZJ+DvOTZ+Q7OzrLjxi8qzTHre3EBgClNmJeNc2J4oLP55puzFOIUvjyieTjzwKbF43rbgutby+Nzj8OdFlOom+CPtzWbxtdVH5f2U2UAG+b/E+hbI+huRLPAtkbJtSmWs9Z3j5937ny588Jxa1t5/tZoGwDWSBPn9G/+eCjDAn0rkok5Ee0Nesms9bfOP+fc+fK8QNfc1KN9g2kA66QvyMtGemCgm9Dlcf1WRPtGr/PWz4jwN7fNmOLISOuNpAGsi3khnrdtFoMDXVHN/06nJ6bR60a0pJ5imOw/rWjv+vvH+fKigU6L+Q8Psx8Stq61b9QOAKshdWZegNO2tM+iLBfo6MycQgGA7WEnA12Nwtf1240AsCF2JNDtzzqbygCwC+zkCBoAdgGBBoCgCDQABEWgASAoAg0AQRFoAAiKQANAUAQaAILSCvQ///xDkgyiQJNkUAWaJIMq0CQZVIEmyaAKNEkGVaBJMqgCTZJBFWiSDKpAk2RQBZokgyrQJMM4+vH9nbDv3vsUaJJh7IvZLtp3730ODvTF0ag4usjXXRRHo/3i9Cpbd3FUjI4u+rd9j1enxf4qz7f1pq9v85fMj4qL3n3I7bEJ2NevX3fStQd6Gt96uYrmqNg/vZqsuzrdr5eXCfSKo77LXpxOvk7phTP/PyC3UYFuOzzQKcj7p8VVvZxifHRarptE+6o43W8CK9Cbcvqi2L+d3AYFuu3wQLcC3DxOUW3eYncfl9vLkV4aZae34nlE0qhv/Pa8dDIl0l033ndsHu/03NN929Mu422tdWnk37yw1KP+28fm5+8ujx8fHe2Xx3SnE+r9TsvnqM85/z6zY7KvTbqOFNq+c7SvufP8+b2RW6xAt10i0Pk8dBmZOgwXZbiqkLWmQFKEyqA08UjbeudK61hlIZxGMjfb1p1q6drZ3rrm8pomUW7Na3efu3tds6YRxtsmz7fwfXa/Ntn5W+fIjxtvm+zXeUdDbrNrC/T5YfX9NXavOLnMtl2eFHt7J8XlZP/L4mSv3K+1bjVuJNCT+DX/luuat9jtt9qdsPSEZvpFy8OVH5ObbatHlP3BTKZ9s8A1EauOa8ezHe9Z19vdljvvuNKF7nPOcmv0XJu/GGQvROQ2u5ZAV3E+LM6b5RTkPNKdQJ8flt9fh+fT41foZgJdj9ou0vxzPhI9Os2mP5Lfik4TykXnrW9va6YEJteR2fuiselAL3yfi56D3F1XH+g0Gu6MmJMp2k2Es0BfnuytZeTcuJlAT+Z/u0FJ6/KQzIlOGvm1RrXNft1jcvu3tUftmem8+0fl6Ll7Dd0pjjyg2bZq5LvMdWXLC9/nvOX0eMa7BfHmDrnyQFej5Wz03Le+CXR3pL0GNxToeuTamfusfhjWers9LzpN5Es7Ea3Ok9bfeuueHd+aNpgdqNvXVFpFrTk2v77S/LxH5XW1ItnZd+Iy9znvmJ7l1jWna6vvSaC5Q64l0L0j4vPiMA909r11eN7dd3VuLNDb4nT6gmR01xLoRUbQzZx0GkVv/xTHlphGl51RPsm4rjzQA+egm09w7J1ctvdfkQJd2TdHTjK6qw906cBPcdzavkIFmuTWupZAJ6tIN/PMnfh2A11afZpjDT8wFGiSW+vaAh1EgSa5tQp0W4EmGUaBbivQJMMo0G0FmmQYm4Dtun333qdAkwxjX8x20b5771OgSTKoAk2SQRVokgyqQJNkUAWaJIMq0CQZVIEmGcZ79+7dCfvuvU+BJhnGFK++38DbJQWa5FYq0G0FmmQYBbqtQJMMo0C3FWiSYRTotgJNMozLBHr856maP2c1Kg7P+/dbqT1/JmtRBZrkVjo00FWcW6E8Lw43EWmBJnnXHBboy+Jkbz1/ffubCjTJu+agQH8jkueH02mPydRHfcxJtm062h6Pvm+tT8dM1tcvCAJN8q65ykC3bPatY9uKb3WONBrvxjrFuDNKz88j0CTvkisNdB3jZkRczVV3j/lWcLvnqCyDfT5j/wUUaJJb6aBAz52DbkbA9fKsEC8U6MPivG+9QJO8Sw4L9LxPcaR/s7CeH84fQc+d4ujOR5fnFWiSd82hgU7O+hx0d/38QKflcdy752mvr0flAk3yrrlMoLdNgSa5lQp0W4EmGUaBbivQJMMo0G0FmmQYBbqtQJMMY4rXXbDv3vsUaJIMqkCTZFAFmiSDKtAkGVSBJsmgCjRJBlWgSTKoAk2SQRVokgyqQJNkUAWaJIMq0CQZVIEmyaAKNEkGVaBJMqgCTZJBFWiSDKpAk2RQBZokgyrQJBlUgSbJoAo0SQZVoEkyqAJNkkEVaJIMqkCTZFAFmiSDKtAkGVSBJsmgCjRJBlWgSTKoAk2SQR0c6NGP70mS32lfX7suFWgAwPIINAAEZSOBHo1G9SMAwKIINAAERaABICgCDQBBEWgACIpAA0BQBBoAgiLQABAUgQaAoAg0AARFoAEgKAINAEERaAAIykYCDQAYjkADQFAEGgCCMiTQP//887BAkyS/z76+dh0caJLkZhRokgxq6vKgOWiS5GYUaJIMauryo0ePBJoko5m6/PjxY4EmyWimLj958kSgSTKaqctPnz4VaJKMZury1dWVQJNkNFOXX758OQ40STKWb9++LUafP38urq+vi3fv3hWvX78uXrx4UQ2t0/xHmqROP0lMH/dIv9Xy8OHD4qeffioePHhAklzS1NHU09TV1NfU2dTbZ8+eVQ1+8+ZN2eXr4n9I3n2VBbRmxwAAAABJRU5ErkJggg=="},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),o=(n(0),n(152)),b={id:"vba-input-box",title:"VBA InputBox Function"},u={unversionedId:"vba/vba-input-box",id:"vba/vba-input-box",isDocsHomePage:!1,title:"VBA InputBox Function",description:"The VBA's InputBox function is useful for obtaining a single piece of information from the user.",source:"@site/docs\\vba\\2019-01-8-vba-inputbox-function.md",slug:"/vba/vba-input-box",permalink:"/Test-theme/docs/vba/vba-input-box",version:"current",sidebar:"vba",previous:{title:"VBA MsgBox Function",permalink:"/Test-theme/docs/vba/vba-msgbx-box"},next:{title:"VBA GetOpenFilename, GetSaveAsFilename and Getting a Folder Name",permalink:"/Test-theme/docs/vba/vba-open-boxes"}},i=[{value:"InputBox syntax",id:"inputbox-syntax",children:[]},{value:"An InputBox example",id:"an-inputbox-example",children:[]}],l={rightToc:i};function c(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,b,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The VBA's ",Object(o.b)("inlineCode",{parentName:"p"},"InputBox")," function is useful for obtaining a single piece of information from the user. "),Object(o.b)("p",null,"That information could be ",Object(o.b)("em",{parentName:"p"},"a value"),", ",Object(o.b)("em",{parentName:"p"},"a text string"),", or even ",Object(o.b)("em",{parentName:"p"},"a range address"),". "),Object(o.b)("p",null,"This is a good alternative to developing a ",Object(o.b)("inlineCode",{parentName:"p"},"UserForm")," when you need to get only one value."),Object(o.b)("h2",{id:"inputbox-syntax"},"InputBox syntax"),Object(o.b)("p",null,"Here\u2019s a simplified version of the syntax for the ",Object(o.b)("em",{parentName:"p"},"InputBox")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),"' InputBox syntax\nInputBox(prompt[, title][, default])\n")),Object(o.b)("p",null,"The InputBox function accepts the arguments listed in below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Arguments"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"What it means"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"prompt"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text displayed in the input box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text displayed in the input box\u2019s title bar (optional).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The default value for the user\u2019s input (optional)")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"an-inputbox-example"},"An InputBox example"),Object(o.b)("p",null,"Here\u2019s an example showing how you can use the ",Object(o.b)("em",{parentName:"p"},"InputBox")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),'\' InputBox example\nTheName = InputBox("What is your name?", "Greetings")\n')),Object(o.b)("p",null,"When you execute this VBA statement, application displays the dialog box shown in below figure. "),Object(o.b)("p",null,"Notice that this example uses only the first two arguments and does not supply a default value. "),Object(o.b)("p",null,"When the user enters a value and clicks ",Object(o.b)("inlineCode",{parentName:"p"},"OK"),", the routine assigns the value to the variable ",Object(o.b)("inlineCode",{parentName:"p"},"TheName"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"A-Simple-Message-Box",src:n(254).default})),Object(o.b)("p",null,"Please note that VBA\u2019s ",Object(o.b)("em",{parentName:"p"},"InputBox function")," always returns a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),", so if you need to get a value, your code will need to do some additional checking. "),Object(o.b)("p",null,"The following example uses the ",Object(o.b)("em",{parentName:"p"},"InputBox function")," to get a number. "),Object(o.b)("p",null,"It uses the ",Object(o.b)("inlineCode",{parentName:"p"},"IsNumeric")," function to check whether the ",Object(o.b)("em",{parentName:"p"},"string")," is a ",Object(o.b)("em",{parentName:"p"},"number"),". "),Object(o.b)("p",null,"If the string does contain a number, all is fine. "),Object(o.b)("p",null,"If the user\u2019s entry cannot be interpreted as a number, the code displays a message box."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-vb"}),'\' InputBox example\nSub GetDrawingSheetNumber()\n  Dim NumberOfSheets as String\n  Prompt = "How many sheets drawing have?"\n  NumberOfSheets = InputBox (Prompt)\n\n  If NumberOfSheets = "" Then Exit Sub\n  If (IsNumeric)NumberOfSheets Then\n    \'......[Some code here]....\n    Else\n    MsgBox "Please enter a number."\n  End If\nEnd Sub\n')))}c.isMDXComponent=!0}}]);