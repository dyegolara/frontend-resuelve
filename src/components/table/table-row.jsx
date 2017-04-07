import React from 'react';

const TableRow = (props) => {
	
	return (
		<div
			className="table__row table__row--hoverable"
		>
			<span className="table__rowElement table__rowElement--descripcion">
				{props.description ? props.description : 'sin descripcion :('}
			</span>
			<span className="table__rowElement">{props.quantity ? props.quantity : 0}</span>
			<span className="table__rowElement">{props.units ? props.units : 0}</span>
			<span className="table__rowElement">${props.price ? props.price : 0}</span>
			<span className="table__rowElement">${props.quantity * props.price}</span>
			<span className="table__rowElement">
				<button>Borrar</button>
			</span>
		</div>);
};

export default TableRow;