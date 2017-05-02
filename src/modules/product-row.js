import React, { Component } from 'react';
import './product-row.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class ProductRow extends React.Component{
	render() {
		return (
			<CSSTransitionGroup component="li" className="cart-item"
		          transitionName="item-transition"
		          transitionAppear={true}
			      transitionAppearTimeout={500}
			      transitionEnter={false}
			      transitionLeave={true}
			      transitionLeaveTimeout={500}>

					<div className="cart-left">
						<img className="cart-item-img" src="http://i1.adis.ws/i/boohooamplience/azz06352_mauve_xl?$product_image_shopping_cart$"/>
					</div>
					<div className="cart-right">
						<a className="cart-item-del" href="#" onClick={() => this.props.deleteProduct(this.props.id)}>
							<svg fill="#ab0812" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
							    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</a>
						<div className="cart-item-name"> {this.props.name} </div>
						<div className="cart-item-attributes">
							<dl>
								<dt>Quantity</dt>
								<dd>
									<a href="#" onClick={() => this.props.increaseProduct(this.props.id)}>
										<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
										    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
										    <path d="M0 0h24v24H0z" fill="none"/>
										</svg>
									</a>
									<span className="price">{this.props.count}</span> 
									<a href="#" onClick={() => this.props.decreaseProduct(this.props.id)}>
										<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
										    <path d="M19 13H5v-2h14v2z"/>
										    <path d="M0 0h24v24H0z" fill="none"/>
										</svg>
									</a>
								</dd>

								<dt>Price</dt>
								<dd>{this.props.price}$</dd>
							</dl>
						 </div> 
					</div>			
		        </CSSTransitionGroup>
		)	
	}
}
