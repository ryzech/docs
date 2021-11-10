"use strict";(self.webpackChunkmod_docs=self.webpackChunkmod_docs||[]).push([[671],{9881:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return k},default:function(){return s}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},c="Coreprotect",d={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Coreprotect",description:"Plugin we use to track every interaction anyone does.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ryzech/docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},k=[{value:"Coreprotect Commands",id:"coreprotect-commands",children:[{value:"Inspect",id:"inspect",children:[],level:3},{value:"Lookup",id:"lookup",children:[],level:3},{value:"Rollback",id:"rollback",children:[],level:3},{value:"Restore",id:"restore",children:[],level:3}],level:2}],p={toc:k};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coreprotect"},"Coreprotect"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Plugin we use to track every interaction anyone does.")),(0,o.kt)("p",null,"Use this if you need to figure out if someone stole something from someone, broke blocks, set fire, griefed, pretty much everything! ",(0,o.kt)("a",{parentName:"p",href:"https://docs.coreprotect.net/"},"External Docs, if you need extra help")),(0,o.kt)("h2",{id:"coreprotect-commands"},"Coreprotect Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Aliases"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co inspect")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"See who interacted with things by specific block.")," ",(0,o.kt)("a",{parentName:"td",href:"#Inspect"},"More info")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"/co i"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"See who interacted with things by user or radius.")," ",(0,o.kt)("a",{parentName:"td",href:"#Lookup"},"More info")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"/co l"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Rollback interactions.")," ",(0,o.kt)("a",{parentName:"td",href:"#Rollback"},"More info")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"/co rb"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Undo rollbacks.")," ",(0,o.kt)("a",{parentName:"td",href:"#Restore"},"More info")),(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"/co rs"))))),(0,o.kt)("h3",{id:"inspect"},"Inspect"),(0,o.kt)("p",null,'For this command, it\'s pretty simple. To use the command, type "/co inspect" then either:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Left click to check the block your cursor is aimed at "),(0,o.kt)("li",{parentName:"ul"},"Right click to check the y coordinate of the block you're looking at. (Usefull for broken/stolen blocks!)",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"(NOTE: Right click is also used to check chest transactions!)")))),(0,o.kt)("p",null,"To go back further in the block data, use ",(0,o.kt)("inlineCode",{parentName:"p"},"/co l <page number>"),"!"),(0,o.kt)("h3",{id:"lookup"},"Lookup"),(0,o.kt)("p",null,"Lookup interactions by radius, user, or a worldedit selection area."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,o.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of lookup} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co l")),(0,o.kt)("td",{parentName:"tr",align:"center"},"/co l {see previous usage}")))),(0,o.kt)("h3",{id:"rollback"},"Rollback"),(0,o.kt)("p",null,'This command is very important when it comes to large griefs or thefts. To use the command, type "/co rollback" followed by specific rollback parameters. This command acts as a sort of "undo" button for '),(0,o.kt)("h3",{id:"restore"},"Restore"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,o.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of rollback} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co rb")),(0,o.kt)("td",{parentName:"tr",align:"center"},"/co rb {see previous usage}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,o.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of restore} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/co rs")),(0,o.kt)("td",{parentName:"tr",align:"center"},"/co rs {see previous usage}")))))}s.isMDXComponent=!0}}]);