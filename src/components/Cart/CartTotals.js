import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
	const {
		cartSubTotal,
		cartDiscount,
		cartPostage,
		cartTotal,
		clearCart,
		// cartItem,
	} = value;

	const cartItems = [];

	for (let i = 0; i < value.cart.length; i++) {
		cartItems[i] = {
			name: value.cart[i].title,
			description: value.cart[i].size,
			quantity: value.cart[i].count,
			price: value.cart[i].price,
			tax: "0.00",
			sku: value.cart[i].sku,
			currency: "EUR",
		};
	}
	console.log(cartItems);

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml md auto c-l-8 text-capitalize text-right">
						<Link to="/shop">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => clearCart()}
							>
								clear cart
							</button>
						</Link>
						<h5>
							<span>Subtotal: </span>
							<strong>€{cartSubTotal}</strong>
						</h5>
						<h5>
							<span>Discount: </span>
							<strong>€{cartDiscount}</strong>
						</h5>
						<h5>
							<span>Postage: </span>
							<strong>€{cartPostage}</strong>
						</h5>
						<h5>
							<span>Total: </span>
							<strong>€{cartTotal}</strong>
						</h5>
						<PayPalButton
							total={cartTotal}
							subTotal={cartSubTotal}
							postage={cartPostage}
							discount={cartDiscount}
							clearCart={clearCart}
							history={history}
							cart={cartItems}
						></PayPalButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
