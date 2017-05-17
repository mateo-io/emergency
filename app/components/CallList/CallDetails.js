import React from 'react';
import Wrapper from './Wrapper';
import Text from './Text';
import ReactAudioPlayer from 'react-audio-player';

export default class CallDetails extends React.Component {

  formatDate = (date) => {
    const newDate = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDay()
    + '/' + date.getMonth()
    return newDate;
  }

  parseSeconds = (time) => {
    if (time > 60) {
      return `${Math.floor(time/60)} m ${Math.floor(time%60)} s`
    } else
      return Math.floor(time) + ' s'
  }

  handleOpenCall = () => {
    console.log("Open call called")
    this.props.openCall(this.props.call.id)
  }

  render() {
    const { id, duration, status, origin, poste,
      comments, type, dispatched, arrived } = this.props.call;

    const style = {
      wrapper : {
      }
    }

    var audio = new Audio('/home/dude/cool/' +'reason.mp3');
    console.log("AUDIO! ", audio);

      return (
        <Wrapper style={ style.wrapper } onDoubleClick={ ()=>this.handleOpenCall }>

        <div className="row">
          <div className="col-md-2">
            <p><Text>ID</Text>: {id} </p>
            <p><Text>Poste: </Text>{poste}</p>
            <p><Text>Tipo: </Text>{type}</p>
            <p><Text>Estado: </Text>{status}</p>
          </div>
          <div className="col-md-2">
            <p><Text>Despacho: </Text>{dispatched ? this.formatDate(dispatched) : 'NA'} </p>
            <p><Text>Llegada: </Text>{arrived ? this.formatDate(arrived) : 'NA'} </p>
          </div>
          <div className="col-md-4">
            <Text>Comentarios</Text>
            {comments.map( (comment, index) => {
              return (
                <p key={index}>{comment}</p>
              )
            })}
          </div>

          <div className="col-md-2">
            <div style={{}}><Text>Duracion Llamada: </Text>{this.parseSeconds(duration)}</div>
            <div style={{}}><Text>Duracion Servicio: </Text>{this.parseSeconds( (arrived - dispatched)/1000 )}</div>
          </div>

        </div>
        <div className="row" style= { {textAlign: 'center', marginTop: '20px'}}>
          <ReactAudioPlayer
            src="/calldir/0003/20170517-11051495038212-0003.wav"
            controls
            />
        </div>
        </Wrapper>

      )
    }


  }
