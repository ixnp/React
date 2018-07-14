import React, { Component } from 'react';
import cats from '../assets/fatcat.PNG';
import cats1 from '../assets/fatcat2.PNG';
import cats2 from '../assets/fatcat3.PNG';
import cats3 from '../assets/fatcat4.PNG';
import cats4 from '../assets/fatcat5.PNG';
import StartButton from './StartButton.js'


const catsArr = [cats, cats1, cats2, cats3, cats4];

class Image extends Component {
  constructor(){
    super();
    this.state = {
      image: catsArr[0]
    }
  }
  
  getRandom = () => {
    let ranIndex = Math.floor(Math.random()*catsArr.length);
    this.setState({
      image: catsArr[ranIndex]
    })
  }

  render(){
    return ( 
    <div>
      <StartButton getRandom={this.getRandom}/>
      <img src={this.state.image}/>
    </div>
    )
  }

}

export default Image;