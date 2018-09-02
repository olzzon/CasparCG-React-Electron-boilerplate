import '../assets/css/App.css';
import React, { Component } from 'react';
import {CasparCG} from 'casparcg-connection';

  var connection = new CasparCG({host: "91.224.210.82", onConnect: (connected) => {
    // do something once we get connected
      console.log("Are we conencted?", connected);
      }
    });

class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
    };
  }

  componentDidMount() {
  }


  playMedia(mediaSource) {
    connection.play(1, 10, mediaSource);
  }

  stopMedia(mediaSource) {
    connection.stop(1, 10, mediaSource);
  }

  
  render() {
  
    return (
      <div>
        <h1>CasparCG</h1> 
        <a>Client based on SuperflyTV CasparCG-connecton</a>
        <br/><br/>

        <button className="playButton" onClick={() =>
          this.playMedia("GO1080P25")
          }>PLAY</button>
        <button className="playButton" onClick={() =>
          this.stopMedia("GO1080P25")
          }>STOP</button>
      </div>
    )
  }
}

export default App
