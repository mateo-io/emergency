import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class FilterDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu style={ {width: '200px'} } maxHeight={300} value={this.state.value} onChange={this.handleChange}>
        <MenuItem key={0} primaryText={`Todos`} onClick={this.props.setDurationAll} />
        <MenuItem key={1} primaryText={`0-30s`} onClick={this.props.setDurationFilter1} />
        <MenuItem key={2} primaryText={`0-1m`} onClick={this.props.setDurationFilter2}/>
      </DropDownMenu>
    );
  }
}
