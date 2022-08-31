"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[6567],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const a={},o="\u63a5\u53e3",c={unversionedId:"solidity/solidity_basic/interface",id:"solidity/solidity_basic/interface",title:"\u63a5\u53e3",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u58f0\u660e\u63a5\u53e3\u4e0e\u5176\u4ed6\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92.",source:"@site/docs/solidity/solidity_basic/27_interface.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/interface",permalink:"/docs/solidity/solidity_basic/interface",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{},sidebar:"solidity",previous:{title:"\u53ef\u89c1\u5ea6",permalink:"/docs/solidity/solidity_basic/visibility"},next:{title:"payable \u5173\u952e\u5b57",permalink:"/docs/solidity/solidity_basic/payable"}},s={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u58f0\u660e\u63a5\u53e3\u4e0e\u5176\u4ed6\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92."),(0,i.kt)("p",null,"\u63a5\u53e3\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6709\u4efb\u4f55\u51fd\u6570\u5b9e\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7ee7\u627f\u5176\u4ed6\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u5b9a\u4e49\u7684\u51fd\u6570\u5fc5\u987b\u662f external"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591f\u5b9a\u4e49\u6784\u9020\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u591f\u5b9a\u4e49\u72b6\u6001\u53d8\u91cf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Counter {\n    uint public count;\n\n    function increment() external {\n        count += 1;\n    }\n}\n\ninterface ICounter {\n    function count() external view returns (uint);\n\n    function increment() external;\n}\n\ncontract MyContract {\n    function incrementCounter(address _counter) external {\n        ICounter(_counter).increment();\n    }\n\n    function getCount(address _counter) external view returns (uint) {\n        return ICounter(_counter).count();\n    }\n}\n\n// Uniswap example\ninterface UniswapV2Factory {\n    function getPair(address tokenA, address tokenB)\n        external\n        view\n        returns (address pair);\n}\n\ninterface UniswapV2Pair {\n    function getReserves()\n        external\n        view\n        returns (\n            uint112 reserve0,\n            uint112 reserve1,\n            uint32 blockTimestampLast\n        );\n}\n\ncontract UniswapExample {\n    address private factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;\n    address private dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address private weth = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n\n    function getTokenReserves() external view returns (uint, uint) {\n        address pair = UniswapV2Factory(factory).getPair(dai, weth);\n        (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();\n        return (reserve0, reserve1);\n    }\n}\n")))}p.isMDXComponent=!0}}]);