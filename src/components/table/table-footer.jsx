import React from 'react';

const TableFooter = (props) => {

	let iva = props.subtotal * 0.16;
	return (
		<div className="table__footer">
			<div className={"table__row"}>
				<span className="table__footerElement"/>
				<span className="table__rowElement">Subtotal</span>
				<div className="table__rowElement total">
					<span>$</span>{props.currency(props.subtotal)}
				</div>
				<span className="table__rowElement"/>
			</div>
			<div className={"table__row"}>
				<span className="table__footerElement"/>
				<span className="table__rowElement">IVA (16%)</span>
				<div className="table__rowElement total">
					<span>$</span>{props.currency(iva)}
				</div>
				<span className="table__rowElement"/>
			</div>
			<div className={"table__row table__footer bold"}>
				<span className="table__footerElement"/>
				<span className="table__rowElement">Total</span>
				<div className="table__rowElement total">
					<span>$</span>{props.currency(props.subtotal + iva)}
				</div>
				<span className="table__rowElement"/>
			</div>
		</div>
	);
};

export default TableFooter;