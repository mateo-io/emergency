import React from 'react';
import Wrapper from './Wrapper';
import Text from './Text';
import ReactAudioPlayer from 'react-audio-player';
import fs from 'fs';

import SvgIcon from 'material-ui/SvgIcon';
import PoliceIcon from 'assets/police.js';
import OtherIcon from 'assets/other.js';
import TruckIcon from 'assets/truckBlack.js';
import AmbulanceIcon from 'material-ui/svg-icons/maps/local-hospital';
import {blue500, red500, green500} from 'material-ui/styles/colors';

export default class CallDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      file: ''
    }

  }
  formatDate = (date) => {
    const newDate = date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDate()
    + '/' + date.getMonth() + '/' + date.getFullYear()
    return newDate;
  }

  parseSeconds = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);
    if (time > 60) {
      return seconds>0 ? `${minutes}m ${seconds}s` : `${minutes}m`
    } else
      return seconds>9 ? Math.floor(time) + 's' : `0${Math.floor(time)}`
  }

  handleOpenCall = (evt) => {
    console.log("Open call called");
    this.props.openCall(this.props.call.id);
  }

  getRecordingId = (uniqueid) => {
    if (uniqueid==undefined) {console.log("SHITE"); return 0};
    const id = uniqueid.split('-');
    const realId = id[1].slice(-3);
    return realId
  }

  getRecordingPath = () => {
    return fs.readdirSync('/calldir/0003/').forEach(file => {
    const fileId = this.getRecordingId(file);

    const uniqueid = this.props.call.uniqueid;
    const parsedId = String(Math.floor(Number(uniqueid)));
    const callAsteriskId = parsedId ? parsedId.slice(-3) : 0;
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
    const iconsStyle = { height: '40px', width: '40px' }

    const iconsObject = {
      "AMBULANCIA" : <div><AmbulanceIcon style={iconsStyle} color={red500} /></div>,
      "GRUA" : <div><SvgIcon style={iconsStyle}color={'yellow'}><TruckIcon /></SvgIcon></div>,
      "POLICIA" : <div><SvgIcon style={iconsStyle} color={green500}><PoliceIcon  /></SvgIcon></div>,
      "OTRO" : <div><SvgIcon style={iconsStyle} color={blue500}><OtherIcon  /></SvgIcon></div>
    }

    const { id, duration, status, origin, poste,
      comments, type, dispatched, arrived, callDuration } = this.props.call;



      return (
        <Wrapper onDoubleClick={ this.handleOpenCall }>

        <div className="row">
          <div className="col-md-2">
            <p><Text>Estado: </Text>{status}</p>
            <p><Text>Poste: </Text>{poste}</p>
            <p><Text>Origen: </Text>{origin}</p>
            <p><Text>ID</Text>: {id} </p>
          </div>
          <div className="col-md-2">
            <p><Text>Tipo: </Text>{type}</p>
            <p><Text>Despacho: </Text>{dispatched ? this.formatDate(dispatched) : 'NA'} </p>
            <p><Text>Llegada: </Text>{arrived ? this.formatDate(arrived) : 'NA'} </p>
            <div>{iconsObject[type] }</div>
          </div>
          <div className="col-md-4">
            <Text>Comentarios</Text>
            <ul>
            {comments.map( (comment, index) => {
              return (
                <li key={index}>{comment}</li>
              )
            })}
            </ul>
          </div>

          <div className="col-md-2">
            <div style={{}}><Text>Duracion Llamada: </Text>{this.parseSeconds(callDuration)}</div>
            <div style={{}}><Text>Duracion Atencion: </Text>{this.parseSeconds(duration)}</div>
            <div style={{}}><Text>Duracion Servicio: </Text>{this.parseSeconds( (arrived - dispatched)/1000 )}</div>
          </div>

        </div>
        <div className="row" style= { {textAlign: 'center', marginTop: '20px', bottom: '0'}}>
          <ReactAudioPlayer
            src={"/calldir/0003/"+this.state.file}
            controls
            />
        </div>
        </Wrapper>

      )
    }


  }
