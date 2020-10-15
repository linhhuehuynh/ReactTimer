import './App.css';
import Timer from './timer/Timer';

import React, { Component } from 'react'

export default class App extends Component {
  time= new Date();

  state = {
    hour: this.time.getHours(),
    min: this.time.getMinutes(),
    sec: this.time.getSeconds(),
    ampm: 'AM',
    timePaused: false,
    pauseHour: false,
    pauseMin: false,
    pauseSec: false
  }

  updateTime() {
    if (this.state.timePaused === false) {
    let time = new Date()
    this.setState({
      hour: time.getHours(),
      min: time.getMinutes(),
      sec: time.getSeconds(),
    })} 
  }

  updateAMPM() {
    if (this.state.hour >= 12) this.setState({ampm: 'PM'})
    else this.setState({ampm: 'AM'})
  }

  pauseHour = () => {
    let togglePause = this.state.timePaused;
    let toggleHour = this.state.pauseHour;
    this.setState({
      timePaused: !togglePause,
      pauseHour: !toggleHour
    })
  }

  pauseMin = () => {
    let togglePause = this.state.timePaused;
    let toggleMin = this.state.pauseMin;
    this.setState({
      timePaused: !togglePause,
      pauseMin: !toggleMin
    })
  }

  pauseSec = () => {
    let togglePause = this.state.timePaused;
    let toggleSec = this.state.pauseSec;
    this.setState({
      timePaused: !togglePause,
      pauseSec: !toggleSec
    })
  }

  onEnter = e => {
    let togglePause = this.state.timePaused
    let toggleHour = this.state.pauseHour
    let toggleMin = this.state.pauseMin
    let toggleSec = this.state.pauseSec

    if(e.key === 'Enter') {
      if(this.state.pauseHour) this.setState({
        timePaused: !togglePause,
        pauseHour: !toggleHour
      });
      if(this.state.pauseMin) this.setState({
        timePaused: !togglePause,
        pauseMin: !toggleMin
      })
      if(this.state.pauseSec) this.setState({
        timePaused: !togglePause,
        pauseSec: !toggleSec
      })
      
    }
  }

  updateHour = e => {
    this.setState({
      hour: e.target.value
    })
  }

  updateMin = e => {
    this.setState({
      min: e.target.value
    })
  }

  updateSec = e => {
    this.setState({
      sec: e.target.value
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.updateTime()
    },1000);
    this.updateAMPM();

    //If new values are enter, update hour/min/sec here?
    
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="App">
      <p>
        London Clock
      </p>
      <Timer  clickHour={this.pauseHour} pauseHour={this.state.pauseHour} hour={this.state.hour}
              clickMin={this.pauseMin} pauseMin={this.state.pauseMin} min={this.state.min} 
              clickSec={this.pauseSec} pauseSec={this.state.pauseSec} sec={this.state.sec} 

              changeHour={this.updateHour}
              changeMin={this.updateMin}
              changeSec={this.updateSec}

              ampm={this.state.ampm}
              pause={this.state.timePaused}
              enter={this.onEnter}/>
  </div>
    )
  }
}

