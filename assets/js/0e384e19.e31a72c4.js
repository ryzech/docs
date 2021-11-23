"use strict";(self.webpackChunkmod_docs=self.webpackChunkmod_docs||[]).push([[671],{9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d="Coreprotect",p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Coreprotect",description:"Plugin we use to track every interaction anyone does.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ryzech/docs/edit/main/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},m=[{value:"Coreprotect Commands",id:"coreprotect-commands",children:[{value:"Inspect",id:"inspect",children:[],level:3},{value:"Lookup",id:"lookup",children:[],level:3},{value:"Rollback",id:"rollback",children:[],level:3},{value:"Restore",id:"restore",children:[],level:3}],level:2},{value:"Parameter Details",id:"parameter-details",children:[{value:"<code>u:&lt;user&gt;</code>",id:"uuser",children:[],level:3},{value:"<code>t:&lt;time&gt;</code>",id:"ttime",children:[],level:3},{value:"<code>r:&lt;radius&gt;</code>",id:"rradius",children:[],level:3},{value:"<code>a:&lt;action&gt;</code>",id:"aaction",children:[{value:"Actions",id:"actions",children:[],level:4}],level:3},{value:"<code>i:&lt;include&gt;</code>",id:"iinclude",children:[],level:3},{value:"<code>e:&lt;exclude&gt;</code>",id:"eexclude",children:[],level:3},{value:"<code>#&lt;hashtag&gt;</code>",id:"hashtag",children:[],level:3},{value:"Hashtags",id:"hashtags",children:[],level:3}],level:2}],k={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coreprotect"},"Coreprotect"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Plugin we use to track every interaction anyone does.")),(0,i.kt)("p",null,"Use this if you need to figure out if someone stole something from someone, broke blocks, set fire, griefed, pretty much everything! ",(0,i.kt)("a",{parentName:"p",href:"https://docs.coreprotect.net/"},"External Docs, if you need extra help")),(0,i.kt)("h2",{id:"coreprotect-commands"},"Coreprotect Commands"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Aliases"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co inspect")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"See who interacted with things by specific block.")," ",(0,i.kt)("a",{parentName:"td",href:"#Inspect"},"More info")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"/co i"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"See who interacted with things by user or radius.")," ",(0,i.kt)("a",{parentName:"td",href:"#Lookup"},"More info")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"/co l"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Rollback interactions.")," ",(0,i.kt)("a",{parentName:"td",href:"#Rollback"},"More info")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"/co rb"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Undo rollbacks.")," ",(0,i.kt)("a",{parentName:"td",href:"#Restore"},"More info")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"/co rs"))))),(0,i.kt)("h3",{id:"inspect"},"Inspect"),(0,i.kt)("p",null,'For this command, it\'s pretty simple. To use the command, type "/co inspect" then either:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Left click to check the block your cursor is aimed at "),(0,i.kt)("li",{parentName:"ul"},"Right click to check the y coordinate of the block you're looking at. (Usefull for broken/stolen blocks!)",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"(NOTE: Right click is also used to check chest transactions!)")))),(0,i.kt)("p",null,"To go back further in the block data, use ",(0,i.kt)("inlineCode",{parentName:"p"},"/co l <page number>"),"!"),(0,i.kt)("h3",{id:"lookup"},"Lookup"),(0,i.kt)("p",null,"Lookup interactions by radius, user, or a worldedit selection area."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co lookup")),(0,i.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of lookup} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co l")),(0,i.kt)("td",{parentName:"tr",align:"center"},"/co l {see previous usage}")))),(0,i.kt)("h3",{id:"rollback"},"Rollback"),(0,i.kt)("p",null,'This command is very important when it comes to large griefs or thefts. To use the command, type "/co rollback" followed This command acts as an effective "undo" button for the smp! '),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"(NOTE: If you do not specify a radius, the smp will attempt to rollback ",(0,i.kt)("em",{parentName:"p"},"EVERYTHING")," that user has done within that action.)")),(0,i.kt)("h3",{id:"restore"},"Restore"),(0,i.kt)("p",null,'This command is the opposite to Rollback. As the name implies, it undos the undo button. To use this command, type "/co restore" followed '),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Syntax/Usage  (how to use the command)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co rollback")),(0,i.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of rollback} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co rb")),(0,i.kt)("td",{parentName:"tr",align:"center"},"/co rb {see previous usage}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co restore")),(0,i.kt)("td",{parentName:"tr",align:"center"},"u:{put username here} t:{put how long ago it was here} r:{radius of restore} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/co rs")),(0,i.kt)("td",{parentName:"tr",align:"center"},"/co rs {see previous usage}")))),(0,i.kt)("h2",{id:"parameter-details"},"Parameter Details"),(0,i.kt)("h3",{id:"uuser"},(0,i.kt)("inlineCode",{parentName:"h3"},"u:<user>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You can specify a single user or multiple users.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"u:User")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"u:User,AnotherUser"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ttime"},(0,i.kt)("inlineCode",{parentName:"h3"},"t:<time>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You can specify weeks, days, hours, minutes, and seconds."),"\\\n",(0,i.kt)("em",{parentName:"p"},"Time amounts can be combined, and decimals may be used.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"t:2w,5d,7h,2m,10s")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"t:5d2h")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"t:2.50h")," ",(0,i.kt)("em",{parentName:"li"},"(2 and a half hours)"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rradius"},(0,i.kt)("inlineCode",{parentName:"h3"},"r:<radius>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A numeric radius targets within that many blocks of your player\nlocation.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"r:10")," ",(0,i.kt)("em",{parentName:"li"},"(target within 10 blocks of your location)")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"r:#world_the_end")," ",(0,i.kt)("em",{parentName:"li"},"(target a specific world)")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"r:#global")," ",(0,i.kt)("em",{parentName:"li"},"(target the entire server)")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"r:#worldedit")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"r:#we")," ",(0,i.kt)("em",{parentName:"li"},"(target a WorldEdit selection)"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"aaction"},(0,i.kt)("inlineCode",{parentName:"h3"},"a:<action>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Restrict the command to a specific action")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"a:+block")," ",(0,i.kt)("em",{parentName:"li"},"(only include placed blocks)"))),(0,i.kt)("h4",{id:"actions"},"Actions"),(0,i.kt)("p",null,"  Action           Description"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"a:block"),"        blocks placed/broken\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:+block"),"       blocks placed\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:-block"),"       blocks broken\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:chat"),"         messages sent in chat\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:click"),"        player interactions\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:command"),"      commands used\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:container"),"    items taken from or put in chests\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:+container"),"   items put in chests\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:-container"),"   items taken from chests\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:inventory"),"    items dropped, picked up, deposited, or withdrawn by players\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:+inventory"),"   items picked up or withdrawn by players\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:-inventory"),"   items dropped or deposited by players\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:item"),"         merges ",(0,i.kt)("inlineCode",{parentName:"p"},"a:container")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"a:inventory"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:+item"),"        merges ",(0,i.kt)("inlineCode",{parentName:"p"},"a:+container")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"a:+inventory"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:-item"),"        merges ",(0,i.kt)("inlineCode",{parentName:"p"},"a:-container")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"a:-inventory"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:kill"),"         mobs/animals killed\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:session"),"      player logins/logouts\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:+session"),"     player logins\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:-session"),"     player logouts\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:sign"),"         messages written on signs\n",(0,i.kt)("inlineCode",{parentName:"p"},"a:username"),"     username changes"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iinclude"},(0,i.kt)("inlineCode",{parentName:"h3"},"i:<include>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Can be used to specify a block/item/entity.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"include: stone")," ",(0,i.kt)("em",{parentName:"li"},"(only include stone)")),(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"include: stone,oak_wood,bedrock")," ",(0,i.kt)("em",{parentName:"li"},"(specify multiple blocks)"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eexclude"},(0,i.kt)("inlineCode",{parentName:"h3"},"e:<exclude>")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Can be used to exclude a block/item/entity/user.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"eexclude: tnt")," ",(0,i.kt)("em",{parentName:"li"},"(exclude TNT)"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hashtag"},(0,i.kt)("inlineCode",{parentName:"h3"},"#<hashtag>")),(0,i.kt)("p",null,"Add a hashtag to the end of your command to perform additional actions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"#preview")," ",(0,i.kt)("em",{parentName:"li"},"(perform a rollback preview)"))),(0,i.kt)("h3",{id:"hashtags"},"Hashtags"),(0,i.kt)("p",null,"  Hashtag      Effect"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"#preview"),"   Preview a rollback/restore\n",(0,i.kt)("inlineCode",{parentName:"p"},"#count"),"     Return the number of rows found in a lookup query\n",(0,i.kt)("inlineCode",{parentName:"p"},"#verbose"),"   Display additional information during a rollback/restore\n",(0,i.kt)("inlineCode",{parentName:"p"},"#silent"),"    Display minimal information during a rollback/restore"))}c.isMDXComponent=!0}}]);