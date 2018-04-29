import React, { Component } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

import UploadForm from '../helper_components/uploadForm.jsx';
import Worthymap from '../helper_components/worthyMap.jsx';
import DropZone from '../helper_components/dropZone.jsx';

export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      location: '',
      imageURLS: [],
      description: '',
      user_id: '',
      username: '',
      submitted: '',
      loading: false,
      coords: {
        lat: null,
        lng: null
      },
      latLng: [],
      uploadStatus: [],
      tags: ''
    };
    this.getLink = this.getLink.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pinLocation = this.pinLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  setLocation(latLng) {
    let copy = this.state.latLng.slice();
    copy.push(latLng)
    this.setState({
      latLng: copy
    });
  }

  getLink(imgurLink) {
    let copy = this.state.imageURLS.slice();
    copy.push(imgurLink);
    this.setState({ imageURLS: copy })
  }

  pinLocation({ latLng }) {
    this.setState({
      coords: {
        lat: latLng.lat(),
        lng: latLng.lng(),
      }
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let photos = [];

    for (let i = 0; i < this.state.imageURLS.length; i++) {
      let photo = {
        category: this.state.category,
        location: this.state.location,
        description: this.state.description,
        imageURL: this.state.imageURLS[i],
        latLng: this.state.latLng[i] || this.state.coords
      }
      photo.user_id = this.props.userData._id;
      photo.username = this.props.userData.username;
      photo.tags = this.state.tags.split(', ');
      photos.push(photo);
    }

    console.log(photos);

    let invalidFields = new Set();

    photos.forEach((photo) => {
      photo.latLng.lat === null || photo.latLng.lng === null ? invalidFields.add('Your photo does not contain location data. Please drop a location pin on the map') : null;
      photo.category === '' ? invalidFields.add(`Please enter a valid category`) : null;
      photo.location === '' ? invalidFields.add(`Please enter a valid location`) : null;
      photo.description === '' ? invalidFields.add(`Please enter a valid description`) : null;
    });
    
    if (invalidFields.size > 0) {
      this.setState({uploadStatus: Array.from(invalidFields)});
      return;
    } else {
      this.setState({uploadStatus: Array.from(invalidFields)});
    }
    
    this.setState({
      loading: true
    })

    let body = this.state.tags.split(', ').reduce((acc, tag) => {
      acc.tags[tag] = 1;
    }, {username: '', tags: {}});
  
    axios.post(`/api/user`, body).then(() => console.log('this is actually working very well'))

    axios.post(`/api/upload`, photos)
    
      .then(res => {
        this.setState({
          submitted: 'Successfully uploaded!',
          loading: false
        });
      })
    
      .then(() => {
        this.setState({
          category: '',
          description: '',
          imageURLS: [],
          location: '',
          latLng: [],
          tags: '', // reset state of tags
          coords: {lat: null, lng: null}
        });
      })
      
      .then(() => {
        setTimeout(() => this.setState({submitted: ''}), 2000);
      })
      
      .catch((err) => {
        this.setState({
          submitted: 'An error occurred. Please try again.',
          loading: false
        })
      })
  }

  handleAddition (tag) {
    const { tags } = this.state;
    this.setState({ tags: [...tags, ...[tag]] })
  }

  handleDelete (i) {
    let tags = this.state.tags.filter((tag, index) => index !== i);
    this.setState({ tags: tags});
  }

  handleDrag(tag, currentPosition, newPosition) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currentPosition, 1);
    newTags.splice(newPosition, 0, tag);

    this.setState({ tags: newTags });
  }

  render() {
    const { lat, lng } = this.state.coords;
    const marker = [lat, lng].includes(null) 
      ? [] 
      : [{lat, lng}]
    
    
    return (
      <div className="body-content-equal-thirds fullh fullw" >
        <div className="tl map" >

          <Worthymap 
            getLocationUpload={this.getLocationUpload}
            onMapClick={this.pinLocation}
            defaultZoom={10}
            defaultCenter={{lat: 37.77, lng: -122.41}}
            markers={ marker }
          />

        </div>
          

          <div className="tm drop-zone" >
            <DropZone getLink={this.getLink} setLocation={this.setLocation}/>
          </div>
          
          <div className="tr upload-form">
            <UploadForm
              category={this.state.category}
              location={this.state.location}
              imageURL={this.state.imageURL}
              description={this.state.description}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              uploadStatus={this.state.uploadStatus}
              handleAddition={this.handleAddition}
              handleDelete={this.handleDelete}
              handleDrag={this.handleDrag}
              suggestions={this.state.suggestions}
              tags={this.state.tags}
            />
            
          
          </div>
          <div className="mid submitted">
            <div>
              <BeatLoader />
              {this.state.submitted}
            </div>
          </div>
        </div>
    )
  }
}

