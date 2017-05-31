import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FilterBar from 'components/FilterBar';
import PaperBox from 'components/PaperBox';
import moment from 'moment';
import PlayerWrapper from './PlayerWrapper';


import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableWrapper from './TableWrapper';

import * as constants from 'constants/Colors';

let counter = window.counter = 0;

export default class CallTable extends React.Component {

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
                      {this.parseTime(call.callDuration)}
                    </TableRowColumn>


                    <TableRowColumn>
                      {moment(call.dispatched).format('HH:MM')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived).format('HH:MM')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime(call.duration)}
                    </TableRowColumn>

                    <TableRowColumn>

                    <PlayerWrapper
                    poste={call.poste}
                    uniqueid={call.uniqueid}
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
