import React from "react";

export default function CartItem({ item, value }) {
	const { id, title, img, price, total, count, sku } = item;

	const { increment, decrement, removeItem } = value;

	return (
		<div className="row my-2 text-capitalized text-center">
			<div className="col-10 mx-auto col-lg-1">
				<img
					src={img}
					style={{ width: "5rem", height: "auto" }}
					className="img-fluid"
					alt="product"
				></img>
			</div>
			<div className="col-10 mx-auto col-lg-1">
				<span className="d-lg-none">Product: </span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-1">
				<span className="d-lg-none">SKU: </span>
				{sku}
			</div>
			<div className="col-10 mx-auto col-lg-1">
				<span className="d-lg-none">Price: </span>€{price}
			</div>
			<div className="col-10 mx-auto col-lg-1 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div className="">
						<span className="btn btn-black mx-1" onClick={() => decrement(id)}>
							-
						</span>
						<span className="btn btn-black mx-1 disabled">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => increment(id)}>
							+
						</span>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="col-10 mx-auto col-lg-1">
				<div className="cart-icon" onClick={() => removeItem(id)}>
					<i className="fas fa-trash"></i>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-1">
				<strong>
					<span className="d-lg-none">Total: </span>€{total}
				</strong>
			</div>
		</div>
	);
}
