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
For this command, it's pretty simple. Just use the command, right click or left click on a block,

and use the info provided in the chat to see who did what at that specific block.

Also, use `/co l <page number>` to switch between interaction pages faster.

### Lookup
Lookup interactions by radius, user, or a worldedit selection area.

| Command Name        | Usage (Put after the command name)   |
| ------------- |:-------------:|
| `/co lookup`      | u:{put username here} t:{put how long ago it was here} r:{radius of lookup} a:{what action they used} i:{include certain blocks or entities} e:{exclude certain blocks or entities} |
| `/co l`      | /co l {see previous usage} |
