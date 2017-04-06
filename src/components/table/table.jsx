import React, {Component} from 'react';
import TableRow from './table-row.jsx';

class Table extends Component {

	render() {
		return (
			<div style={{
				border: '1px solid black'

			}}>
				<h2 style={{
					paddingLeft: '2rem',
					marginBottom: '3rem'
				}}>Conceptos</h2>
				<div className="table__header">
					<span className="table__headElement table__headElement--big">Descripción</span>
					<span className="table__headElement">Cantidad</span>
					<span className="table__headElement">Unidades</span>
					<span className="table__headElement">Precio unitario</span>
					<span className="table__headElement">Total</span>
					<span className="table__headElement">Acciones</span>
				</div>

				<TableRow/>

			</div>
		)
	}
}

export default Table;