import React, {Component} from 'react';
import _ from 'lodash';

import TableRow from './table-row.jsx';
import TableForm from './table-form.jsx';
import TableFooter from './table-footer.jsx';
import TableStore from '../stores/table-store';
import TableActions from '../actions/table-actions';

//got this function from https://css-tricks.com/snippets/javascript/format-currency/
function currency(n){n=parseFloat(n);return isNaN(n)?false:n.toFixed(2);}


function getCurrentState() {

	let conceptos = TableStore.getConceptos();
	return {conceptos : conceptos};
}

class Table extends Component {


	constructor() {
		super();
		this.state = getCurrentState();
		this._onChange = this._onChange.bind(this);
		this.removeConcepto = this.removeConcepto.bind(this);
	}

	componentDidMount() {

		//Adds listener, when the Store changes, trigger the _onChange callback func
		TableStore.addChangeListener(this._onChange);
	};

	componentWillUnmount() {

		//Removes the listener, in this project it never happens
		TableStore.removeChangeListener(this._onChange);
	};

	_onChange() {

		//When the store changes, the state goes to it and pulls the updated data
		//then sets it so the components reRender
		let state = getCurrentState();
		this.setState(state);
	};

	removeConcepto(id) {

		TableActions.removeConcepto(id)
	};

	reset() {

		TableActions.resetAll();
	};

	print() {

		TableActions.printAll();
	}

	render() {

		let conceptos = this.state.conceptos;
		let subtotal = _.sumBy(conceptos, (concepto) => {
			return (concepto.quantity * concepto.price);
		});

		// Iterates over the conceptos array and adds a TableRow for each
		let tableRows = (
			_.map(conceptos, (concepto, key) => {
				return (
					<TableRow
						key={key}
						data={concepto}
						grey={key % 2 === 0} //the keys start from 0,
							// so if x % 0 == 0, it passes true,
							// otherwise, false to paint the background grey
						removeConcepto={this.removeConcepto}
						currency={currency}
					/>
				);
			})
		);

		return (
			<div className="borderAll">
				<div className="title">
					<span className="title__text">Conceptos</span>
					<div>
						<button
							className="title__button"
						    onClick={this.reset}
						>
							Limpiar todo
						</button>
						<button
							className="title__button"
						    onClick={this.print}
						>
							Imprimir a consola
						</button>
					</div>
				</div>
				<div className="table__header">
					<span className="table__headElement table__headElement--big">Descripción</span>
					<span className="table__headElement">Cantidad</span>
					<span className="table__headElement">Unidades</span>
					<span className="table__headElement">Precio unitario</span>
					<span className="table__headElement">Total</span>
					<span className="table__headElement">Acciones</span>
				</div>

				{tableRows}

				<TableForm
					currency={currency}
				/>

				<TableFooter
					subtotal={subtotal}
					currency={currency}
				/>
			</div>
		)
	}
}

export default Table;