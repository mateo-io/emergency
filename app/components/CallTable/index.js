import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FilterBar from 'components/FilterBar';
import PaperBox from 'components/PaperBox';
import moment from 'moment';
import PlayerWrapper from './PlayerWrapper';
import getPoste from 'helpers/getPoste';
import ReactHover from 'react-hover';
import {blueGrey100} from 'material-ui/styles/colors';


import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableWrapper from './TableWrapper';

import * as constants from 'constants/Colors';


export default class CallTable extends React.Component {

    state = {
      selected: [1],
    };

    isSelected = (index) => {
      return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
      this.setState({
        selected: selectedRows,
      });
    };

  parseTime = (time) => {
    if (isNaN(time)) {return 'NA'}
    const hours = Math.floor(time/3600);
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);
    if (time < 60) {
      return `${seconds}s`
    } else if (time < 3600) {
      return `${minutes}m ${seconds}s`
    } else {
      return `${hours}h ${minutes}m`
    }
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
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}

    const { calls, searchActions, callActions, visibilityFilter } = this.props;
    return (
      <div>
              <FilterBar searchActions={searchActions} callActions={callActions} />

              <h4 style={{margin: '20px'}}>{calls.length==1 ? '1 resultado' : calls.length + ' resultados'}</h4>

              <PaperBox blank>
              <TableWrapper handleRowSelection={this.handleRowSelection}>
          {calls.map((call, i) => {
            return (
                  <TableRow key={i} selected={this.isSelected(i)}>


                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn>
                        <ReactHover
                          options={optionsCursorTrueWithMargin}>
                          <ReactHover.Trigger>
                            <p> comentarios </p>
                          </ReactHover.Trigger>
                          <ReactHover.Hover>
                            <div style={ {background: blueGrey100,padding: '15px'}}>
                            { call.comments.map( (comment, i) => {
                              return <p style={{color: 'black', fontSize: '14px'}}>{i+1}. {comment}</p>
                            })}
                            </div>
                          </ReactHover.Hover>
                        </ReactHover>
                    </TableRowColumn>

                    <TableRowColumn style={ {width: '60px'} }>
                      {getPoste(call.callerNumber)}
                      ({call.userPoste ? call.userPoste : 'NA'})
                    </TableRowColumn>



                    <TableRowColumn style={ {width: '100px'} }>
                      {moment(call.callStart).format('DD-MM-YY HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn >
                      {call.type}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime(call.callDuration)}
                    </TableRowColumn>


                    <TableRowColumn>
                      {moment(call.dispatched).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime( (call.arrived-call.dispatched)/1000)}
                    </TableRowColumn>

                    <TableRowColumn>

                    <PlayerWrapper
                    poste={call.poste}
                    audioPath={call.audioPath}
                    callId={call.id}
                    callStart={call.callStart}
                    updateAudio={callActions.updateAudio}
                    call={call}
                    updateCall={this.handleUpdate}
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
