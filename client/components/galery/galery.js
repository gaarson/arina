import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../actions/actions.js';

import { PhotoList } from './photo-list.js';

const mapStateToProps = ({galery}) => ({
  photos: galery
})

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos.getPhotosAdmin())
})

class Galery extends React.Component {
  constructor(props) {
    super(props);

    if(!this.props.photos.length)
      this.props.getPhotos();
  }

  componentDidMount() {
    setTimeout(() => {main.init()}, 300)
  }

  render() {
    return (
      <div id="main">
        <PhotoList photos={this.props.photos}/>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Galery);

