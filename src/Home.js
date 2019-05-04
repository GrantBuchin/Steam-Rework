import React, { Component } from 'react';
import image1 from './images/image1.jpg.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Steam Recommendations </h2>
        <p />

        <p />
        <img className='reframe' src={image1} alt='image1' />
      </div>
    );
  }
}

export default Home;
