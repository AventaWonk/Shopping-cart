import React, { Component } from 'react';
import Product from './product';
import ProductList from './product-list';
import CartFooter from './cart-footer';
import '../css/cart.css'

export default class Cart extends Component {
	constructor(props) {
		super(props);
		props.loadProducts();

		let productsSection = document.getElementById('products');  
		productsSection.onclick = sender => {
			let product = sender.target.dataset;
			if(product.productId)	
				this.props.addProduct(new Product(product.productId, product.productName, product.productPrice, product.productImg));
		}	
    }
	
	render() {
		return (
			<div className="cart">
				<a href="#" onClick={() => this.props.changeVisibility()}> Cart  
					  <span className="badge"> {this.props.count} </span>
				</a>
				<div className="cart-content" style={{display: this.props.visibility ? 'block' : 'none' }}>
					<ProductList  products={this.props.products} />
					<CartFooter count={this.props.products.length} total={this.props.total}/>
				</div>
			</div>
		);
	}
}
