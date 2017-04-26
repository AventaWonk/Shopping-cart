import React, { Component } from 'react'

export default class TotalRow extends React.Component{

	render() {
		return (
			<li>
				<span>Total ${this.props.total}</span>
			</li>
		);
	}
}
