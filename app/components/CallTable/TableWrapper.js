import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableWrapper extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={ {width: '20px'} }>ID</TableHeaderColumn>
            <TableHeaderColumn>Poste</TableHeaderColumn>
            <TableHeaderColumn>Tipo</TableHeaderColumn>
            <TableHeaderColumn style = { {width: '100px' } }>Fecha</TableHeaderColumn>
            <TableHeaderColumn>Duracion llamada</TableHeaderColumn>
            <TableHeaderColumn>Inicio Servicio</TableHeaderColumn>
            <TableHeaderColumn>Fin Servicio</TableHeaderColumn>
            <TableHeaderColumn>Duracion Servicio</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.children}
        </TableBody>
      </Table>
    );
  }
}
