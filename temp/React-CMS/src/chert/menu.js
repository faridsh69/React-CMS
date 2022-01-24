import React from 'react';
export default class menu extends React.Component{
  constructor(props) {
    super(props);
    this.a = 123;
  }

  render(){
    return (
      <div>
      { this.a }
       </div>
    );
  }
}
