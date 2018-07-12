import React, {Component, PropTypes } from 'react';
import WhatIsACandlestick from './WhatIsACandlestick';
import Conclusion from './Conclusion';
import CandleWicks from './CandleWicks';
import Interpreting from './Interpreting';

class ChapterContainer extends Component{
  render(){
    return(
        <div className="container chapters-box">
        { this.props.user ? '' : <p className="track-suggestion"><a href="/users/sign_in">Login</a> for <strong>FREE</strong> to track your progress! </p>}

          <WhatIsACandlestick chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <CandleWicks chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Interpreting chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>
          <Conclusion chapters={this.props.chapters} checked={this.props.checked} user={this.props.user} is_pro_user={this.props.is_pro_user}/>

    <h3 className="text-center">  <strong> <a className="next-chapter" href="/candlestick-formations"> Next up- Candle Formations</a> </strong> </h3>
        </div> 
      )
  }
}
export default ChapterContainer;
