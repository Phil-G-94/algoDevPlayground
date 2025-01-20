[Companion Repo](/varDataAlgorithms/AlgoCasts/)

### using `jest` to watch files

`jest dirname/testFileName.extension --watch`

### Using the `debugger` statement

place `debugger` statement inside code, run `node inspect [file name]` in terminal to enter debugger
`cont` for continue inside debugger, `repl` to enter REPL and step through the function call

### Data structures

Are:

Ways of organising information with optimal `runtime complexity` for adding, removing or editing data

JS natively implements several data structures. _Consider what `inferior` data structures are_

#### Queues

Queues follow first-in-first-out principle

Implementing a queue in JS means relying on arrays, but restricting the methods that we use to implement queue functionality, i.e. only using `array.unshift()` to enqueue or `array.pop()` to dequeue.
