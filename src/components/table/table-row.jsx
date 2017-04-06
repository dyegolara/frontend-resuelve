import React from 'react';

const TableRow = (props) => {
	
	return (
		<div
			className="table__row"
		>
			<span className="table__rowElement table__rowElement--descripcion">Control Xbox</span>
			<span className="table__rowElement">1</span>
			<span className="table__rowElement">1</span>
			<span className="table__rowElement">999</span>
			<span className="table__rowElement">999</span>
			<span className="table__rowElement">
				<button>Borrar</button>
			</span>
		</div>);
};

export default TableRow;