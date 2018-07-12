import React, {Component, PropTypes } from 'react';
import Ck4 from './ck4.jsx';
import Ck5 from './ck5.jsx';
import Ck6 from './ck6.jsx';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">

        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}
        <Ck4 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Ck5 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Ck6 chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>  
    <h3 className="text-center">  <strong> <a className="next-chapter" href="/psychology"> Well done! Next up- Psychology</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
