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
        <MenuItem key={0} value={0} primaryText={`Todos`} onClick={this.props.setDurationAll} />
        <MenuItem key={1} value={1} primaryText={this.props.filter1Text} onClick={this.props.setDurationFilter1} />
        <MenuItem key={2} value={2} primaryText={this.props.filter2Text} onClick={this.props.setDurationFilter2}/>
        <MenuItem key={3} value={3} primaryText={this.props.filter3Text} onClick={this.props.setDurationFilter3}/>
        <MenuItem key={4} value={4} primaryText={this.props.filter4Text} onClick={this.props.setDurationFilter4}/>
      </DropDownMenu>
    );
  }
}
