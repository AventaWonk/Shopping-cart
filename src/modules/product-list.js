import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ProductRowContainer from '../containers/product-row-container';
import '../css/product-list.css';

export default class ProductList extends Component {

  render() {
    const products = this.props.products.map(product => 
	  <ProductRowContainer key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} count={product.count} />
	);

	return (
	  <CSSTransitionGroup component="ul" className="cart-content-products"
		transitionName="item-transition"
	    transitionAppear={false}
		transitionEnter={false}
		transitionLeave={true}
		transitionLeaveTimeout={300}>
		{products}
	  </CSSTransitionGroup>
	);	
  }
}
