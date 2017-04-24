import React, { Component } from 'react';
import Product from './product';
import ProductRowContainer from '../containers/product-row-container';

export default class ProductList extends React.Component{
	
	render() {
		return (
			<ul>
				{this.props.products.map(product => 
				<ProductRowContainer key={product.id} id={product.id} name={product.name} price={product.price} count={product.count} />)}
			</ul>
		)
	}
}


