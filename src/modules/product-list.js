import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Product from './product';
import ProductRowContainer from '../containers/product-row-container';
import TotalRow from './total-row';
import CheckoutRow from './checkout-row';
import './product-list.css';


export default class ProductList extends React.Component{
	
	render() {
		return (
			<ul className="cart-content-products">
				<CSSTransitionGroup 
		          transitionName="item-transition"
		          transitionAppear={false}
			      transitionEnter={false}
			      transitionLeave={true}
			      transitionLeaveTimeout={300}>

					{this.props.products.map(product => 
			      		<ProductRowContainer key={product.id} id={product.id} name={product.name} price={product.price} count={product.count} />
			      	)}
			      	
			     </CSSTransitionGroup>
				<TotalRow total={this.props.total}/>
				<CheckoutRow />
			</ul>
		);
	}
}


