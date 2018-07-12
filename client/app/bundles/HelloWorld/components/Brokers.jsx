import React, {Component, PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import data from '../Brokers/state.js';
import ChapterContainer from '../Brokers/ChapterContainer';

export default class Brokers extends Component{
  constructor(props, _railsContext){
    super(props);

    this.state = {
      data,
    }
  }


  render(){
    const {title, chapters, subheading} = this.state.data;
    return(
      <div className="">
        <div className="jumbotron vertical-center">

          <div className="container text-center">
            <h1>{title}</h1>
            <h4 className="course-subheading">{subheading}</h4>
          </div>
        </div>

        <ChapterContainer chapters={chapters} is_pro_user={this.props.is_pro_user}/> 
      </div>
      )
  }
}
