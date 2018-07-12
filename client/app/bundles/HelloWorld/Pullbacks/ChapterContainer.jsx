import React, {Component, PropTypes } from 'react';
import Whatis from './whatis.jsx';
import Aggressive from './aggressive.jsx';
import Deep from './deep.jsx';
import Moderate from './moderate.jsx';
import Conclusion from './conclusion';

class ChapterContainer extends Component{
  render(){

    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}
        <Whatis chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Aggressive chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Moderate chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Deep chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Conclusion chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  
    <h3 className="text-center">  <strong> <a className="next-chapter" href="/setups"> Next up- Setups</a> </strong> </h3>
      </div>
    )
  }
}
export default ChapterContainer;
