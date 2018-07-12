import React, {Component, PropTypes } from 'react';
import Whatisit from './whatisit.jsx';
import Whyisituseful from './whyisituseful.jsx';
import Stoprun from './stoprun.jsx';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}
        <Whatisit chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Whyisituseful chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Stoprun chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/> 

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/candlestick-basics"> You're done, nice! Next up- Candlesticks: The Basics</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
