import React, { Component } from 'react';
import Product from './product';
import ProductList from './product-list';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showCart: true};
		props.loadProducts();

		let cartSection = document.getElementById('cart');  
		cartSection.onclick = () => this.showCart();
		
		let productsSection = document.getElementById('products');  
		productsSection.onclick = sender => {
			let product = sender.target.dataset;
			if(product.productId)	
				this.props.addProduct(new Product(product.productId, product.productName, product.productPrice));
		}	
    }
	
	showCart(){
		this.props.addProduct("2");
		this.setState({showCart: this.state.showCart ? false : true});
	}
	
	render() {
		return (
			<div style={{display: this.state.showCart ? 'block' : 'none' }}>
				<h1>Cart {this.props.count}</h1>
				<ProductList products={this.props.products} />
			</div>
		);
	}
}
