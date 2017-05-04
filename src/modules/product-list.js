import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Product from './product';
import ProductRowContainer from '../containers/product-row-container';
import '../css/product-list.css';


export default class ProductList extends React.Component{
	render() {
		return (
			<CSSTransitionGroup component="ul" className="cart-content-products"
	          transitionName="item-transition"
	          transitionAppear={false}
		      transitionEnter={false}
		      transitionLeave={true}
		      transitionLeaveTimeout={300}>

				{this.props.products.map(product => 
		      		<ProductRowContainer key={product.id} id={product.id} name={product.name} price={product.price} count={product.count} />
		      	)}

			<li className="cart-total">
				<span className="pull-left">Total</span>
				<span>${this.props.total}</span>
			</li>
			<li className="cart-checkout">
				<a href="#">Checkout</a>
			</li>
		    </CSSTransitionGroup>
		);
	}
}


