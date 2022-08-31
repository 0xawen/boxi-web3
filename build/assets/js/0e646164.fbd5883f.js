"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[3310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="Deref \u89e3\u5f15\u7528",u={unversionedId:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488/Deref\u89e3\u5f15\u7528",id:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488/Deref\u89e3\u5f15\u7528",title:"Deref \u89e3\u5f15\u7528",description:"\u5e38\u89c4\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528",source:"@site/docs\\rust\\rust\u8fdb\u9636\u77e5\u8bc6\\\u667a\u80fd\u6307\u9488\\Deref\u89e3\u5f15\u7528.md",sourceDirName:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488",slug:"/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488/Deref\u89e3\u5f15\u7528",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488/Deref\u89e3\u5f15\u7528",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"box\u5806\u5bf9\u8c61\u5206\u914d",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u667a\u80fd\u6307\u9488/Box\u5806\u5206\u914d\u5bf9\u8c61"},next:{title:"\u6df1\u5165\u751f\u547d\u5468\u671f",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u751f\u547d\u5468\u671f/\u6df1\u5165\u751f\u547d\u5468\u671f"}},i={},s=[{value:"\u5e38\u89c4\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528",id:"\u5e38\u89c4\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528",level:2},{value:"\u667a\u80fd\u6307\u9488\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528",id:"\u667a\u80fd\u6307\u9488\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deref-\u89e3\u5f15\u7528"},"Deref \u89e3\u5f15\u7528"),(0,o.kt)("h2",{id:"\u5e38\u89c4\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528"},"\u5e38\u89c4\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let x = 5;\n    let y = &x;  // \u5bf9x\u53d6\u51fa\u5730\u5740 \u8d4b\u503c\u7ed9 y, \u5219y \u6307\u5411\u4e86x.\n\n    assert_eq!(5, x);\n    assert_eq!(5, *y);  // \u5bf9 y \u8fdb\u884c\u89e3\u5f15\u7528 \n}\n")),(0,o.kt)("h2",{id:"\u667a\u80fd\u6307\u9488\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528"},"\u667a\u80fd\u6307\u9488\u7684\u5f15\u7528\u4e0e\u89e3\u5f15\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let x = Box::new(1);\n    let sum = *x + 1;   // * \u76f4\u63a5\u89e3\u5f15\u7528  =>  *(y.deref())\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Deref")," \u53ef\u4ee5\u8bf4\u662f Rust \u4e2d\u6700\u5e38\u89c1\u7684\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u800c\u4e14\u5b83\u53ef\u4ee5\u8fde\u7eed\u7684\u5b9e\u73b0\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Box<String> -> String -> &str")," \u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u53ea\u8981\u94fe\u6761\u4e0a\u7684\u7c7b\u578b\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Deref")," \u7279\u5f81\u3002"))}p.isMDXComponent=!0}}]);