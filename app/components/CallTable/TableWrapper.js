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
      selectable={false}
     onRowSelection={this.props.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={ {width: '20px'} }>ID</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Comentarios</TableHeaderColumn>
            <TableHeaderColumn style={ {width: '60px'} }>Poste(M)</TableHeaderColumn>
            <TableHeaderColumn style = { {width: '100px' } }>Fecha</TableHeaderColumn>
            <TableHeaderColumn>Tiempo llamada</TableHeaderColumn>
            <TableHeaderColumn>Tipo</TableHeaderColumn>
            <TableHeaderColumn>Inicio Servicio</TableHeaderColumn>
            <TableHeaderColumn>Fin Servicio</TableHeaderColumn>
            <TableHeaderColumn>Duracion Servicio</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.children}
        </TableBody>
      </Table>
    );
  }
}
