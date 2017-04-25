import React, { Component } from 'react';
import Product from './product';
import ProductList from './product-list';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		props.loadProducts();

		let cartSection = document.getElementById('cart');  
		cartSection.onclick = () => props.changeVisibility();
		
		let productsSection = document.getElementById('products');  
		productsSection.onclick = sender => {
			let product = sender.target.dataset;
			if(product.productId)	
				this.props.addProduct(new Product(product.productId, product.productName, product.productPrice));
		}	
    }
	
	
	render() {
		return (
			<div style={{display: this.props.visibility ? 'block' : 'none' }}>
				<h1>Cart {this.props.count}</h1>
				<ProductList products={this.props.products} />
			</div>
		);
	}
}
