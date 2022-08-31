"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="\u5168\u5c40\u5b58\u50a8\u7684\u64cd\u4f5c",i={unversionedId:"move/move_basic/\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c",id:"move/move_basic/\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c",title:"\u5168\u5c40\u5b58\u50a8\u7684\u64cd\u4f5c",description:"| Operation                               | Description                                                  | Aborts?                                 |",source:"@site/docs\\move\\move_basic\\\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c.md",sourceDirName:"move/move_basic",slug:"/move/move_basic/\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c",permalink:"/docs/move/move_basic/\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"move",previous:{title:"\u5168\u5c40\u5b58\u50a8 - \u7ed3\u6784",permalink:"/docs/move/move_basic/\u5168\u5c40\u5b58\u50a8"}},d={},p=[],m={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5168\u5c40\u5b58\u50a8\u7684\u64cd\u4f5c"},"\u5168\u5c40\u5b58\u50a8\u7684\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Aborts?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"move_to<T>(&signer,T)")),(0,a.kt)("td",{parentName:"tr",align:null},"Publish ",(0,a.kt)("inlineCode",{parentName:"td"},"T")," under ",(0,a.kt)("inlineCode",{parentName:"td"},"signer.address")),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"signer.address")," already holds a ",(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"move_from<T>(address): T")),(0,a.kt)("td",{parentName:"tr",align:null},"Remove ",(0,a.kt)("inlineCode",{parentName:"td"},"T")," from ",(0,a.kt)("inlineCode",{parentName:"td"},"address")," and return it"),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"address")," does not hold a ",(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"borrow_global_mut<T>(address): &mut T")),(0,a.kt)("td",{parentName:"tr",align:null},"Return a mutable reference to the ",(0,a.kt)("inlineCode",{parentName:"td"},"T")," stored under ",(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"address")," does not hold a ",(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"borrow_global<T>(address): &T")),(0,a.kt)("td",{parentName:"tr",align:null},"Return an immutable reference to the ",(0,a.kt)("inlineCode",{parentName:"td"},"T")," stored under ",(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"address")," does not hold a ",(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"exists<T>(address): bool")),(0,a.kt)("td",{parentName:"tr",align:null},"Return ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," if a ",(0,a.kt)("inlineCode",{parentName:"td"},"T")," is stored under ",(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:null},"Never")))))}s.isMDXComponent=!0}}]);