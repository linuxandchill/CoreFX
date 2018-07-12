import React, {Component, PropTypes } from 'react';
import Confluence from './Confluence';
import MovingAverages from './MovingAverages';
import SupportResistance from './SupportResistance';
import DailyHighsLows from './DailyHighsLows';
import Basics from './Basics';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}
        <Basics chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <SupportResistance chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <MovingAverages chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <DailyHighsLows chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
        <Confluence chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/> 

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/pullbacks">You're done, nice! Next up- Pullbacks</a> </strong> </h3>

      </div>
    )
  }
}
export default ChapterContainer;
