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
			<div
				className="table__formRow"
			>
				<div className="table__textInputContainer table__textInputContainer--descripcion">
					<input
						id="description"
						className="table__textInput table__textInput--descripcion"
						type="text"
						value={this.state.description}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__textInputContainer">
					<input
						id="quantity"
						className="table__textInput"
						type="text"
					    value={this.state.quantity}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__textInputContainer">
					<input
						id="units"
						className="table__textInput"
						type="text"
					    value={this.state.units}
					    onChange={this.handleUpdate.bind(this)}
					/>
				</div>
				<div className="table__textInputContainer">
					<input
						id="price"
						className="table__textInput"
						type="text"
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