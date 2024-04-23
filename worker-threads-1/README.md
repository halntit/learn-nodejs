# Worker Thread

## test slowness (no worker-thread)

- start server ```node main-threads.js```
- run home-page first http://localhost:8000 -> return result quick (in miliseconds)
- run slow-page http://localhost:8000/slow-page -> return really slow, may takes 7s
- hold
- now run slow-page first, then quickly refresh home-page, home-page now will be blocked and can only return result after slow-page finish loading
