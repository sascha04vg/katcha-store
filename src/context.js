import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart: [], //storeProducts,
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartPostage: 0,
		cartTotal: 0,
		cartItemCount: 0,
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach((item) => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});

		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getItem = (id) => {
		const product = this.state.products.find((item) => item.id === id);
		return product;
	};

	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		// if (product.postage === true) {
		// 	product.totalPostage = 1;
		// } else {
		// 	product.totalPostage = 0;
		// }

		this.setState(
			() => {
				return {
					products: tempProducts,
					cart: [...this.state.cart, product],
				};
			},
			() => {
				this.addTotal();
			}
		);
	};

	openModal = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProduct: product, modalOpen: true };
		});
	};

	closeModal = () => {
		this.setState(() => {
			return { modalOpen: false };
		});
	};

	increment = (id) => {
		let tempCart = [...this.state.cart];

		const selectedProduct = tempCart.find((item) => item.id === id);

		const index = tempCart.indexOf(selectedProduct);

		const product = tempCart[index];

		product.count = product.count + 1;
		product.total = product.count * product.price;

		this.setState(
			() => {
				return { cart: [...tempCart] };
			},
			() => {
				this.addTotal();
			}
		);
	};
	decrement = (id) => {
		let tempCart = [...this.state.cart];

		const selectedProduct = tempCart.find((item) => item.id === id);

		const index = tempCart.indexOf(selectedProduct);

		const product = tempCart[index];
		product.count = product.count - 1;

		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.count * product.price;
			this.setState(
				() => {
					return { cart: [...tempCart] };
				},
				() => {
					this.addTotal();
				}
			);
		}
	};

	removeItem = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter((item) => item.id !== id);

		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];

		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(
			() => {
				return {
					cart: [...tempCart],
					products: [...tempProducts],
				};
			},
			() => {
				this.addTotal();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.setProducts();
				this.addTotal();
			}
		);
	};

	addTotal = () => {
		let subTotal = 0;
		let cartItem = 0;
		let tempPostage = 0;
		this.state.cart.map((item) => (subTotal += item.total));
		this.state.cart.map((item) => (cartItem += item.count));
		let tempDiscount = 0;
		if (cartItem <= 4) {
			tempDiscount = 0;
		} else if (cartItem >= 5 && cartItem <= 9) {
			tempDiscount = cartItem * 0.1;
		} else if (cartItem >= 10 && cartItem <= 15) {
			tempDiscount = cartItem * 0.2;
		} else {
			tempDiscount = cartItem * 0.35;
		}

		const tempTotal = subTotal - tempDiscount;
		if (tempTotal < 15) {
			tempPostage = 2.5;
		} else {
			tempPostage = 0;
		}
		const totalCartPostage = parseFloat(tempPostage.toFixed(2));
		const discount = parseFloat(tempDiscount.toFixed(2));
		const total = parseFloat(
			(subTotal - discount + totalCartPostage).toFixed(2)
		);

		this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartDiscount: discount,
				cartPostage: totalCartPostage,
				cartTotal: total,
				cartItemCount: cartItem,
			};
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
