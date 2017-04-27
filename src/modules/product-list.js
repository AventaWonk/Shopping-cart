import React, { Component } from 'react';
import Product from './product';
import ProductRowContainer from '../containers/product-row-container';
import TotalRow from './total-row';
import './product-list.css';

export default class ProductList extends React.Component{
	
	render() {
		return (
			<ul className="cart-content-products">
				{this.props.products.map(product => 
				<ProductRowContainer key={product.id} id={product.id} name={product.name} price={product.price} count={product.count} />)}
				<TotalRow total={this.props.total}/>
			</ul>
		)
	}
}


