"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),v=o(n),m=l,k=v["".concat(p,".").concat(m)]||v[m]||c[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=v;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={},i="\u8fed\u4ee3\u5668",u={unversionedId:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u8fed\u4ee3\u5668",id:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u8fed\u4ee3\u5668",title:"\u8fed\u4ee3\u5668",description:"\u8fed\u4ee3\u4e00\u4e2a\u8fde\u7eed\u7684\u96c6\u5408\uff0c\u4f8b\u5982\u6570\u7ec4\u3001\u52a8\u6001\u6570\u7ec4 Vec\u3001HashMap \u7b49\u3002",source:"@site/docs\\rust\\rust\u8fdb\u9636\u77e5\u8bc6\\\u51fd\u6570\u5f0f\u7f16\u7a0b\\\u8fed\u4ee3\u5668.md",sourceDirName:"rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b",slug:"/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u8fed\u4ee3\u5668",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u8fed\u4ee3\u5668",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u6574\u6570\u8f6c\u6362\u4e3a\u679a\u4e3e",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u6df1\u5165\u7c7b\u578b\u7cfb\u7edf/\u679a\u4e3e\u548c\u6574\u6570"},next:{title:"\u95ed\u5305",permalink:"/docs/rust/rust\u8fdb\u9636\u77e5\u8bc6/\u51fd\u6570\u5f0f\u7f16\u7a0b/\u95ed\u5305"}},p={},o=[{value:"\u8fed\u4ee3\u5668\u7684\u6240\u6709\u6743",id:"\u8fed\u4ee3\u5668\u7684\u6240\u6709\u6743",level:2},{value:"\u6d88\u8d39\u5668\u4e0e\u9002\u914d\u5668",id:"\u6d88\u8d39\u5668\u4e0e\u9002\u914d\u5668",level:2},{value:"\u6d88\u8d39\u8005\u9002\u914d\u5668",id:"\u6d88\u8d39\u8005\u9002\u914d\u5668",level:3},{value:"sum",id:"sum",level:3},{value:"any",id:"any",level:3},{value:"collect",id:"collect",level:3},{value:"\u8fed\u4ee3\u9002\u914d\u5668",id:"\u8fed\u4ee3\u9002\u914d\u5668",level:3},{value:"map",id:"map",level:3},{value:"filter",id:"filter",level:3},{value:"take",id:"take",level:3},{value:"rev",id:"rev",level:3},{value:"zip",id:"zip",level:3},{value:"enumerate",id:"enumerate",level:3}],s={toc:o};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8fed\u4ee3\u5668"},"\u8fed\u4ee3\u5668"),(0,l.kt)("p",null,"\u8fed\u4ee3\u4e00\u4e2a\u8fde\u7eed\u7684\u96c6\u5408\uff0c\u4f8b\u5982\u6570\u7ec4\u3001\u52a8\u6001\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Vec"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HashMap")," \u7b49\u3002"),(0,l.kt)("h2",{id:"\u8fed\u4ee3\u5668\u7684\u6240\u6709\u6743"},"\u8fed\u4ee3\u5668\u7684\u6240\u6709\u6743"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"into_iter")," \u4f1a\u593a\u8d70\u6240\u6709\u6743"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iter")," \u501f\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"iter_mut"),"\u662f\u53ef\u53d8\u501f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let values = vec![1,2,3];\n    \n    for v in values.into_iter() {\n        println!("{}", v);\n    }\n    \n     // \u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u62a5\u9519\uff0c\u56e0\u4e3a values \u7684\u6240\u6709\u6743\u5728\u4e0a\u9762 `for` \u5faa\u73af\u4e2d\u5df2\u7ecf\u88ab\u8f6c\u79fb\u8d70\n    // println!("{:?}",values);\n    \n    let values = vec![1, 2, 3];\n    let _values_iter = values.iter();\n\n    // \u4e0d\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a values_iter \u53ea\u662f\u501f\u7528\u4e86 values \u4e2d\u7684\u5143\u7d20\n    println!("{:?}", values);\n    \n    let mut values = vec![1, 2, 3];\n    // \u5bf9 values \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u53ef\u53d8\u501f\u7528\n    let mut values_iter_mut = values.iter_mut();\n\n    // \u53d6\u51fa\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u4fee\u6539\u4e3a0\n    if let Some(v) = values_iter_mut.next() {\n        *v = 0;\n    }\n\n    // \u8f93\u51fa[0, 2, 3]\n    println!("{:?}", values);\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},".iter()")," \u65b9\u6cd5\u5b9e\u73b0\u7684\u8fed\u4ee3\u5668\uff0c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"next")," \u65b9\u6cd5\u8fd4\u56de\u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(&T)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},".iter_mut()")," \u65b9\u6cd5\u5b9e\u73b0\u7684\u8fed\u4ee3\u5668\uff0c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"next")," \u65b9\u6cd5\u8fd4\u56de\u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Some(&mut T)"),"\uff0c"),(0,l.kt)("p",{parentName:"li"},"\u56e0\u6b64\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"if let Some(v) = values_iter_mut.next()")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"v")," \u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"&mut i32"),"\uff0c\u6700\u7ec8\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"*v = 0")," \u7684\u65b9\u5f0f\u4fee\u6539\u5176\u503c"))),(0,l.kt)("h2",{id:"\u6d88\u8d39\u5668\u4e0e\u9002\u914d\u5668"},"\u6d88\u8d39\u5668\u4e0e\u9002\u914d\u5668"),(0,l.kt)("p",null,"\u6d88\u8d39\u8005\u662f\u8fed\u4ee3\u5668\u4e0a\u7684\u65b9\u6cd5\uff0c\u5b83\u4f1a\u6d88\u8d39\u6389\u8fed\u4ee3\u5668\u4e2d\u7684\u5143\u7d20\uff0c\u7136\u540e\u8fd4\u56de\u5176\u7c7b\u578b\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"\u6d88\u8d39\u8005\u9002\u914d\u5668"},"\u6d88\u8d39\u8005\u9002\u914d\u5668"),(0,l.kt)("h3",{id:"sum"},"sum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v1 = vec![1,2,3];\n    let v_iter = v1.iter();\n    \n    let total: i32 = v1_iter.sum();\n    \n    // v1_iter \u662f\u501f\u7528\u4e86 v1\uff0c\u56e0\u6b64 v1 \u53ef\u4ee5\u7167\u5e38\u4f7f\u7528\n    println!("{:?}",v1);\n    \n     // \u4ee5\u4e0b\u4ee3\u7801\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a `sum` \u62ff\u5230\u4e86\u8fed\u4ee3\u5668 `v1_iter` \u7684\u6240\u6709\u6743\n    // println!("{:?}",v1_iter);\n\n}\n')),(0,l.kt)("h3",{id:"any"},"any"),(0,l.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u6709\u5b58\u5728\u6ee1\u8db3\u6761\u4ef6\u7684\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v = [1,2,3,4,5];\n    let result1 = v.iter().any(|&x| x == 2);\n    let result2 = v.iter().any(| x| *x == 2);\n    \n    println!("{}", result1);\n    println!("{}", result2);\n}\n')),(0,l.kt)("h3",{id:"collect"},"collect"),(0,l.kt)("p",null,"\u6536\u96c6\u5230\u6307\u5b9a\u5bb9\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v1 = vec![1,2,3,4,5];\n    let v2: Vec<i32> = v1.iter().map(|x| x + 1).collect();\n    println!("{:?}", v2);\n}\n')),(0,l.kt)("h3",{id:"\u8fed\u4ee3\u9002\u914d\u5668"},"\u8fed\u4ee3\u9002\u914d\u5668"),(0,l.kt)("p",null,"\u90a3\u4e48\u8fed\u4ee3\u5668\u9002\u914d\u5668\uff0c\u987e\u540d\u601d\u4e49\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\uff0c\u8fd9\u662f\u5b9e\u73b0\u94fe\u5f0f\u65b9\u6cd5\u8c03\u7528\u7684\u5173\u952e\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"v.iter().map().filter()..."),"\u3002"),(0,l.kt)("p",null,"\u4e0e\u6d88\u8d39\u8005\u9002\u914d\u5668\u4e0d\u540c\uff0c\u8fed\u4ee3\u5668\u9002\u914d\u5668\u662f\u60f0\u6027\u7684\uff0c\u610f\u5473\u7740\u4f60",(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u4e00\u4e2a\u6d88\u8d39\u8005\u9002\u914d\u5668\u6765\u6536\u5c3e\uff0c\u6700\u7ec8\u5c06\u8fed\u4ee3\u5668\u8f6c\u6362\u6210\u4e00\u4e2a\u5177\u4f53\u7684\u503c"),"\u3002"),(0,l.kt)("h3",{id:"map"},"map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nlet v1: Vec<i32> = vec![1, 2, 3];\n\nlet v2: Vec<_> = v1.iter().map(|x| x + 1).collect();\n\nassert_eq!(v2, vec![2, 3, 4]);\n")),(0,l.kt)("h3",{id:"filter"},"filter"),(0,l.kt)("p",null,"\u8fc7\u6ee4\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v = vec![1,2,3];\n    let result: Vec<i32> = v.iter().map(|x|x+3).filter(|x|x%3).collect();\n     println!("{:?}", result);\n}\n')),(0,l.kt)("h3",{id:"take"},"take"),(0,l.kt)("p",null,"\u904d\u5386\u6307\u5b9a\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v = [1,2,3,4,5];\n    let result = v.iter().take(3); // \u53d63\u4e2a\u5143\u7d20\n    for i in result {\n        println!("{}", i);\n    }\n}\n')),(0,l.kt)("h3",{id:"rev"},"rev"),(0,l.kt)("p",null,"\u53cd\u8f6c\u8fed\u4ee3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v = vec![1,2,3];\n    let result = v.iter().rev();\n    for i in result {\n        println!("{}", i);\n    }\n}\n')),(0,l.kt)("h3",{id:"zip"},"zip"),(0,l.kt)("p",null,"\u5c06\u4e24\u4e2a\u8fed\u4ee3\u5668\u538b\u7f29\u5728\u4e00\u8d77\uff0c\u751f\u6210(a,b)\u5143\u7ec4\u8fed\u4ee3\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let v1 = vec![1,2,3];\n    let v2 = vec![2,3,6];\n    \n    let result: Vec<i32> = v1.iter().zip(v2.iter())\n        .map(|(a,b)| a + b)\n        .filter(|x|x % 3 == 0)\n        .collect();\n    \n    println!("{:?}", result);\n}\n')),(0,l.kt)("h3",{id:"enumerate"},"enumerate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let v = vec![1u64, 2, 3, 4, 5, 6];\nfor (i,v) in v.iter().enumerate() {\n    println!("\u7b2c{}\u4e2a\u503c\u662f{}",i,v)\n}\n')))}c.isMDXComponent=!0}}]);