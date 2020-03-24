import React from 'react';
import Config from './config';
import Koon from './../chert/koon';
import BaseUse from './base-use';

export default class Setup extends React.Component{
	// constructor(){
	// 	console.log('chi kos mige?');
	// };
	 //  constructor(props) {
  //   super(props);
  //   this.a = 123;
  // }
  	constructor(props){
  		super(props);
  		console.log(BaseUse);
  	}
	sagi(){
		this.soock = 'sock';
		this.jendeKoni = new Koon();
		console.log(this.jendeKoni.sorakh);
		this.jendeKoni.sorakh = 'kos o kooon';
		console.log(this.jendeKoni.orgasmAsasi());
	}
	render(){
		this.sagi();
		return <div> <BaseUse /> --- koon.orgasm --- {this.jendeKoni.orgasmAsasi()} {this.soock}</div>;
	}
}