# Neural Redis Module plugin for node_redis

This package allows [node_redis](https://github.com/stockholmux/node_redis) (currently only to [stockhomux](https://github.com/stockholmux/node_redis)'s fork) to interface with the Redis module [neural redis](https://github.com/antirez/neural-redis).

To use this module, you will need Redis 4.0 unstable or higher and the neural-redis module installed.

## Usage

```
var
   redis       = require('redis'),
   redisnn     = require('redis-nn');

redisnn(redis);
```

The neural-redis commands will be mapped to node-friendly names (`nr.create` becomes `client.nr_create`).
