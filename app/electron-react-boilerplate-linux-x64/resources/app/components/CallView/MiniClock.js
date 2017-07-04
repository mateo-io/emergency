
import React from 'react';

export default class MiniClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {duration: 0};
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
        duration: this.state.duration + 1
      });
  }

  parseSeconds = (time) => {
    if (time > 60) {
      return `${Math.floor(time/60)}m ${Math.floor(time%60)}s`
    } else
      return Math.floor(time) + 's'
  }
  render() {
    const style = {display: 'inline-block'}

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
        //Get duration as props and increase it by 1 each second
//{this.parseSeconds(this.state.duration)}
    return (
        <div style={this.props.inline && style}>
        {this.props.duration>0 ?
          <h6>{this.parseSeconds(this.props.duration)}</h6> :
          <h6>{timeDiff.hours ? timeDiff.hours : ''}{timeDiff.minutes}:{timeDiff.seconds}</h6>
        }
        </div>
    );
  }
}
