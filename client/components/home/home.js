import React from 'react';
import { connect } from 'react-redux';
import { homePhotos } from '../../actions/actions.js';

import { Section } from './sections.js';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { PhotoBlock } from './photo-block.js';
import { Feedback } from './feedback.js';

const mapStateToProps = ({home}) => ({
  photos: home.photos
});

const mapDispatchToProps = dispatch => ({
  getHomePhotos: () => dispatch(homePhotos.photosPending())
})

class Home extends React.Component {
  constructor(props) {
    super(props);
    if(!this.props.photos.length)
      this.props.getHomePhotos();
  }

  componentDidMount() {
    $(document).ready(function(){
      $('a[href*="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
      });
      return false;
    });
 
  }

  render() {
    return (
      <div>
        <Header />
        <Section photos={this.props.photos}/>
        <PhotoBlock photos={this.props.photos.slice(2, 8)}/>
        <Feedback /> 
        <Footer />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

