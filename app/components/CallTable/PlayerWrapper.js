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

  componentWillMount(){
    if(!this.props.audioPath){
      getRecordingPath(this.props.callId, this.props.callStart, this.props.updateAudio, this.updateCallForGood)
    } else {
      console.log("Already has audioPath", this.props.audioPath)
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
      <ReactAudioPlayer
      style={ {width: '110px'} }
      src={`${this.props.audioPath}.mp3`}
      controls
      />
    )
  }

}
