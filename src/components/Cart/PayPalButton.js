import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
	render() {
		const onSuccess = (payment) => {
			// Congratulation, it came here means everything's fine!
			console.log("The payment was successful!", payment);
			this.props.clearCart();
			this.props.history.push({
				pathname: "/purchases",
				state: { detail: this.props.cart },
			});
			// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
		};

		const onCancel = (data) => {
			// User pressed "cancel" or close Paypal's popup!
			console.log("The payment was cancelled!", data);
			// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
		};

		const onError = (err) => {
			// The main Paypal's script cannot be loaded or somethings block the loading of that script!
			console.log("Error!", err);
			// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
			// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
		};

		let env = "sandbox"; // you can set here to 'production' for production
		let currency = "EUR"; // or you can set this value from your props or state

		// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

		const client = {
			sandbox: process.env.REACT_APP_APP_ID,
			production: "YOUR-PRODUCTION-APP-ID",
		};

		const style = {
			size: "medium",
			color: "black",
			shape: "rect",
			label: "checkout",
		};

		const paymentOptions = {
			transactions: [
				{
					amount: {
						total: this.props.total,
						currency: "EUR",
						details: {
							subtotal: this.props.subTotal,
							tax: "0.00",
							shipping: this.props.postage,
							insurance: "0.00",
							handling_fee: "0.00",
							discount: this.props.discount,
						},
					},
					description: "Your purchase from katcha.fun.",
					custom: "90048630024435",
					//invoice_number: '12345', Insert a unique invoice number
					payment_options: {
						allowed_payment_method: "INSTANT_FUNDING_SOURCE",
					},
					soft_descriptor: "ECHI5786786",
					item_list: {
						items: this.props.cart,
					},
				},
			],
			note_to_payer: "Contact me for any questions on your order.",
		};

		// In order to get production's app-ID, you will have to send your app to Paypal for approval first
		// For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
		//   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
		// For production app-ID:
		//   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
		// NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
		return (
			<PaypalExpressBtn
				env={env}
				client={client}
				currency={currency}
				total={this.props.total}
				onError={onError}
				onSuccess={onSuccess}
				onCancel={onCancel}
				style={style}
				paymentOptions={paymentOptions}
			/>
		);
	}
}
