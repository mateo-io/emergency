import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import getRecordingPath from 'helpers/getRecordingPath';
import { updateCallDB } from 'helpers/api';

export default class PlayerWrapper extends React.Component {

  constructor() {
    super()
    this.state = {
      file: ''
    }
  }
  updateCallForGood = () => {
    console.log("**********update for gooooood")
    setTimeout(
    updateCallDB(this.props.call)
    , 2000)
  }

  handleShow = () => {
    console.log("HandleShow called")
    if(this.props.audioPath){
      console.log("it has audiopath", this.props.audioPath)
      this.props.showPlayer(this.props.callId)
    } else {
      getRecordingPath(this.props.callId, this.props.callStart, this.props.updateAudio, this.updateCallForGood)
    }
  }


/*
getRecordingPath = (poste, uniqueid) => {
  try {
    return fs.readdirSync(`/calldir/${poste}/`).forEach(file => {
      counter +=1;
      if (file==undefined) {return 0}


      const fileId = this.getRecordingId(file);
      const parsedId = String(Math.floor(Number(uniqueid)));
      const callAsteriskId = parsedId ? parsedId.slice(-3) : 0;
      if (fileId == callAsteriskId ) {
        console.log("I found it EUREKKA!");
        console.log(file);
        this.setState({file: file});
      }
    })

  } catch (e) {
  }
}


  getRecordingId = (uniqueid) => {
    if (uniqueid==undefined) {console.log("Recording id undefined"); return };
    const id = uniqueid.split('-');
    const realId = id[1].slice(-3);
    return realId
  }
*/


  render(){
    return(
      <div>
      {this.props.show ?
      <ReactAudioPlayer
      style={ {width: '110px'} }
      src={`${this.props.audioPath}.mp3`}
      controls
      />
      :
      <button onClick={this.handleShow}>cargar</button>
    }
    </div>
  )
  }

}
