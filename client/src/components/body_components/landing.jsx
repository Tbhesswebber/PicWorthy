import React, { Component } from 'react';
import  FaChevronRight  from 'react-icons/lib/fa/chevron-right';
import  FaChevronLeft  from 'react-icons/lib/fa/chevron-left';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
       images: [
        "https://images.pexels.com/photos/7653/pexels-photo.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://www.californiabeaches.com/wp-content/uploads/2017/04/bigs-Lands-End-Beach-Labyrinth-with-Golden-Gate-Bridge-E1-Large-1000x610.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/55/20160124_GFJ2757-kerry-park-skyline_seattle-wa-panoramic.jpg"
       ]
    }
  }

  componentDidMount () {
    this.changePhoto = setInterval(() => {
      this.advanceImage(this.state.images);
    }, 7000);
  }

  componentWillUnmount () {
    clearInterval(this.changePhoto);
  }
  
  advanceImage (images) {
    let reorderedImages = images.concat(images.splice(0, 1));
    this.setState({images: reorderedImages});
  }

  retreatImage (images) {
    let reorderedImages = images.splice(-1, 1).concat(images);
    this.setState({images: reorderedImages});
  }

  render() {
    return (
      <div className="landing fullh fullw">
        <div className="landing-left chevron fullh fullw">
            <FaChevronLeft className="left-chevron" onClick={() => this.advanceImage(this.state.images)} />
        </div>
        <div className="landing-frame">
          <img className="landing-image" src={this.state.images[0]} />
        </div>
        <div className="landing-right chevron fullh fullw">
            <FaChevronRight className="right-chevron" onClick={() => this.retreatImage(this.state.images)} />
        </div>
      </div>
    );
  }
}

export default Landing;