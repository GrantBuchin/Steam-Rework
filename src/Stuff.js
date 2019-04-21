import React, { Component } from "react";
import image2 from "./images/image2.png";
 
function resize(image2) { // image is a reference to an <img> element
  var x = 1920, // max width
       y = 1080, // max height
       imageWidth = image2.width,
       imageHeight = image2.height;
  if (imageWidth > x) {
    imageHeight = imageHeight * (x / imageWidth);
    imageWidth = x;
    if (imageHeight > y) {
      imageWidth = imageWidth * (y / imageHeight);
      imageHeight = y;
    }
  } else if (imageHeight > y) {
    imageWidth = imageWidth * (y / imageHeight);
    imageHeight = y;
    if (imageWidth > x) {
      imageHeight = imageHeight * (x / imageWidth);
      imageWidth = x;
    }
  }
  image2.width = imageWidth;
  image2.height = imageHeight;
}

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Library</h2>
      
        <p>Games</p>
        <img class="reframe" src={image2}/>
        <ol>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;