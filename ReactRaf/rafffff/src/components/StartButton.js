import React, { Component } from 'react';
import catArr from 'react';

class StartButton extends Component {
  constructor(){
    super();
  }

onClick = () => {
  this.props.getRandom();
}

  render(){
    return ( 
    <div>
      <button onClick={this.onClick}>Start</button>
    </div>
    )
  }

}

export default StartButton;