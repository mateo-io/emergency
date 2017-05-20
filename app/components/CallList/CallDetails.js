import React from 'react';
import Wrapper from './Wrapper';
import Text from './Text';
import ReactAudioPlayer from 'react-audio-player';
import fs from 'fs';

export default class CallDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      file: ''
    }

  }
  formatDate = (date) => {
    const newDate = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDay()
    + '/' + date.getMonth() + '/' + date.getFullYear()
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

  getRecordingId = (uniqueid) => {
    console.log("UNIK is ", uniqueid)
    if (uniqueid==undefined) {console.log("SHITE"); return 0};
    const id = uniqueid.split('-');
    const realId = id[1].slice(-3);
    return realId
  }

  getRecordingPath = () => {
    return fs.readdirSync('/calldir/0003/').forEach(file => {
    const fileId = this.getRecordingId(file);
    console.log("Type of fileId is ", typeof fileId)

    const uniqueid = this.props.call.uniqueid;
    console.log("MY UNIKKKKK", uniqueid)
    console.log(typeof uniqueid)
    const parsedId = String(Math.floor(Number(uniqueid)));
    const callAsteriskId = parsedId ? parsedId.slice(-3) : 0;
    console.log("FileID ", fileId)
    console.log("CallAsteriskid ", callAsteriskId)
    if (fileId == callAsteriskId ) {
      console.log("I found it EUREKKA!");
      console.log(file);
      this.setState({file: file});
    }
})
  }
  componentWillMount(){
    this.getRecordingPath()
  }

  render() {
    const { id, duration, status, origin, poste,
      comments, type, dispatched, arrived } = this.props.call;

    const style = {
      wrapper : {
      }
    }


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
            src={"/calldir/0003/"+this.state.file}
            controls
            />
        </div>
        </Wrapper>

      )
    }


  }
