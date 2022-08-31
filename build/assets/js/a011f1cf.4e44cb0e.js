"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[4605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||l;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i="\u56de\u9000\u51fd\u6570",o={unversionedId:"solidity/solidity_basic/fallback",id:"solidity/solidity_basic/fallback",title:"\u56de\u9000\u51fd\u6570",description:"fallback \u51fd\u6570\u662f\u4e00\u4e2a\u662f\u4e00\u4e2a\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\u4e14\u4e0d\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u7684\u51fd\u6570\u3002",source:"@site/docs/solidity/solidity_basic/30_fallback.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/fallback",permalink:"/docs/solidity/solidity_basic/fallback",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"solidity",previous:{title:"\u53d1\u9001 eth \u7684\u51fd\u6570(transfer, send, call)",permalink:"/docs/solidity/solidity_basic/sending_eth"},next:{title:"call  \u8c03\u7528",permalink:"/docs/solidity/solidity_basic/call"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56de\u9000\u51fd\u6570"},"\u56de\u9000\u51fd\u6570"),(0,a.kt)("p",null,"fallback \u51fd\u6570\u662f\u4e00\u4e2a\u662f\u4e00\u4e2a\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\u4e14\u4e0d\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6267\u884c\u56de\u9000\u51fd\u6570\u7684\u60c5\u51b5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u4e0d\u5b58\u5728 receive() \u7684\u5408\u7ea6\u53d1\u9001eth \u6216\u8005 msg.value \u4e0d\u5b58\u5728")),(0,a.kt)("p",null,"\u5f53\u901a\u8fc7 transfer \u6216 send \u8c03\u7528 fallback \u65f6\uff0cgas \u9650\u5236\u4e3a 2300\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Fallback {\n    event Log(uint gas);\n\n    // Fallback function must be declared as external.\n    fallback() external payable {\n        // send / transfer (forwards 2300 gas to this fallback function)\n        // call (forwards all of the gas)\n        emit Log(gasleft());\n    }\n\n    // Helper function to check the balance of this contract\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\ncontract SendToFallback {\n    function transferToFallback(address payable _to) public payable {\n        _to.transfer(msg.value);\n    }\n\n    function callFallback(address payable _to) public payable {\n        (bool sent, ) = _to.call{value: msg.value}("");\n        require(sent, "Failed to send Ether");\n    }\n}\n')))}p.isMDXComponent=!0}}]);