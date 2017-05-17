import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {duration: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

  function getTimeRemaining(endtime){
    var t = Date.parse(new Date()) - Date.parse(endtime) ;
    var seconds = Math.floor( (t/1000) % 60 );
    var parsedSeconds = ('0' + seconds).slice(-2);
    var minutes = Math.floor( (t/1000/60) % 60 );
    var parsedMinutes = ('0' + minutes).slice(-2);
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': parsedMinutes,
    'seconds': parsedSeconds
  };
}
    const timeDiff = getTimeRemaining(this.props.callStart);

    return (
      <div>
        <h2>{timeDiff.hours ? timeDiff.hours : ''}{timeDiff.minutes}:{timeDiff.seconds}
        </h2>
      </div>
    );
  }
}
