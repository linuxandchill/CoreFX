import React, {Component, PropTypes } from 'react';
import Whatisliquidity from './whatisliquidity';
import Whydoesitmatter from './whydoesitmatter';
import Howbanksuseit from './howbanksuseit';

class ChapterContainer extends Component{
  render(){
    return(
        <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

          <Whatisliquidity chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Whydoesitmatter chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Howbanksuseit chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/> 

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/stop-loss"> You're done, nice! Next up- Stop orders </a> </strong> </h3>

        </div>
      )
  }
}
export default ChapterContainer;
