import React, {Component, PropTypes } from 'react';
import Basics from './Basics';
import Asian from './Asian' ;
import European from './European';
import American from './American';
import HowToUseThem from './HowToUseThem';

class ChapterContainer extends Component{
  render(){
    return(
        <div className="container chapters-box">

        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}
          <Basics chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Asian chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <European chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <American chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <HowToUseThem chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/> 
    <h3 className="text-center">  <strong> <a className="next-chapter" href="/levels">You're done, nice! Next up- Levels </a> </strong> </h3>

        </div>
      )
  }
}
export default ChapterContainer;
