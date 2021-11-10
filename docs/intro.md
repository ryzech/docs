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
This command is very important when it comes to large griefs or thefts. To use the command, type "/co rollback" followed by specific rollback parameters. This command acts as a sort of "undo" button for 

### Restore

| Command Name        | Syntax/Usage  (how to use the command)  |
| ------------- |:-------------:|
| `/co rollback`  | u:{put username here} t:{put how long ago it was here} r:{radius of rollback} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}
| `/co rb`      | /co rb {see previous usage} |
| `/co restore`  | u:{put username here} t:{put how long ago it was here} r:{radius of restore} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities}
| `/co rs`      | /co rs {see previous usage} |



