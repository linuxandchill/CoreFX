import React, {Component, PropTypes } from 'react';
import Importance from './Importance';
import Inthetrade from './Inthetrade';
import Missingtrades from './Missingtrades';
import Overtrading from './Overtrading';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">

        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Importance chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Inthetrade chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Overtrading chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Missingtrades chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/trading-the-news"> Well done! Next up- News Trading</a> </strong> </h3>
      </div>
    )
  }
}
export default ChapterContainer;
