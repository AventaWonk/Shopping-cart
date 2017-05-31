import React, { Component } from 'react';

export default class CartFooter extends Component {

	render() {
		if(this.props.count > 0) {
			return (
				<div>
					<div className="cart-total">
						<span className="pull-left">Total</span>
						<span>${this.props.total}</span>
					</div>
					<div className="cart-checkout">
						<a href="#">Checkout</a>
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}	
	}
}