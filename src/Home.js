import React, { Component } from "react";
import image1 from "./images/image1.jpg.png";


class Home extends Component {
  
  render() {
	  
    return ( 
	
      <div>
        <h2>Steam Recommendations  </h2>
        <p></p>
      
        <p></p>
        <img class="reframe" src={image1}/>
      </div>
    );
  }
}

 
 

export default Home;