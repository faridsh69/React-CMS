import React from 'react';

export default class BaseUse extends React.Component{
	alat = 1;
	constructor(props){
  		super(props);
  		this.init();
	}
	init() {
  		this.alat = 'Pussy';
	}
	render() {
		this.init();
		return <div> suck my {this.alat} </div>;
	}
}