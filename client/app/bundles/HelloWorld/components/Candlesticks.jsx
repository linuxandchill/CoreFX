import React, {Component, PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import data from '../Candlesticks1/state.js';
import ChapterContainer from '../Candlesticks1/ChapterContainer';

export default class Candlesticks extends Component{
  static propTypes = {
  };

  constructor(props, _railsContext){
    super(props);

    this.state = {
      data:data,
      user: this.props.user,
      checked: this.props.checked
    }
  }


  render(){
    const {title, chapters, subheading} = this.state.data;
    const {user} = this.state;
    return(
      <div className="">
        <div className="jumbotron vertical-center">

          <div className="container text-center">
            <h1>{title}</h1>
            <h4 className="course-subheading">{subheading}</h4>
          </div>
        </div>

        <ChapterContainer chapters={chapters} checked={this.state.checked} user={this.state.user} is_pro_user={this.props.is_pro_user}/> 
      </div>
      )
  }
}
