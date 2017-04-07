import React from 'react';

const TableRow = (props) => {

	let data = props.data;
	return (
		<div
			className={"table__row table__row--hoverable " + (props.grey ? "table__row--grey" : "")}
		>
			<span className="table__rowElement table__rowElement--descripcion">
				{data.description ? data.description : 'sin descripcion :('}
			</span>
			<span className="table__rowElement">{data.quantity ? data.quantity : 0}</span>
			<span className="table__rowElement">{data.units ? data.units : 0}</span>
			<span className="table__rowElement">${data.price ? data.price : 0}</span>
			<span className="table__rowElement">${data.quantity * data.price}</span>
			<span className="table__rowElement">
				<button>Borrar</button>
			</span>
		</div>);
};

export default TableRow;