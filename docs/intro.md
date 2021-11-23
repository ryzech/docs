# Coreprotect

> Plugin we use to track every interaction anyone does.

Use this if you need to figure out if someone stole something from someone, broke blocks, set fire, griefed, pretty much everything! [External Docs, if you need extra help](https://docs.coreprotect.net/)
## Coreprotect Commands

| Command Name        | Description           | Aliases  |
| ------------- |:-------------:| -----:|
| `/co inspect`      | `See who interacted with things by specific block.` [More info](#Inspect) | `/co i` |
| `/co lookup`      | `See who interacted with things by user or radius.` [More info](#Lookup) | `/co l` |
| `/co rollback`      | `Rollback interactions.` [More info](#Rollback) | `/co rb` |
| `/co restore`      | `Undo rollbacks.` [More info](#Restore) | `/co rs` |

### Inspect
For this command, it's pretty simple. To use the command, type "/co inspect" then either:
* Left click to check the block your cursor is aimed at 
* Right click to check the y coordinate of the block you're looking at. (Usefull for broken/stolen blocks!)
 >(NOTE: Right click is also used to check chest transactions!)

To go back further in the block data, use `/co l <page number>`!

### Lookup
Lookup interactions by radius, user, or a worldedit selection area.

| Command Name        | Syntax/Usage  (how to use the command)  |
| ------------- |:-------------:|
| `/co lookup`      | u:{put username here} t:{put how long ago it was here} r:{radius of lookup} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities} |
| `/co l`      | /co l {see previous usage} |


### Rollback
This command is very important when it comes to large griefs or thefts. To use the command, type "/co rollback" followed This command acts as an effective "undo" button for the smp! 
>(NOTE: If you do not specify a radius, the smp will attempt to rollback _EVERYTHING_ that user has done within that action.)

### Restore
This command is the opposite to Rollback. As the name implies, it undos the undo button. To use this command, type "/co restore" followed 

| Command Name        | Syntax/Usage  (how to use the command)  |
| ------------- |:-------------:|
| `/co rollback`  | u:{put username here} t:{put how long ago it was here} r:{radius of rollback} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}
| `/co rb`      | /co rb {see previous usage} |
| `/co restore`  | u:{put username here} t:{put how long ago it was here} r:{radius of restore} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}
| `/co rs`      | /co rs {see previous usage} |

Parameter Details
-----------------

### `u:<user>`

*You can specify a single user or multiple users.*

-   Example: `u:User`
-   Example: `u:User,AnotherUser`

* * * * *

### `t:<time>`

*You can specify weeks, days, hours, minutes, and seconds.*\
 *Time amounts can be combined, and decimals may be used.*

-   Example: `t:2w,5d,7h,2m,10s`
-   Example: `t:5d2h`
-   Example: `t:2.50h` *(2 and a half hours)*

* * * * *

### `r:<radius>`

*A numeric radius targets within that many blocks of your player
location.*

-   Example: `r:10` *(target within 10 blocks of your location)*
-   Example: `r:#world_the_end` *(target a specific world)*
-   Example: `r:#global` *(target the entire server)*
-   Example: `r:#worldedit` or `r:#we` *(target a WorldEdit selection)*

* * * * *

### `a:<action>`

*Restrict the command to a specific action*

-   Example: `a:+block` *(only include placed blocks)*

#### Actions

  Action           Description
  ---------------- --------------------------------------------------------------
  `a:block`        blocks placed/broken
  `a:+block`       blocks placed
  `a:-block`       blocks broken
  `a:chat`         messages sent in chat
  `a:click`        player interactions
  `a:command`      commands used
  `a:container`    items taken from or put in chests
  `a:+container`   items put in chests
  `a:-container`   items taken from chests
  `a:inventory`    items dropped, picked up, deposited, or withdrawn by players
  `a:+inventory`   items picked up or withdrawn by players
  `a:-inventory`   items dropped or deposited by players
  `a:item`         merges `a:container` and `a:inventory`
  `a:+item`        merges `a:+container` and `a:+inventory`
  `a:-item`        merges `a:-container` and `a:-inventory`
  `a:kill`         mobs/animals killed
  `a:session`      player logins/logouts
  `a:+session`     player logins
  `a:-session`     player logouts
  `a:sign`         messages written on signs
  `a:username`     username changes

* * * * *

### `i:<include>`

*Can be used to specify a block/item/entity.*

-   Example: `include: stone` *(only include stone)*
-   Example: `include: stone,oak_wood,bedrock` *(specify multiple blocks)*

* * * * *

### `e:<exclude>`

*Can be used to exclude a block/item/entity/user.*

-   Example: `eexclude: tnt` *(exclude TNT)*

* * * * *

### `#<hashtag>`

Add a hashtag to the end of your command to perform additional actions.

-   Example: `#preview` *(perform a rollback preview)*

### Hashtags

  Hashtag      Effect
  ------------ ----------------------------------------------------------
  `#preview`   Preview a rollback/restore
  `#count`     Return the number of rows found in a lookup query
  `#verbose`   Display additional information during a rollback/restore
  `#silent`    Display minimal information during a rollback/restore
