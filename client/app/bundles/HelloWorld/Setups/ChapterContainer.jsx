import React, {Component, PropTypes } from 'react';
import Ck1 from './ck1.jsx';
import Takingsetups from './takingsetups.jsx';
import Whatisasetup from './whatisasetup.jsx';
import Ck2 from './ck2.jsx';
import Ck3 from './ck3.jsx';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

        <Whatisasetup chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Ck1 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Ck2 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Ck3 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Takingsetups chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  


        <h3 className="text-center">  <strong> <a className="next-chapter" href="/risk-reward">Well done! Next up - Risk/Reward >></a> </strong> </h3>
      </div>
    )
  }
}
export default ChapterContainer;
