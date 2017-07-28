import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class AlertDelete extends React.Component {
  constructor(){
    super();
  }

  render() {
    const actions = [
      <FlatButton
        label="CANCELAR"
        primary={true}
        onTouchTap={this.props.cancelDestroy}
      />,
      <FlatButton
        label="BORRAR"
        style={{backgroundColor: 'red', color: 'white'}}
        primary={true}
        onTouchTap={this.props.reallyDestroy}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.cancelDestroy}
        >
        <p>Está seguro que desea borrar este {this.props.tipo}?</p>
        </Dialog>
      </div>
    );
  }
}
