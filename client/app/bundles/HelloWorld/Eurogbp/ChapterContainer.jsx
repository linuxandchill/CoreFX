import React, {Component, PropTypes } from 'react';
import Eurogbp from './Eurogbp';
import Yen from './Yen';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Eurogbp chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/">You've covered alot. Let us know if you have any questions!</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
