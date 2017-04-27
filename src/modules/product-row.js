import React, { Component } from 'react';

export default class ProductRow extends React.Component{
	render() {
		return (
			<li>
				<span> {this.props.name} </span>
				<a href="#" onClick={() => this.props.increaseProduct(this.props.id)}> <span className="glyphicon glyphicon-plus"/></a>
				<span> {this.props.count} </span>
				<a href="#" onClick={() => this.props.decreaseProduct(this.props.id)}> <span className="glyphicon glyphicon-minus"/></a>
				<span> {this.props.price}$ </span>  
				<a href="#" onClick={() => this.props.deleteProduct(this.props.id)}> <span className="glyphicon glyphicon-remove"/></a>
			</li>
		)	
	}
}
