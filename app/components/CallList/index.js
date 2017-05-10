import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import CallDetails from './CallDetails';

export default class CallList extends React.Component {

  render() {
    const { calls, actions } = this.props;
    console.log("CALLS IS!!!!!! ", calls)
    return (
      <div>
      {calls.map((call, i) => {
        return (
            <Wrapper style={ {height: "150px", background: "#33ccff", color: "white", margin: "10px 0px"}} key={i}>
              Origen {call.origin}
            </Wrapper>
        )}
      )}
      </div>
    )
  }
}
