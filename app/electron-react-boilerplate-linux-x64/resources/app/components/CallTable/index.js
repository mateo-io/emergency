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
import Icons from 'components/Icons';


import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableWrapper from './TableWrapper';

import * as constants from 'constants/Colors';


export default class CallTable extends React.Component {

    state = {
      selected: [1],
      showIndex: []
    };

    showPlayer = (id) => {
      this.setState({showIndex: this.state.showIndex.concat([id])})
    }

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
    let itemsArray = [];

          calls.map((call, i) => {
            itemsArray.push (
                  <TableRow key={i} selected={this.isSelected(i)}>

                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn>
                      <PlayerWrapper
                      poste={call.poste}
                      show={this.state.showIndex.includes(call.id)}
                      audioPath={call.audioPath}
                      callId={call.id}
                      callStart={call.callStart}
                      updateAudio={callActions.updateAudio}
                      call={call}
                      updateCall={this.handleUpdate}
                      showPlayer={this.showPlayer}
                      />
                    </TableRowColumn>


                    <TableRowColumn>
                        <ReactHover
                          options={optionsCursorTrueWithMargin}>
                          <ReactHover.Trigger>
                            <p> {call.comments[0] ? call.comments[0] : ''}... </p>
                          </ReactHover.Trigger>
                          <ReactHover.Hover>
                            <div style={ {background: blueGrey100,padding: '15px'}}>
                            { call.comments[0] ?
                              call.comments.map( (comment, i) => {
                              return <p key={i} style={{color: 'black', fontSize: '14px'}}>{i+1}. {comment}</p>
                            })
                            :
                            <span>Sin comentarios.</span>
                          }
                            </div>
                          </ReactHover.Hover>
                        </ReactHover>
                    </TableRowColumn>


                    <TableRowColumn style={ {width: '60px'} }>

                        <ReactHover
                          options={optionsCursorTrueWithMargin}>
                          <ReactHover.Trigger>
                          <div>
                          {getPoste(call.callerNumber).poste}
                          ({call.userPoste ? call.userPoste : 'NA'})
                          </div>
                          </ReactHover.Trigger>
                          <ReactHover.Hover>
                            <div style={ {background: blueGrey100, padding: '15px', lineHeight: '30px'}}>
                            {
                              <div>
                                <p>Distancia al poste: <b>{call.posteDistance ? call.posteDistance : 'NA'}</b></p>
                                <p>Antes/Despues: <b>{call.accidenteRelativo ? call.accidenteRelativo : 'NA'}</b></p>
                                <p>Carretera:<b>{getPoste(call.callerNumber).lugar1}-{getPoste(call.callerNumber).lugar2}</b></p>
                                <p>Dirigiendose: <b>{call.destino ? call.destino : 'NA'}</b></p>
                              </div>
                             }
                            </div>
                          </ReactHover.Hover>
                        </ReactHover>



                    </TableRowColumn>



                    <TableRowColumn style={ {width: '100px'} }>
                      {moment(call.callStart).format('DD-MM-YY HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime(call.callDuration)}
                    </TableRowColumn>

                    <TableRowColumn >
                      {<Icons type={call.type} />}
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

                  </TableRow>
            )
            if(call.arrived2) {
              itemsArray.push(
                  <TableRow key={`${i}`+call.id+2} selected={this.isSelected(i)}>

                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>


                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn style={ {width: '60px'} }>
                    -
                    </TableRowColumn>



                    <TableRowColumn style={ {width: '100px'} }>
                    -
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn >
                      {<Icons type={call.type2} />}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.dispatched2).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived2).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime( (call.arrived2-call.dispatched2)/1000)}
                    </TableRowColumn>

                  </TableRow>
              )
            }

            if(call.arrived3) {
              itemsArray.push(
                  <TableRow key={`${i}`+call.id+3} selected={this.isSelected(i)}>

                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>


                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn style={ {width: '60px'} }>
                    -
                    </TableRowColumn>



                    <TableRowColumn style={ {width: '100px'} }>
                    -
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn >
                      {<Icons type={call.type3} />}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.dispatched3).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived3).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime( (call.arrived3-call.dispatched3)/1000)}
                    </TableRowColumn>

                  </TableRow>
              )
            }

            if(call.arrived4) {
              itemsArray.push(
                  <TableRow key={`${i}`+call.id+4} selected={this.isSelected(i)}>

                    <TableRowColumn style={ {width: '20px'} }>
                      {call.id}
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>


                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn style={ {width: '60px'} }>
                    -
                    </TableRowColumn>



                    <TableRowColumn style={ {width: '100px'} }>
                    -
                    </TableRowColumn>

                    <TableRowColumn>
                    -
                    </TableRowColumn>

                    <TableRowColumn>
                      {<Icons type={call.type4} />}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.dispatched4).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {moment(call.arrived4).format('HH:mm')}
                    </TableRowColumn>

                    <TableRowColumn>
                      {this.parseTime( (call.arrived4-call.dispatched4)/1000)}
                    </TableRowColumn>

                  </TableRow>
              )
            }


          }
        )

    return (
      <div>
              <FilterBar searchActions={searchActions} callActions={callActions} />

              <h4 style={{margin: '20px'}}>{calls.length==1 ? '1 resultado' : calls.length + ' resultados'}</h4>

              <PaperBox blank>
              <TableWrapper handleRowSelection={this.handleRowSelection}>
                {itemsArray}
              </TableWrapper>
              </PaperBox>
      </div>
    )
  }
}
