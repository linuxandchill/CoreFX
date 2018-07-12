import React, {Component, PropTypes } from 'react';
import Compression from './compression';
import Thrustmove from './thrustmove';
import Shakeout from './shakeout';
import Conclusion from './conclusion';
import WtfArePhases from './WTFarephases'; 

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <WtfArePhases chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Compression chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Shakeout chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Thrustmove chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Conclusion chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/sessions">Keep it up! Next - Sessions</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
