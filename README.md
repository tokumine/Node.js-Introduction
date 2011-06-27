Quick 30 minute intro to Node.js
=================================

A broad sweep of Node.js with keynote, presenter notes (this file) and demos.

Based heavily on Ryan Dahl's excellent presentations:

 * http://www.youtube.com/watch?v=jo_B4LTHi3I
 * http://www.youtube.com/watch?v=F6k8lTrAE2g


User Interaction
-----------------
 * Handle loads of concurrent connections (eg a map tile server)
 * Need to do chat
 * 'Realtime' interaction (or realtime enough)
 

How did HTTP deal with it? 
---------------------------
 * Apache: 1 thread per http request
 * Nginx, lighttp: Event Loop


Need
-----
High performance customisable server (not just HTTP)


Solution 
---------
multiplex IO into single thread 


Goal 
-----
Write high performance servers easily (hard has already been done!)


In C, these servers look like
-------------------------------
 * use events
 * have non-blocking IO
 * no shared memory
 * If need to handle more traffic, open more event loop processes
 * Can handle 20-30k TCP connections per thread. Quite scalable.


In other languages, Ruby, Erlang, Python
----------------------------------------
	* Have abstractions
	* 'Green threads' Actually running ontop of a single OS thread and an event loop.
	* 'Erlang processes' 'green processes/threads' running in a separate address space + scheduler - multicore happy and allows you to kill an individual process. Still green threads though. Still running on an EL.
	* Event loops (eventmachine (Ruby), twisted(Python)). 
	
Abstractions are still EL and non-blocking IO.


Problems with writing EL+nonblocking I/O in C et al.
-----------------------------------------------------
 * If C, have to write in C
 * Everything has to be non-blocking. 
 * All or nothing. Can't mix libraries (eg. MySQL doesn't have a non-blocking client)


Javascript
-----------
 * Performance arms race (Google Apple, Moz, Opera, MS...)
 * No preconceived ideas about I/O
 * Browsers are single threaded, and non-blocking. 
 * People already get it (mouseover).


V8 performance
--------------
 * Fastest scripting language now
 * V8 is an optimising compiler to machine code
 * graphs


Node is
-------
 * Set of bindings on top of V8 for non-browser work: sockets, files
 * purely non-blocking interfaces, so beginners can achieve decent concurrency
 * Only 1 thread, only 1 stack
 * lots of low-level features
 * Emphasis on networking
 * Excellent socket/http support


Questions
----------
 * Single threaded
 * No automatic scaling
 * What about multicore?
	 * Open new processes.
	 * communicate over sendmessage, or IPC webworkers.
	 * Node: low level. You have to make your own.


Install
--------
look up on github: https://github.com/joyent/node/wiki/Installation


Quick 1 min
-----------
 * REPL
 * process object == windows object
 * tab completion
 * .exit


Demo
-----
Work through demo folder


Packages
---------
 * npm
 * http servers
 * database drivers etc


Any major pain points?
----------------------
* Exceptions - backtraces is only made of the current callback scope