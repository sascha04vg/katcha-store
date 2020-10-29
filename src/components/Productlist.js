import React, { useState } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import shop from "../img/Shop/SHOP header.png";
const Productlist = () => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");

	function handleClick() {
		setSearch("");
		document.querySelectorAll("input").forEach((input) => (input.value = ""));
		document.querySelectorAll("input");
	}

	function handleSearch() {
		setSearch(filter);
		document.getElementById("search").value = "";
	}

	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					<div className="header text-center pt-2">
						<img src={shop} style={{ width: "150px" }} alt="shop_logo" />
					</div>
					<Filter className="filters">
						<div className="type-filter">
							<input
								id="all"
								type="radio"
								name="products"
								value=""
								onChange={(e) => setSearch(e.target.value)}
							/>
							<label htmlFor="all">All</label>
							<input
								id="comic"
								type="radio"
								name="products"
								value="comic"
								onChange={(e) => setSearch(e.target.value)}
							/>
							<label htmlFor="comic">Comics</label>
							<input
								id="postcards"
								type="radio"
								name="products"
								value="postcard"
								onChange={(e) => setSearch(e.target.value)}
							/>
							<label htmlFor="postcards">Postcards</label>
							<input
								id="prints"
								type="radio"
								name="products"
								value="print"
								onChange={(e) => setSearch(e.target.value)}
							/>
							<label htmlFor="prints">Prints</label>
						</div>
						<div className="search-operation">
							<input
								className="search-box"
								type="text"
								placeholder="Search..."
								onChange={(e) => setFilter(e.target.value)}
								autoComplete="on"
								id="search"
							/>
							<button
								className="btn btn-black btn-lg rest-btn mr-1"
								type="filter"
								value=""
								onClick={handleSearch}
							>
								Search
							</button>
							<button
								className="btn btn-black btn-lg rest-btn "
								type="reset"
								id="clear"
								value=""
								onClick={handleClick}
							>
								Clear
							</button>
						</div>

						<div className="colour-filter">
							<button
								className="radio-btn red"
								type="radio"
								name="colour"
								id="red"
								value="red"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn orange"
								type="radio"
								name="colour"
								id="orange"
								value="orange"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn yellow"
								type="radio"
								name="colour"
								id="yellow"
								value="yellow"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn green"
								type="radio"
								name="colour"
								id="green"
								value="green"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn blue"
								type="radio"
								name="colour"
								id="blue"
								value="blue"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn purple"
								type="radio"
								name="colour"
								id="purple"
								value="purple"
								onClick={(e) => setSearch(e.target.value)}
							/>
							<button
								className="radio-btn white"
								type="radio"
								name="colour"
								id="white"
								value="white"
								onClick={(e) => setSearch(e.target.value)}
							/>
						</div>
					</Filter>
					<div className="row">
						<ProductConsumer>
							{(value) => {
								const filterdProducts = value.products.filter((product) => {
									return product.tags
										.toLowerCase()
										.includes(search.toLowerCase());
								});

								return filterdProducts.map((product) => {
									return <Product key={product.id} product={product} />;
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>

		//<Product />
	);
};
export default Productlist;

const Filter = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	justify-content: center;
	align-items: center;
	background: #ffffff;
	padding: 1rem 0;

	.search-operation,
	.type-filter,
	.colour-filter {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.4rem;
	}

	.search-box {
		margin-right: 1rem;
		padding: 0.3rem 1rem;
	}

	.radio-btn {
		width: 25px;
		height: 25px;
		border: 1px solid #d6d6d6;
		border-radius: 50%;
		margin-right: 0.8rem;
	}

	.red {
		background: #f76360;
	}
	.orange {
		background: #f6ab42;
	}
	.yellow {
		background: #f5f592;
	}
	.green {
		background: #99d999;
	}
	.blue {
		background: #99bbc9;
	}
	.purple {
		background: #c694c3;
	}
	.white {
		background: #ffffff;
	}

	.red:hover,
	.red:focus {
		background: #f5332f;
		transition: background 0.3s linear;
		transform: translateY(-1px);
		box-shadow: 0px 101px 248px 17px rgba(189, 187, 189, 1);
	}
	.orange:hover,
	.orange:focus {
		background: #f49511;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}
	.yellow:hover,
	.yellow:focus {
		background: #f1f163;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}
	.green:hover,
	.green:focus {
		background: #74cb74;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}
	.blue:hover,
	.blue:focus {
		background: #78a5b7;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}
	.purple:hover,
	.purple:focus {
		background: #b473b0;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}
	.white:hover {
		background: #ffffff;
		transition: background 0.3s linear;
		transform: translateY(-1px);
	}

	input[type="radio"] {
		display: none;
	}

	input[type="radio"]:checked + label:before {
		background: var(--peach);
		width: 25px;
		height: 25px;
		border: 0;
		border-radius: 50%;
		transition: background 0.5s linear;
	}

	label {
		color: black;
		font-size: 12px;
		position: relative;
		padding-left: 2rem;
		padding-right: 1rem;
		align-items: center;
		justify-content: center;
	}

	label:hover {
		color: var(--peach);
	}

	label:hover:before {
		border: 1px solid var(--peach);
		border-radius: 50%;
	}

	label:before {
		content: "";
		height: 25px;
		width: 25px;
		border: 1px solid lightgray;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
	}
`;
