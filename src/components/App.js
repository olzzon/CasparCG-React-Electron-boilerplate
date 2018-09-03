import '../assets/css/App.css';
import React, { Component } from 'react';
import {CasparCG} from 'casparcg-connection';


class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.CGconnection = {};

    // Set the state directly. Use props if necessary.
    this.state = {
    };
  }

  componentDidMount() {
    this.CGconnection = new CasparCG(
      {
        host: "localhost",
        port: 5250,
        onConnect: (connected) => {
          // do something once we get connected
          console.log("Are we conencted?", connected);
        }
    });
  }


  playMedia(channel, layer, mediaSource) {
    this.CGconnection.play(channel, layer, mediaSource);
  }

  stopMedia(channel, layer) {
    this.CGconnection.stop(channel, layer);
  }

  
  render() {
  
    return (
      <div>
        <h1>CasparCG</h1> 
        <a>Client based on SuperflyTV CasparCG-connecton</a>
        <br/><br/>

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
