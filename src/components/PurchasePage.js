import React from "react";
import { useLocation } from "react-router-dom";
import Snail from "../img/PostCardClub/POSTCARDCLUBSNAIL.png";
import styled from "styled-components";

const PurchasePage = (props) => {
	const location = useLocation();

	const items = [];
	for (let i = 0; i < location.state.detail.length; i++) {
		items.push(location.state.detail[i]);
	}

	console.log(items);
	return (
		<Purchases>
			<div className="container py-5 ">
				{/* product Info */}
				<div className="row pt-5">
					<div className="col-10 mx-auto col-md-6 my-3 text-center">
						<h1>Thanks for your order!</h1>
						<img src={Snail} alt="Snail" />
						<p>
							I've received your order and will get it all wrapped up for you.
							Please allow for 3-5 working days for your items to arrive if you
							have ordered in Germany. Worldwide shippping can take longer.
							Please take a look at the table below for more details on shipping
							estimates.
						</p>
						<div className="shipping-table">
							<table>
								<thead>
									<tr>
										<th>Destination</th>
										{/* <th>Deutsche Post</th>
										<th>Free Shipping over</th> */}
										<th>Delivery Estimate</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Germany</td>
										{/* <td>€2.50</td>
										<td>€15.00</td> */}
										<td>3-5 working days</td>
									</tr>
									<tr>
										<td>
											Austria, Belgium, Bulgaria, Denmark, Czech Republic,
											Croatia, Cyprus, Estonia, Finland, France, Greece, Great
											Britain, Hungary, Ireland, Italy, Latvia, Lithuania,
											Luxembourg, Malta, Monaco, Netherlands, Norway, Poland,
											Portugal, Romania, Slovakia, Slovenia, Sweden, Spain
										</td>
										{/* <td>€2.50</td>
										<td>€15.00</td> */}
										<td>5-7 working days</td>
									</tr>
									<tr>
										<td>Worldwide</td>
										{/* <td>€2.50</td>
										<td>€15.00</td> */}
										<td>10-14 working days</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="order">
							<h3>Your Order:</h3>
							<ul className="order-list">
								{items.map((value, index) => {
									return (
										<li key={index}>
											{" "}
											{value.name} <span className="text-muted">Qty: </span>
											{value.quantity}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Purchases>
	);
};

export default PurchasePage;

const Purchases = styled.div`
	.shipping-table {
		padding: 2em 0;
	}
	table thead th,
	table tbody td {
		border-bottom: 1px solid #000;
		padding-top: 12px;
		padding-bottom: 12px;
	}

	.shipping-table table tr td {
		border-bottom: none;
	}
	.shipping-table table tr:nth-child(1) th,
	.shipping-table table tr:nth-child(1) td,
	.shipping-table table tr:nth-child(2) th,
	.shipping-table table tr:nth-child(2) td {
		border-bottom: 1px solid #000;
	}

	.shipping-table table tr th,
	.shipping-table table tr td {
		padding-left: 12px;
		padding-right: 12px;
		border-right: 1px solid #000;
	}

	.shipping-table table tr th:nth-child(2),
	.shipping-table table tr td:nth-child(2) {
		padding-right: 15px;
		border-right: none;
	}

	img {
		padding: 2em 0;
	}
	.order {
		padding-top: 2em;
	}
	.order-list {
		list-style: none;
		text-align: left;
	}
	span {
		text-align: right;
		margin-left: 1em;
	}
`;
