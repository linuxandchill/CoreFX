import React, {Component, PropTypes } from 'react';
import Mainstreamstrategies from './mainstreamstrategies';
import Destructivecycle from './destructivecycle';
import Thetruth from './thetruth';
import Whatiswrongwithtraders from './whatiswrongwithtraders';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Whatiswrongwithtraders chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Mainstreamstrategies chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Destructivecycle chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Thetruth chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/mega-banks"> You're done, nice! Next up- Mega Banks</a> </strong> </h3>
      </div>
    )
  }
}
export default ChapterContainer;
