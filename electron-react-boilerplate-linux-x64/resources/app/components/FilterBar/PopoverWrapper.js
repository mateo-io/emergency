import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';

export default class PopoverWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const style = { display: 'inline-block', position: 'relative', top: '-25px', float: 'right'}
    return (
      <div style={ style }>
        <div
          onTouchTap={this.handleTouchTap}>
          <h2>{ (this.props.startDate + '  ' + this.props.endDate)}</h2>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        {this.props.children}
        </Popover>
      </div>
    );
  }
}
