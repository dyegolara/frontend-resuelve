import React, {Component} from 'react';

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

	};

	addConcepto(event) {
		TableActions.addConcepto(event);
	};

	handleUpdate(evt){

		let state = this.state;

		state[evt.target.id] = evt.target.value;
		state.total = state.quantity * state.price;
		this.setState(state);
	}

	render() {
		return (
			<div className="table__row">
				<div className="table__rowElement">
					<input
						id="description"
						className="table__textInput--descripcion"
						type="text"
						value={this.state.description}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="quantity"
						type="text"
						className="table__textInput"
					    value={this.state.quantity}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="units"
						type="text"
						className="table__textInput"
					    value={this.state.units}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__rowElement">
					<input
						id="price"
						type="text"
						className="table__textInput"
					    value={this.state.price}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>

				<span className="table__rowElement">{'$' + this.state.total}</span>
				<span className="table__rowElement">
				<button onClick={this.addConcepto.bind(this)}>Agregar</button>
			</span>
			</div>);
	}
}

export default TableForm;