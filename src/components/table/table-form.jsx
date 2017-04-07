import React, {Component} from 'react';
import _ from 'lodash';
import uuid from 'uuid';

import TableActions from '../../actions/table-actions';

class TableForm extends Component {

	constructor() {
		super();
		this.state = {
			description: '',
			quantity: '',
			units: '',
			price: '',
			total: 0
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addConcepto = this.addConcepto.bind(this);
	};

	addConcepto() {

		let concepto = _.omit(this.state, 'total');
		concepto.id = uuid();
		TableActions.addConcepto(concepto);
		this.reset();
	};

	handleUpdate(evt){

		let state = this.state;

		state[evt.target.id] = evt.target.value;
		state.total = state.quantity * state.price;
		this.setState(state);
	};

	reset(){
		this.setState({
			description: '',
			quantity: '',
			units: '',
			price: '',
			total: 0
		});
	}

	render() {

		return (
			<div className="table__row">
				<div className="table__rowElement">
					<input
						id="description"
						className="table__textInput table__textInput--descripcion"
						type="text"
						value={this.state.description}
					    onChange={this.handleUpdate}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="quantity"
						type="number"
						className="table__textInput"
					    value={this.state.quantity}
					    onChange={this.handleUpdate}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="units"
						type="number"
						className="table__textInput"
					    value={this.state.units}
					    onChange={this.handleUpdate}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="price"
						type="number"
						className="table__textInput"
					    value={this.state.price}
					    onChange={this.handleUpdate}

					/>
				</div>

				<span className="table__rowElement">${this.state.total}</span>
				<span className="table__rowElement">
				<button onClick={this.addConcepto}>Agregar</button>
			</span>
			</div>);
	}
}

export default TableForm;