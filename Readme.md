# GRPC Web Example

This example consists of three parts:

- Client
- Server
- Envoy

# Client
The client is a stock create-react-app with a couple of modifications.

To generate the protojs files, run the following command (This has already been done for you)

```
protoc -I=. ping_pong.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

Copy `ping_pong_grpc_web_pb.js` and `ping_pong_pb.js` into `/client/src`

Note: You must add `/* eslint-disable */` to the top of both  `*_pb.js` files, otherwise create create app won't compile

See `client/src/App.js` for examples of usage

To start

```
cd client
npm start
```

# Server

To run

```
cd server
npm start
```

See `server/server.js` for an example of pulling in the `.proto` files directly in js

# Envoy

Build

```
cd envoy
docker build -t pingpong-envoy .
```

Run
```
docker run --rm -p 9090:9090 pingpong-envoy
```
