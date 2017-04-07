import React, {Component} from 'react';
import _ from 'lodash';

import TableRow from './table-row.jsx';
import TableForm from './table-form.jsx';
import TableStore from '../../stores/table-store';
import TableActions from '../../actions/table-actions';

function getCurrentState() {

	let conceptos = TableStore.getConceptos();
	return {conceptos : conceptos}
}

class Table extends Component {


	constructor() {
		super();
		this.state = getCurrentState();
		this._onChange = this._onChange.bind(this);
		this.removeConcepto = this.removeConcepto.bind(this);
	}

	componentDidMount() {

		TableStore.addChangeListener(this._onChange);
	};

	componentWillUnmount() {

		TableStore.removeChangeListener(this._onChange);
	};

	_onChange() {

		console.log('state ', this.state);
		let state = getCurrentState();
		this.setState(state);
	};

	removeConcepto(id) {

		TableActions.removeConcepto(id)
	};

	render() {

		console.log('state', this.state);
		let conceptos = this.state.conceptos;
		let tableRows = (
			_.map(conceptos, (concepto, key) => {
				return (
					<TableRow
						key={key}
						data={concepto}
						grey={key % 2 === 0}
						removeConcepto={this.removeConcepto}
					/>
				)
			})
		);
		return (
			<div className="borderAll">
				<h2 className="title">Conceptos</h2>
				<div className="table__header">
					<span className="table__headElement table__headElement--big">Descripción</span>
					<span className="table__headElement">Cantidad</span>
					<span className="table__headElement">Unidades</span>
					<span className="table__headElement">Precio unitario</span>
					<span className="table__headElement">Total</span>
					<span className="table__headElement">Acciones</span>
				</div>

				{tableRows}

				<TableForm/>

			</div>
		)
	}
}

export default Table;