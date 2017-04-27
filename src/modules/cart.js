import React, { Component } from 'react';
import Product from './product';
import ProductList from './product-list';
import './cart.css'

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		props.loadProducts();

		let productsSection = document.getElementById('products');  
		productsSection.onclick = sender => {
			let product = sender.target.dataset;
			if(product.productId)	
				this.props.addProduct(new Product(product.productId, product.productName, product.productPrice));
		}	
    }
	
	
	render() {
		return (
			<div className="cart">
				<a href="#" onClick={() => this.props.changeVisibility()}> Cart  
					  <span className="badge"> {this.props.count} </span>
				</a>
				<div className="cart-content" style={{display: this.props.visibility ? 'block' : 'none' }}>
					<ProductList  products={this.props.products} total={this.props.total}/>
				</div>
				
			</div>
				
			
		);
	}
}
