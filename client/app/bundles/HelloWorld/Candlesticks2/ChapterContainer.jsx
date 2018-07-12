import React, {Component, PropTypes } from 'react';
import Midpin from './midpin';
import Pinbar from './pinbar';
import Towers from './towers';
import Conclusion from './conclusion';

class ChapterContainer extends Component{
  render(){
    return(
        <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

          <Pinbar chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Towers chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Midpin chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Conclusion chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/> 

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/manipulation-phases">You're a champion! Next up- Manipulation Phases</a> </strong> </h3>
        </div>
      )
  }
}
export default ChapterContainer;
