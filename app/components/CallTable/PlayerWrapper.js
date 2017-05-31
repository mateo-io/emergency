import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import fs from 'fs';

export default class PlayerWrapper extends React.Component {

  constructor() {
    super()
    this.state = {
      file: ''
    }
  }


  componentWillMount(){
    if(this.props.uniqueid){
      this.getRecordingPath(this.props.poste, this.props.uniqueid)
    }
  }

getRecordingPath = (poste, uniqueid) => {
  try {
    return fs.readdirSync(`/calldir/${poste}/`).forEach(file => {
      counter +=1;
      if (file==undefined) {return 0}

      console.log("Got into fs")

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
    console.log("Get recording id called for id: ", uniqueid)
    if (uniqueid==undefined) {console.log("Recording id undefined"); return };
    const id = uniqueid.split('-');
    const realId = id[1].slice(-3);
   console.log("getRecordingId will return ", realId);
    return realId
  }

  render(){
    return(
      <ReactAudioPlayer
      style={ {width: '110px'} }
      src={`/calldir/${this.props.poste}/${this.state.file}`}
      controls
      />
    )
  }

}
