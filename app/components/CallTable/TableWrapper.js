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

  render() {
    return (
      <Table
     multiSelectable={true}
     onRowSelection={this.props.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={ {width: '20px'} }>ID</TableHeaderColumn>
            <TableHeaderColumn>Comentarios</TableHeaderColumn>
            <TableHeaderColumn style={ {width: '60px'} }>Poste(M)</TableHeaderColumn>
            <TableHeaderColumn style = { {width: '100px' } }>Fecha</TableHeaderColumn>
            <TableHeaderColumn>Tipo</TableHeaderColumn>
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
