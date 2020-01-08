import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { APIClient } = require('./pfs_grpc_web_pb')
const { ListRepoRequest, ListRepoResponse } = require('./pfs_pb')
//const { PingPongServiceClient } = require('./ping_pong_grpc_web_pb');
//const { PingRequest, PongResponse } = require('./ping_pong_pb.js');

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});

var client = new APIClient('http://localhost', null, null);

enableDevTools([
  client,
]);

class App extends Component {

  callGrpcService = () => {
    const request = new ListRepoRequest();

    client.listRepo(request, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
        </header>
      </div>
    );
  }
}

export default App;
