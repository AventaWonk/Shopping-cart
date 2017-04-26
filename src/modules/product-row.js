import React, { Component } from 'react';

export default class ProductRow extends React.Component{
	render() {
		return (
			<li>
				<span> {this.props.name} </span>
				<span> {this.props.count} </span>
				<span> {this.props.price}руб </span>  
				<a href="#" onClick={() => this.props.increaseProduct(this.props.id)}> <span className="glyphicon glyphicon-plus"/></a>
				<a href="#" onClick={() => this.props.decreaseProduct(this.props.id)}> <span className="glyphicon glyphicon-minus"/></a>
				<a href="#" onClick={() => this.props.deleteProduct(this.props.id)}> <span className="glyphicon glyphicon-remove"/></a>
			</li>
		)	
	}
}
