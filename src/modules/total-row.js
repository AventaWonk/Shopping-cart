import React, { Component } from 'react'

export default class TotalRow extends React.Component{

	render() {
		return (
			<li className="cart-total">
				<span className="pull-left">Total</span>
				<span>${this.props.total}</span>
			</li>
		);
	}
}
