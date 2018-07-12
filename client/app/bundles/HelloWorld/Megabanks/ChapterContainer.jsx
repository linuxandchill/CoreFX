import React, {Component, PropTypes } from 'react';
import Whatisbanktrading from './whatisbanktrading';
import Bankdeception from './bankdeception';
import Bankperspective from './bankperspective';

class ChapterContainer extends Component{
  render(){
    console.log(this.props.user)
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Whatisbanktrading chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Bankperspective chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Bankdeception chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  
    <h3 className="text-center">  <strong> <a className="next-chapter" href="/liquidity"> Next up- Liquidity</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
