import React from 'react';
import { connect } from 'react-redux';
import {add,
        sendPhoto,  
        getPhotos,
        deletePhoto} from '../../actions/actions.js';

import {PhotoList} from './photo-list.js';
import {PhotoForm} from './add-form.js';
import {Footer} from './footer.js';

const mapStateToProps = ({admin}) => ({
  photos: admin.photos,
  photoData: admin.photoForm
});

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos.getPhotosAdmin()),
  deletePhoto: (id) => dispatch(deletePhoto.deletePhotoPending(id)),
  fillForm: (e) => dispatch(add.addTextData(e.target)), 
  uploadImage: (e) => dispatch(sendPhoto.sendPhotoPending(e.target.files[0])),
  addPhoto: (data) => dispatch(add.addPhotoPending(data))
});

class Admin extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.getPhotos();
  }

  componentDidMount() {
    var inputs = document.querySelectorAll( '.input-file' );
    Array.prototype.forEach.call( inputs, function( input )
    {
      var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });

    var burger = $('.burger-js'),
      catalog = $('.catalog-js'),
      close = $('.close-js');

    burger.on('click', function(){
      catalog.addClass('catalog--show');
    });
    close.on('click', function(){
      catalog.removeClass('catalog--show');
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
         <div className="burger burger-js">
          <i className="fa fa-bars burger-icon" aria-hidden="true"></i>
        </div>

        <PhotoList
            photos={this.props.photos}
            deletePhoto={this.props.deletePhoto}/>
        <PhotoForm 
            path={this.props.photoData.path}
            uploadImage={this.props.uploadImage} 
            addPhoto={() => this.props.addPhoto(this.props.photoData)}
            fillForm={this.props.fillForm}/>
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
