import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
* Inline Date Pickers are displayed below the input, rather than as a modal dialog.
*/

export default class DateSelector extends React.Component {

  handleInitialDate = (err, date) => {
    this.props.actions.setInitialDate(date)
  }

  handleFinalDate = (err, date) => {
    this.props.actions.setFinalDate(date)
  }

  render() {
    const style = {
      display: 'inline-block'
    }

    return (
      <div style={style}>
      <DatePicker style={style} hintText="Fecha Inicial"
      autoOk={true}
      onChange={this.handleInitialDate.bind(this)}
      container="inline" />
      <DatePicker
      autoOk={true}
      onChange={this.handleFinalDate.bind(this)}
      style={style} hintText="Fecha Final" container="inline" />
      </div>
    );
  }
}
