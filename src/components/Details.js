import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

const Details = () => {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					id,
					img,
					info,
					price,
					title,
					inCart,
					size,
					materials,
					pricing,
					sku,
				} = value.detailProduct;

				return (
					<div className="container py-5 ">
						{/* product Info */}
						<div className="row pt-5">
							<div className="col-10 mx-auto col-md-6 my-3">
								<img src={img[0]} className="img-fluid" alt="zine"></img>
							</div>
							<div className="col-10 mx-auto col-md-6 my-3">
								<h3 className="text-uppercase">{title}</h3>
								<h3 className="text-uppercase">{size}</h3>
								<p className="text-capitalize font-weight-bold mt-3 mb-2">
									SKU: <span className="text-muted">{sku}</span>{" "}
								</p>
								<p className="text-capitalize font-weight-bold mt-3 mb-2">
									Description
								</p>
								<p className="text-muted">{info}</p>
								<p className="text-capitalize font-weight-bold mt-3 mb-2">
									Materials
								</p>
								<p className="text-muted">{materials}</p>
								<p className="text-capitalize  font-weight-bold mt-3 mb-2">
									Shipping/Pricing
								</p>
								<Shipping className="mb-4">
									{" "}
									{pricing.map((price, i) => {
										return (
											<p className="shipping text-muted mb-0" key={i}>
												{price}
											</p>
										);
									})}
								</Shipping>

								<h4 className="text-capitalize  mb-4">
									<strong>
										price: <span>€</span>
										{price}
									</strong>
								</h4>
								<div>
									<ButtonContainer
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
									>
										{inCart ? "in Cart" : "add to Cart"}
									</ButtonContainer>
									<Link to="/shop">
										<ButtonContainer cart>Back to Products</ButtonContainer>
									</Link>
								</div>
							</div>
						</div>
						{/* Product Info End */}
					</div>
				);
			}}
		</ProductConsumer>
	);
};
export default Details;
const Shipping = styled.div`
	.shipping:last-child {
		padding-top: 1rem;
	}
`;
