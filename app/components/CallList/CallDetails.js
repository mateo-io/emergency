import React from 'react';
import Wrapper from './Wrapper';

export default class CallDetails extends React.Component {

  render() {
    const { id, callStart, status, origin, poste,
      comments, type, dispatched, arrived } = call;
      return (
        <Wrapper>
        This is {id} and status is {status}
        </Wrapper>

      )
    }


  }
