import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FilterBar from 'components/FilterBar';
import PaperBox from 'components/PaperBox';
import moment from 'moment';

import ReactAudioPlayer from 'react-audio-player';
import fs from 'fs';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableWrapper from './TableWrapper';

import * as constants from 'constants/Colors';


export default class CallTable extends React.Component {

getRecordingPath = (callerId) => {
  try {
    return fs.readdirSync(`/calldir/${callerId}/`).forEach(file => {
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

  } catch (e) {
    console.log("ERORR IN FILE")

  }
}

  getRecordingId = (uniqueid) => {
    if (uniqueid==undefined) {console.log("SHITE"); return 0};
    const id = uniqueid.split('-');
    const realId = id[1].slice(-3);
    return realId
  }


  componentWillMount(){
    this.getRecordingPath()
  }

  render() {
    const style = {minHeight: "200px",
    height: 'auto',
    borderRadius: '10px',
    background: `${constants.primary}`,
    color: "#e8e8e8",
    margin: "5px 5px",
    padding: "10px",
    lineHeight: "1.5em",
    fontSize: "16px",
    fontWeight: 700
  }

    const { calls, searchActions, callActions, visibilityFilter } = this.props;
    return (
      <div>
              <FilterBar callActions={callActions} />

              <h4 style={{margin: '20px'}}>{calls.length==1 ? '1 resultado' : calls.length + ' resultados'}</h4>

              <PaperBox blank>
              <TableWrapper>
          {calls.map((call, i) => {
            return (
                  <TableRow key={i}>
                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn >
                      {call.callerId}
                    </TableRowColumn>

                    <TableRowColumn >
                      {call.type}
                    </TableRowColumn>

                    <TableRowColumn style={ {width: '100px'} }>
                      {moment(call.callStart).format('DD-MM-YY HH:MM')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {call.callDuration}
                    </TableRowColumn>

                    <TableRowColumn>
                      {call.duration}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.dispatched).format('HH:MM')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived).format('HH:MM')}
                    </TableRowColumn>

                    <TableRowColumn>
                    <ReactAudioPlayer
                    style={ {width: '50px'} }
                    src={`/calldir/${call.poste}/${this.getRecordingPath(call.callerId)}`}
                    controls
                    />
                    </TableRowColumn>
                  </TableRow>
            )}
        )}
              </TableWrapper>
              </PaperBox>
      </div>
    )
  }
}
