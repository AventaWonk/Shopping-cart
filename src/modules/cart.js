import React, { Component } from 'react';
import Product from './product';
import ProductList from './product-list';

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
			<div>
				<a href="#" onClick={() => this.props.changeVisibility()}> Cart  
					  <span className="badge"> {this.props.count} </span>
				</a>
				<div style={{display: this.props.visibility ? 'block' : 'none' }}>
					<ProductList  products={this.props.products} />
				</div>
				
			</div>
				
			
		);
	}
}
