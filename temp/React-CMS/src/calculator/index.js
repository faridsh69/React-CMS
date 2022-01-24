import React from 'react';

export default class Index extends React.Component{
	buttonNumbers = [1,2,3,4,5,6,7,8,9,0]; 
	init(){
		this.buttons = this.buttonNumbers.map(function(item) {
            return (
            	<button className="col-3" value={item}>{item}</button>
            );
        });
	}
	render(){
		this.init(); 
		return (
		<div>
			<input />
			{this.buttons}
			<br />
			<button> calculate </button>
			<span> answer is: </span>
		</div>
		);
	}
}