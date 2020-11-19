(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{152:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return j}));var l=n(0),b=n.n(l);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,b=function(t,e){if(null==t)return{};var n,l,b={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var o=b.a.createContext({}),s=function(t){var e=b.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},i=function(t){var e=s(t.components);return b.a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},O=b.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=a(t,["components","mdxType","originalType","parentName"]),i=s(n),O=l,j=i["".concat(u,".").concat(O)]||i[O]||d[O]||r;return n?b.a.createElement(j,c(c({ref:e},o),{},{components:n})):b.a.createElement(j,c({ref:e},o))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,u=new Array(r);u[0]=O;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c.mdxType="string"==typeof t?t:l,u[1]=c;for(var o=2;o<r;o++)u[o]=n[o];return b.a.createElement.apply(null,u)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},95:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return a})),n.d(e,"default",(function(){return s}));var l=n(2),b=n(6),r=(n(0),n(152)),u={id:"vba-functions-adv",title:"VBA Functions that do more"},c={unversionedId:"vba/vba-functions-adv",id:"vba/vba-functions-adv",isDocsHomePage:!1,title:"VBA Functions that do more",description:"A few VBA functions go above and beyond the call of duty. Rather than simply return a value, these functions have some useful side effects.",source:"@site/docs\\vba\\2019-01-6-vba-more-function.md",slug:"/vba/vba-functions-adv",permalink:"/Test-theme/docs/vba/vba-functions-adv",version:"current",sidebar:"vba",previous:{title:"VBA Functions",permalink:"/Test-theme/docs/vba/vba-functions"},next:{title:"Controlling Program Flow and Making Decisions",permalink:"/Test-theme/docs/vba/vba-program-flow"}},a=[{value:"Discovering VBA functions",id:"discovering-vba-functions",children:[]}],o={rightToc:a};function s(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(l.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A few VBA ",Object(r.b)("inlineCode",{parentName:"p"},"functions")," go above and beyond the call of duty. Rather than simply return a value, these functions have some useful side effects. "),Object(r.b)("p",null,"Below table lists them."),Object(r.b)("table",{class:"w3-table-all w3-mobile w3-card-4"},Object(r.b)("tr",null,Object(r.b)("th",{class:"w3-center",colspan:"2"},"Functions with Useful Side Benefits")),Object(r.b)("tr",null,Object(r.b)("th",null,"Function"),Object(r.b)("th",null,"What is does")),Object(r.b)("tr",null,Object(r.b)("td",null,"MsgBox"),Object(r.b)("td",null,"Displays a handy dialog box containing a message and buttons. The function returns a code that identifies which button the user clicks.")),Object(r.b)("tr",null,Object(r.b)("td",null,"InputBox"),Object(r.b)("td",null,"Displays a simple dialog box that asks the user for some input. The function returns whatever the user enters into the dialog box.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Shell"),Object(r.b)("td",null,"Executes another program. The function returns the task ID (a unique identifier) of the other program (or an error if the function can\u2019t start the other program).")),Object(r.b)("tr",null,Object(r.b)("td",null,"GetObject/CreateObject"),Object(r.b)("td",null,"Returns/Create a reference to an object provided by an ActiveX component. (If you don't understand, don't bother about it. Just remember we use this function to for checking & creating objects in later topics)"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"discovering-vba-functions"},"Discovering VBA functions"),Object(r.b)("p",null,"How do we find out which function does VBA provides? "),Object(r.b)("p",null,"The best source is the ",Object(r.b)("em",{parentName:"p"},"Visual Basic Help system")," in build in your CAD Application. "),Object(r.b)("p",null,"I compiled a partial list of ",Object(r.b)("inlineCode",{parentName:"p"},"functions"),", which I share with you in following Table. "),Object(r.b)("p",null,"I omitted some of the more specialized or obscure functions. "),Object(r.b)("p",null,"For complete details on a particular function, type the function name into a VBA module, move the cursor anywhere in the text, and press ",Object(r.b)("inlineCode",{parentName:"p"},"F1"),". "),Object(r.b)("table",{class:"w3-table-all w3-mobile w3-card-4"},Object(r.b)("tr",null,Object(r.b)("th",{class:"w3-center",colspan:"2"},"VBA\u2019s Most Useful Built-In Functions")),Object(r.b)("tr",null,Object(r.b)("th",null,"Function"),Object(r.b)("th",null,"What is does")),Object(r.b)("tr",null,Object(r.b)("td",null,"Abs"),Object(r.b)("td",null,"Returns a number\u2019s absolute value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Array"),Object(r.b)("td",null,"Returns a variant containing an array.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Asc"),Object(r.b)("td",null,"Converts the first character of a string to its ASCII value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Atn"),Object(r.b)("td",null,"Returns the arctangent of a number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Choose"),Object(r.b)("td",null,"Returns a value from a list of items.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Chr"),Object(r.b)("td",null,"Converts an ANSI value to a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cos"),Object(r.b)("td",null,"Returns a number\u2019s cosine.")),Object(r.b)("tr",null,Object(r.b)("td",null,"CurDir"),Object(r.b)("td",null,"Returns the current path.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Date"),Object(r.b)("td",null,"Returns the current system date.")),Object(r.b)("tr",null,Object(r.b)("td",null,"DateAdd"),Object(r.b)("td",null,"Returns a date to which a specified time interval has been added \u2014 for example, one month from a particular date.")),Object(r.b)("tr",null,Object(r.b)("td",null,"DatePart"),Object(r.b)("td",null,"Returns an integer containing the specified part of a given date \u2014 for example, a date\u2019s day of the year.")),Object(r.b)("tr",null,Object(r.b)("td",null,"DateSerial"),Object(r.b)("td",null,"Converts a date to a serial number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"DateValue"),Object(r.b)("td",null,"Converts a string to a date.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Day"),Object(r.b)("td",null,"Returns the day of the month from a date value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Dir"),Object(r.b)("td",null,"Returns the name of a file or directory that matches a pattern.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Erl"),Object(r.b)("td",null,"Returns the line number that caused an error.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Err"),Object(r.b)("td",null,"Returns the error number of an error condition.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Error"),Object(r.b)("td",null,"Returns the error message that corresponds to an error number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Exp"),Object(r.b)("td",null,"Returns the base of the natural logarithm (e) raised to a power.")),Object(r.b)("tr",null,Object(r.b)("td",null,"FileLen"),Object(r.b)("td",null,"Returns the number of bytes in a file.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Fix"),Object(r.b)("td",null,"Returns a number\u2019s integer portion.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Format"),Object(r.b)("td",null,"Displays an expression in a particular format.")),Object(r.b)("tr",null,Object(r.b)("td",null,"GetSetting"),Object(r.b)("td",null,"Returns a value from the Windows registry.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Hex"),Object(r.b)("td",null,"Converts from decimal to hexadecimal.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Hour"),Object(r.b)("td",null,"Returns the hours portion of a time.")),Object(r.b)("tr",null,Object(r.b)("td",null,"InputBox"),Object(r.b)("td",null,"Displays a box to prompt a user for input.")),Object(r.b)("tr",null,Object(r.b)("td",null,"InStr"),Object(r.b)("td",null,"Returns the position of a string within another string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Int"),Object(r.b)("td",null,"Returns the integer portion of a number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IPmt"),Object(r.b)("td",null,"Returns the interest payment for an annuity or loan.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsArray"),Object(r.b)("td",null,"Returns True if a variable is an array.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsDate"),Object(r.b)("td",null,"Returns True if an expression is a date.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsEmpty"),Object(r.b)("td",null,"Returns True if a variable has not been initialized.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsError"),Object(r.b)("td",null,"Returns True if an expression is an error value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsMissing"),Object(r.b)("td",null,"Returns True if an optional argument was not passed to a procedure.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsNull"),Object(r.b)("td",null,"Returns True if an expression contains no valid data.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsNumeric"),Object(r.b)("td",null,"Returns True if an expression can be evaluated as a number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"IsObject"),Object(r.b)("td",null,"Returns True if an expression references an OLE Automation object.")),Object(r.b)("tr",null,Object(r.b)("td",null,"LBound"),Object(r.b)("td",null,"Returns the smallest subscript for a dimension of an array.")),Object(r.b)("tr",null,Object(r.b)("td",null,"LCase"),Object(r.b)("td",null,"Returns a string converted to lowercase.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Left"),Object(r.b)("td",null,"Returns a specified number of characters from the left of a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Len"),Object(r.b)("td",null,"Returns the number of characters in a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Log"),Object(r.b)("td",null,"Returns the natural logarithm of a number to base.")),Object(r.b)("tr",null,Object(r.b)("td",null,"LTrim"),Object(r.b)("td",null,"Returns a copy of a string, with any leading spaces removed.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Mid"),Object(r.b)("td",null,"Returns a specified number of characters from a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Minutes"),Object(r.b)("td",null,"Returns the minutes portion of a time value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Month"),Object(r.b)("td",null,"Returns the month from a date value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"MsgBox"),Object(r.b)("td",null,"Displays a message box and (optionally) returns a value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Now"),Object(r.b)("td",null,"Returns the current system date and time.")),Object(r.b)("tr",null,Object(r.b)("td",null,"RGB"),Object(r.b)("td",null,"Returns a numeric RGB value representing a color.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Replace"),Object(r.b)("td",null,"Replaces a substring in a string with another substring.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Right"),Object(r.b)("td",null,"Returns a specified number of characters from the right of a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Rnd"),Object(r.b)("td",null,"Returns a random number between 0 and 1.")),Object(r.b)("tr",null,Object(r.b)("td",null,"RTrim"),Object(r.b)("td",null,"Returns a copy of a string, with any trailing spaces removed.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Second"),Object(r.b)("td",null,"Returns the seconds portion of a time value.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Sgn"),Object(r.b)("td",null,"Returns an integer that indicates a number\u2019s sign.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Shell"),Object(r.b)("td",null,"Runs an executable program.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Sin"),Object(r.b)("td",null,"Returns a number\u2019s sine.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Space"),Object(r.b)("td",null,"Returns a string with a specified number of spaces.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Split"),Object(r.b)("td",null,"Splits a string into parts, using a delimiting character.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Sqr"),Object(r.b)("td",null,"Returns a number\u2019s square root.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Str"),Object(r.b)("td",null,"Returns a string representation of a number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"StrComp"),Object(r.b)("td",null,"Returns a value indicating the result of a string comparison.")),Object(r.b)("tr",null,Object(r.b)("td",null,"String"),Object(r.b)("td",null,"Returns a repeating character or string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Tan"),Object(r.b)("td",null,"Returns a number\u2019s tangent.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Time"),Object(r.b)("td",null,"Returns the current system time.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Timer"),Object(r.b)("td",null,"Returns the number of seconds since midnight.")),Object(r.b)("tr",null,Object(r.b)("td",null,"TimeSerial"),Object(r.b)("td",null,"Returns the time for a specified hour, minute, and second.")),Object(r.b)("tr",null,Object(r.b)("td",null,"TimeValue"),Object(r.b)("td",null,"Converts a string to a time serial number.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Trim"),Object(r.b)("td",null,"Returns a string without leading or trailing spaces.")),Object(r.b)("tr",null,Object(r.b)("td",null,"TypeName"),Object(r.b)("td",null,"Returns a string that describes a variable\u2019s data type.")),Object(r.b)("tr",null,Object(r.b)("td",null,"UBound"),Object(r.b)("td",null,"Returns the largest available subscript for an array\u2019s dimension.")),Object(r.b)("tr",null,Object(r.b)("td",null,"UCase"),Object(r.b)("td",null,"Converts a string to uppercase.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Val"),Object(r.b)("td",null,"Returns the numbers contained in a string.")),Object(r.b)("tr",null,Object(r.b)("td",null,"VarType"),Object(r.b)("td",null,"Returns a value indicating a variable\u2019s subtype.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Weekday"),Object(r.b)("td",null,"Returns a number representing a day of the week.")),Object(r.b)("tr",null,Object(r.b)("td",null,"Year"),Object(r.b)("td",null,"Returns the year from a date value."))))}s.isMDXComponent=!0}}]);