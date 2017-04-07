import React from 'react';

const TableRow = (props) => {
	
	return (
		<div
			className="table__row table__row--hoverable"
		>
			<span className="table__rowElement table__rowElement--descripcion">{props.description}</span>
			<span className="table__rowElement">{props.quantity}</span>
			<span className="table__rowElement">{props.units}</span>
			<span className="table__rowElement">{props.price}</span>
			<span className="table__rowElement">{props.quantity * props.price}</span>
			<span className="table__rowElement">
				<button>Borrar</button>
			</span>
		</div>);
};

export default TableRow;