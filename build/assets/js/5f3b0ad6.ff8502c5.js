"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[9746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={},l="\u65ad\u8a00\u5b8f",o={unversionedId:"rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5/\u65ad\u8a00",id:"rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5/\u65ad\u8a00",title:"\u65ad\u8a00\u5b8f",description:"\u5728\u7f16\u5199\u6d4b\u8bd5\u51fd\u6570\u65f6\uff0c\u65ad\u8a00\u51b3\u5b9a\u4e86\u6211\u4eec\u7684\u6d4b\u8bd5\u662f\u901a\u8fc7\u8fd8\u662f\u5931\u8d25\u3002",source:"@site/docs\\rust\\rust\u81ea\u52a8\u5316\u6d4b\u8bd5\\\u65ad\u8a00.md",sourceDirName:"rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5",slug:"/rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5/\u65ad\u8a00",permalink:"/docs/rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5/\u65ad\u8a00",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"cargo.toml \u5217\u8868",permalink:"/docs/rust/cargo/cargo\u914d\u7f6e\u683c\u5f0f"},next:{title:"\u5355\u5143\u6d4b\u8bd5",permalink:"/docs/rust/rust\u81ea\u52a8\u5316\u6d4b\u8bd5/\u5355\u5143\u6d4b\u8bd5"}},i={},u=[{value:"<code>assert!</code>",id:"assert",level:2},{value:"<code>assert_eq!</code>",id:"assert_eq",level:2},{value:"<code>assert_ne!</code>",id:"assert_ne",level:2},{value:"<code>debug_assert!</code>",id:"debug_assert",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u65ad\u8a00\u5b8f"},"\u65ad\u8a00\u5b8f"),(0,a.kt)("p",null,"\u5728\u7f16\u5199\u6d4b\u8bd5\u51fd\u6570\u65f6\uff0c\u65ad\u8a00\u51b3\u5b9a\u4e86\u6211\u4eec\u7684\u6d4b\u8bd5\u662f\u901a\u8fc7\u8fd8\u662f\u5931\u8d25\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert_eq!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assert_ne!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug_assert!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug_assert_eq!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"debug_assert_ne!"))),(0,a.kt)("h2",{id:"assert"},(0,a.kt)("inlineCode",{parentName:"h2"},"assert!")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"assert!")," \u7528\u4e8e\u5224\u65ad\u4f20\u5165\u7684\u5e03\u5c14\u8868\u8fbe\u5f0f\u662f\u5426\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// \u4ee5\u4e0b\u65ad\u8a00\u7684\u9519\u8bef\u4fe1\u606f\u53ea\u5305\u542b\u7ed9\u5b9a\u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c\nassert!(true);\n\nfn some_computation() -> bool { true }\n\nassert!(some_computation());\n\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u62a5\u9519\u4fe1\u606f\nlet x = true;\nassert!(x, "x wasn\'t true!");\n\n// \u4f7f\u7528\u683c\u5f0f\u5316\u7684\u81ea\u5b9a\u4e49\u62a5\u9519\u4fe1\u606f\nlet a = 3; let b = 27;\nassert!(a + b == 30, "a = {}, b = {}", a, b);\n')),(0,a.kt)("h2",{id:"assert_eq"},(0,a.kt)("inlineCode",{parentName:"h2"},"assert_eq!")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"assert_eq!")," \u5b8f\u53ef\u4ee5\u7528\u4e8e\u5224\u65ad\u4e24\u4e2a\u8868\u8fbe\u5f0f\u8fd4\u56de\u7684\u503c\u662f\u5426\u76f8\u7b49 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let a = 3;\n    let b = 1 + 2;\n    assert_eq(a,b);\n}\n")),(0,a.kt)("h2",{id:"assert_ne"},(0,a.kt)("inlineCode",{parentName:"h2"},"assert_ne!")),(0,a.kt)("p",null,"\u5224\u65ad\u7684\u662f\u4e24\u8005\u7684\u4e0d\u76f8\u7b49\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let a = 3;\n    let b = 1 + 3;\n    assert_ne!(a, b, "\u6211\u4eec\u5728\u6d4b\u8bd5\u4e24\u4e2a\u6570\u4e4b\u548c{} + {}\uff0c\u8fd9\u662f\u989d\u5916\u7684\u9519\u8bef\u4fe1\u606f", a, b);\n}\n')),(0,a.kt)("h2",{id:"debug_assert"},(0,a.kt)("inlineCode",{parentName:"h2"},"debug_assert!")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"debug_assert!"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug_assert_eq!"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug_assert_ne!")," \u8fd9\u4e09\u4e2a\u5728\u529f\u80fd\u4e0a\u4e0e\u4e4b\u524d\u8bb2\u89e3\u7684\u7248\u672c\u5e76\u65e0\u533a\u522b\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"debug_assert!")," \u7cfb\u5217\u53ea\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," \u6a21\u5f0f\u4e0b\u8f93\u51fa"))}c.isMDXComponent=!0}}]);