import React, {Component, PropTypes } from 'react';
import Rules from './rules.jsx';
import Isitsafe from './isitsafe.jsx';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Isitsafe chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Rules chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/advanced-levels">You're done, nice! Next up- Advanced Level Choosing</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
