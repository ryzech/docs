"use strict";(self.webpackChunkmod_docs=self.webpackChunkmod_docs||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(n),u=r,s=k["".concat(p,".").concat(u)]||k[u]||c[u]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},p="CoreProtect",m={unversionedId:"coreprotect",id:"coreprotect",title:"CoreProtect",description:"Plugin we use to track every interaction anyone does.",source:"@site/docs/coreprotect.md",sourceDirName:".",slug:"/coreprotect",permalink:"/docs/coreprotect",editUrl:"https://github.com/ryzech/docs/edit/main/docs/coreprotect.md",tags:[],version:"current",lastUpdatedBy:"RyzechDev // Ryz",lastUpdatedAt:1673044249,formattedLastUpdatedAt:"1/6/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BanManager (Punishments Plugin)",permalink:"/docs/banmanager"}},d=[{value:"CoreProtect Commands",id:"coreprotect-commands",children:[{value:"Inspect",id:"inspect",children:[],level:3},{value:"Lookup",id:"lookup",children:[],level:3},{value:"Rollback",id:"rollback",children:[],level:3},{value:"Restore",id:"restore",children:[],level:3}],level:2},{value:"Parameter Details",id:"parameter-details",children:[{value:"<code>u:&lt;user&gt;</code>",id:"uuser",children:[],level:3},{value:"<code>t:&lt;time&gt;</code>",id:"ttime",children:[],level:3},{value:"<code>r:&lt;radius&gt;</code>",id:"rradius",children:[],level:3},{value:"<code>a:&lt;action&gt;</code>",id:"aaction",children:[{value:"Actions",id:"actions",children:[],level:4}],level:3},{value:"<code>i:&lt;include&gt;</code>",id:"iinclude",children:[],level:3},{value:"<code>e:&lt;exclude&gt;</code>",id:"eexclude",children:[],level:3},{value:"<code>#&lt;hashtag&gt;</code>",id:"hashtag",children:[],level:3},{value:"Hashtags",id:"hashtags",children:[],level:3}],level:2}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"coreprotect"},"CoreProtect"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Plugin we use to track every interaction anyone does.")),(0,l.kt)("p",null,"Use this if you need to figure out if someone stole something from someone, broke blocks, set fire, griefed, pretty much everything! ",(0,l.kt)("a",{parentName:"p",href:"https://docs.coreprotect.net/"},"External Docs, if you need extra help")),(0,l.kt)("h2",{id:"coreprotect-commands"},"CoreProtect Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"right"},"Aliases"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co inspect")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"See who interacted with things by specific block.")," ",(0,l.kt)("a",{parentName:"td",href:"#Inspect"},"More info")),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"/co i"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"See who interacted with things by user or radius.")," ",(0,l.kt)("a",{parentName:"td",href:"#Lookup"},"More info")),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"/co l"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"Rollback interactions.")," ",(0,l.kt)("a",{parentName:"td",href:"#Rollback"},"More info")),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"/co rb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"Undo rollbacks.")," ",(0,l.kt)("a",{parentName:"td",href:"#Restore"},"More info")),(0,l.kt)("td",{parentName:"tr",align:"right"},(0,l.kt)("inlineCode",{parentName:"td"},"/co rs"))))),(0,l.kt)("h3",{id:"inspect"},"Inspect"),(0,l.kt)("p",null,'For this command, it\'s pretty simple. To use the command, type "/co inspect" then either:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Left click to check the block your cursor is aimed at "),(0,l.kt)("li",{parentName:"ul"},"Right click to check the y coordinate of the block you're looking at. (Usefull for broken/stolen blocks!)",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"(NOTE: Right click is also used to check chest transactions!)")))),(0,l.kt)("p",null,"To go back further in the block data, use ",(0,l.kt)("inlineCode",{parentName:"p"},"/co l <page number>"),"!"),(0,l.kt)("h3",{id:"lookup"},"Lookup"),(0,l.kt)("p",null,"Lookup interactions by radius, user, or a worldedit selection area."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,l.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of lookup} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co l")),(0,l.kt)("td",{parentName:"tr",align:"center"},"/co l {see previous usage}")))),(0,l.kt)("h3",{id:"rollback"},"Rollback"),(0,l.kt)("p",null,'This command is very important when it comes to large griefs or thefts. To use the command, type "/co rollback" followed This command acts as an effective "undo" button for the smp! '),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"(NOTE: If you do not specify a radius, the smp will attempt to rollback ",(0,l.kt)("em",{parentName:"p"},"EVERYTHING")," that user has done within that action.)")),(0,l.kt)("h3",{id:"restore"},"Restore"),(0,l.kt)("p",null,'This command is the opposite to Rollback. As the name implies, it undos the undo button. To use this command, type "/co restore" followed '),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,l.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of rollback} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co rb")),(0,l.kt)("td",{parentName:"tr",align:"center"},"/co rb {see previous usage}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,l.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of restore} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/co rs")),(0,l.kt)("td",{parentName:"tr",align:"center"},"/co rs {see previous usage}")))),(0,l.kt)("h2",{id:"parameter-details"},"Parameter Details"),(0,l.kt)("h3",{id:"uuser"},(0,l.kt)("inlineCode",{parentName:"h3"},"u:<user>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"You can specify a single user or multiple users.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"u:User")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"u:User,AnotherUser"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ttime"},(0,l.kt)("inlineCode",{parentName:"h3"},"t:<time>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"You can specify weeks, days, hours, minutes, and seconds."),"\\\n",(0,l.kt)("em",{parentName:"p"},"Time amounts can be combined, and decimals may be used.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"t:2w,5d,7h,2m,10s")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"t:5d2h")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"t:2.50h")," ",(0,l.kt)("em",{parentName:"li"},"(2 and a half hours)"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rradius"},(0,l.kt)("inlineCode",{parentName:"h3"},"r:<radius>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"A numeric radius targets within that many blocks of your player\nlocation.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"r:10")," ",(0,l.kt)("em",{parentName:"li"},"(target within 10 blocks of your location)")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"r:#world_the_end")," ",(0,l.kt)("em",{parentName:"li"},"(target a specific world)")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"r:#global")," ",(0,l.kt)("em",{parentName:"li"},"(target the entire server)")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"r:#worldedit")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"r:#we")," ",(0,l.kt)("em",{parentName:"li"},"(target a WorldEdit selection)"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"aaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"a:<action>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Restrict the command to a specific action")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"a:+block")," ",(0,l.kt)("em",{parentName:"li"},"(only include placed blocks)"))),(0,l.kt)("h4",{id:"actions"},"Actions"),(0,l.kt)("p",null,"  Action           Description"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:block"),"        blocks placed/broken"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:+block"),"       blocks placed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:-block"),"       blocks broken"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:chat"),"         messages sent in chat"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:click"),"        player interactions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:command"),"      commands used"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:container"),"    items taken from or put in chests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:+container"),"   items put in chests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:-container"),"   items taken from chests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:inventory"),"    items dropped, picked up, deposited, or withdrawn by players"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:+inventory"),"   items picked up or withdrawn by players"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:-inventory"),"   items dropped or deposited by players"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:item"),"         merges ",(0,l.kt)("inlineCode",{parentName:"li"},"a:container")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"a:inventory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:+item"),"        merges ",(0,l.kt)("inlineCode",{parentName:"li"},"a:+container")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"a:+inventory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:-item"),"        merges ",(0,l.kt)("inlineCode",{parentName:"li"},"a:-container")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"a:-inventory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:kill"),"         mobs/animals killed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:session"),"      player logins/logouts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:+session"),"     player logins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:-session"),"     player logouts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:sign"),"         messages written on signs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"a:username"),"     username changes")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iinclude"},(0,l.kt)("inlineCode",{parentName:"h3"},"i:<include>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Can be used to specify a block/item/entity.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"include: stone")," ",(0,l.kt)("em",{parentName:"li"},"(only include stone)")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"include: stone,oak_wood,bedrock")," ",(0,l.kt)("em",{parentName:"li"},"(specify multiple blocks)"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"eexclude"},(0,l.kt)("inlineCode",{parentName:"h3"},"e:<exclude>")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Can be used to exclude a block/item/entity/user.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"eexclude: tnt")," ",(0,l.kt)("em",{parentName:"li"},"(exclude TNT)"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hashtag"},(0,l.kt)("inlineCode",{parentName:"h3"},"#<hashtag>")),(0,l.kt)("p",null,"Add a hashtag to the end of your command to perform additional actions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("inlineCode",{parentName:"li"},"#preview")," ",(0,l.kt)("em",{parentName:"li"},"(perform a rollback preview)"))),(0,l.kt)("h3",{id:"hashtags"},"Hashtags"),(0,l.kt)("p",null,"  Hashtag      Effect"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#preview"),"   Preview a rollback/restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#count"),"     Return the number of rows found in a lookup query"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#verbose"),"   Display additional information during a rollback/restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#silent"),"    Display minimal information during a rollback/restore")))}k.isMDXComponent=!0}}]);