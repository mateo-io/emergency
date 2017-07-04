import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import CallDetails from './CallDetails';
import FilterLink from 'containers/FilterLink';
import DateSelector from './DateSelector';

import * as constants from 'constants/Colors';




export default class CallList extends React.Component {
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
      <div style={ {marginLeft: '15px'}}>
        <FilterLink filter='MOSTRAR_TODOS'>TODOS</FilterLink>
        <FilterLink filter='MOSTRAR_AMBULANCIA'>AMBULANCIA</FilterLink>
        <FilterLink filter='MOSTRAR_GRUA'>GRUA</FilterLink>
        <FilterLink filter='MOSTRAR_POLICIA'>POLICIA</FilterLink>
        <FilterLink filter='MOSTRAR_OTRO'>OTRO</FilterLink>
        <DateSelector actions={callActions} />
      </div>
      {calls.map((call, i) => {
        return (
            <Wrapper style={ style } key={i}>
              <CallDetails call={call} openCall={callActions.openCall} />
            </Wrapper>
        )}
      )}
      </div>
    )
  }
}
