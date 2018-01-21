# Tutlecoin-Blockchain-Explorer
Block explorer for Turtlecoin cryptocurrency.

#### Installation

1) It takes data from daemon Turtlecoind. It should be accessible from the Internet. Run Turtlecoind with open port as follows:
```bash
./TurtleCoind --enable-cors=* --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
