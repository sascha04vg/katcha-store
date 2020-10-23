import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import About from "./components/About";
import PostCard from "./components/PostCard";
import IllustrationList from "./components/IllustrationList";
import Comic from "./components/Comics";
import Cookie from "./components/Cookie";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/shop" component={Productlist}></Route>
					<Route path="/details" component={Details}></Route>
					<Route path="/cart" component={Cart}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/postcard" component={PostCard}></Route>
					<Route path="/illustration" component={IllustrationList}></Route>
					<Route path="/comics" component={Comic}></Route>
					<Route path="/privacy" component={Privacy}></Route>
					<Route path="/terms" component={Terms}></Route>
					<Route component={Default}></Route>
				</Switch>
				<Modal />
				<Cookie />
				<Footer />
			</React.Fragment>
		);
	}
}
export default App;
