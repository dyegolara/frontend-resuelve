import React from 'react';

const TableForm = (props) => {

	return (
		<div
			className="table__formRow"
		>
			<div className="table__textInputContainer table__textInputContainer--descripcion">
				<input className="table__textInput table__textInput--descripcion" type="text"/>
			</div>
			<div className="table__textInputContainer">
				<input className="table__textInput" type="text"/>
			</div>
			<div className="table__textInputContainer">
				<input className="table__textInput" type="text"/>
			</div>
			<div className="table__textInputContainer">
				<input className="table__textInput" type="text"/>
			</div>

			<span className="table__rowElement">Total</span>
			<span className="table__rowElement">
				<button>Agregar</button>
			</span>
		</div>);
};

export default TableForm;

//<input type="text" value={this.state.value} onChange={this.handleChange} />
