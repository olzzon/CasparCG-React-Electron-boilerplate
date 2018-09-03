import '../assets/css/App.css';
import React, { Component } from 'react';
import {CasparCG} from 'casparcg-connection';


class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.ccgConnection = new CasparCG(
      {
        host: "localhost",
        port: 5250,  
        autoConnect: false,
    });

    // Set the state directly. Use props if necessary.
    this.state = {
      ccgConnectionStatus: false
    };
    this.setConnectionStatus = this.setConnectionStatus.bind(this);
}

  componentDidMount() {
    //Connect to CG server:
    this.ccgConnection.connect();

    //Send a STOP command to get a promise for Server connection status.
    this.ccgConnection.stop(1, 10)
    .then ((connected) => {
        console.log("Send a STOP command to show connection: ", this.ccgConnection.connectionStatus);
      });
    
    // Initialize timer connection status:
    var temp = setInterval(this.setConnectionStatus, 1000);
    console.log("Timer initiated: " + temp);
  }

  // Timer controlled connection status
  setConnectionStatus() {
      this.setState({ccgConnectionStatus: this.ccgConnection.connectionStatus.connected});
      console.log("Checking connection: " + this.ccgConnection.connectionStatus.connected);
  }

  playMedia(channel, layer, mediaSource) {
    this.ccgConnection.play(channel, layer, mediaSource);
  }

  stopMedia(channel, layer) {
    this.ccgConnection.stop(channel, layer);
  }
  
  render() {  
    return (
      <div>
        <h1>CasparCG</h1> 
        <p>Client based on SuperflyTV CasparCG-connecton</p>
        <a>Connection status: </a> 
        <a style={{color: "red"}}>{this.state.ccgConnectionStatus ? "Connected" : "not Connected"}</a>
        <br/>
        <button className="playButton" onClick={() =>
          this.playMedia(1, 10, "GO1080P25")
          }>PLAY</button>
        <button className="playButton" onClick={() =>
          this.stopMedia(1, 10, "GO1080P25")
          }>STOP</button>
  
          </div>
    )
  }
}

export default App
