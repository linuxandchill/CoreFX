import React, {Component, PropTypes } from 'react';
import Nondealingdesk from './dealingdesk';
import Dealingdesk from './nondealingdesk';

class ChapterContainer extends Component{
  render(){
    return(
      <div className="container chapters-box">

        <Dealingdesk chapters={this.props.chapters} is_pro_user={this.props.is_pro_user}/>
        <Nondealingdesk chapters={this.props.chapters} is_pro_user={this.props.is_pro_user}/>  

      </div>
    )
  }
}
export default ChapterContainer;
