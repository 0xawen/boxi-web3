"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[4480],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1642:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const a={},i="\u7b7e\u540d\u8005",s={unversionedId:"move/move_basic/\u7b7e\u540d\u8005",id:"move/move_basic/\u7b7e\u540d\u8005",title:"\u7b7e\u540d\u8005",description:"signer\u662f\u4e00\u4e2a\u5185\u5efa\u8d44\u6e90\u7c7b\u578b\u3002\u53ef\u4ee5\u5c06signer\u7684\u539f\u751f\u5b9e\u73b0\u662f\uff1a",source:"@site/docs\\move\\move_basic\\\u7b7e\u540d\u8005.md",sourceDirName:"move/move_basic",slug:"/move/move_basic/\u7b7e\u540d\u8005",permalink:"/docs/move/move_basic/\u7b7e\u540d\u8005",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"move",previous:{title:"\u52a8\u6001\u6570\u7ec4",permalink:"/docs/move/move_basic/\u52a8\u6001\u6570\u7ec4"},next:{title:"\u5f15\u7528",permalink:"/docs/move/move_basic/\u5f15\u7528"}},l={},c=[{value:"signer \u64cd\u4f5c",id:"signer-\u64cd\u4f5c",level:3},{value:"\u6240\u6709\u6743",id:"\u6240\u6709\u6743",level:3}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b7e\u540d\u8005"},"\u7b7e\u540d\u8005"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"signer"),"\u662f\u4e00\u4e2a\u5185\u5efa\u8d44\u6e90\u7c7b\u578b\u3002\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"signer"),"\u7684\u539f\u751f\u5b9e\u73b0\u662f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-move"},"struct signer has drop {\n    a: address\n}\n")),(0,o.kt)("p",null,"\u4e0eaddress \u6bd4\u8f83"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"signer")," \u53ea\u80fd\u7531 move vm\u521b\u5efa\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-move"},"script {\n    use Std::Signer;\n    fun main(s: signer){\n        assert!(Signer::address_of(&s) == @0x42, 0);\n    }\n}\n")),(0,o.kt)("h3",{id:"signer-\u64cd\u4f5c"},"signer \u64cd\u4f5c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Std::Signer")," \u63d0\u4f9b\u4e86\u4e24\u4e2a\u51fd\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Signer::address_of(&signer): address"),(0,o.kt)("li",{parentName:"ul"},"Signer::borrow_address(&signer):&address")),(0,o.kt)("h3",{id:"\u6240\u6709\u6743"},"\u6240\u6709\u6743"),(0,o.kt)("p",null,"\u4e0e\u7b80\u5355\u7684\u6807\u91cf\u503c\u4e0d\u540c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"signer"),"\u503c\u662f\u4e0d\u53ef\u590d\u5236\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u4e0d\u80fd\u88ab\u590d\u5236\u3002"))}u.isMDXComponent=!0}}]);