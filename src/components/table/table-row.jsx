import React from 'react';

const TableRow = (props) => {

	let data = props.data;
	return (
		<div
			className={"table__row table__row--hoverable bold " + (props.grey ? "table__row--grey" : "")}
		>
			<span className="table__rowElement table__rowElement--descripcion">
				{data.description ? data.description : 'sin descripcion :('}
			</span>
			<span className="table__rowElement">{data.quantity ? data.quantity : 0}</span>
			<span className="table__rowElement">{data.units ? data.units : 0}</span>
			<div className="table__rowElement">
				<span>$ </span>{data.price ? data.price : 0}
			</div>
			<div className="table__rowElement total">
				<span>$</span>{data.quantity * data.price}
			</div>
			<span className="table__rowElement">
				<button onClick={e => {props.removeConcepto(data.id)}}>Borrar</button>
			</span>
		</div>);
};

export default TableRow;