import React from 'react';
import FilterBar from 'components/FilterBar';

export default class Statistics extends React.Component {
  render() {
    const { searchActions, callActions } = this.props;
    return(
      <div>
        <FilterBar searchActions={searchActions} callActions={callActions} />
        <h1>Estadisticas</h1>
      </div>
    )
  }
}
