import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import CallDetails from './CallDetails';

import * as constants from 'constants/Colors';

export default class CallList extends React.Component {

  render() {
    const style = {height: "200px",
    borderRadius: '10px',
    background: `${constants.primary}`,
    color: "#e8e8e8",
    margin: "5px 5px",
    padding: "10px",
    lineHeight: "1.5em",
    fontSize: "16px",
    fontWeight: 700
  }

    const { calls, actions } = this.props;
    console.log("CALLS IS!!!!!! ", calls)
    return (
      <div>
      {calls.map((call, i) => {
        return (
            <Wrapper style={ style } key={i}>
              <CallDetails call={call} openCall={actions.openCall} />
            </Wrapper>
        )}
      )}
      </div>
    )
  }
}
