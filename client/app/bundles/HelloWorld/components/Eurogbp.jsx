import React, {Component, PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import data from '../Eurogbp/state.js';
import ChapterContainer from '../Eurogbp/ChapterContainer';

export default class Eurogbp extends Component{
  static propTypes = {
  };

  constructor(props, _railsContext){
    super(props);

    this.state = {
      data,
      checked: this.props.checked,
      user: this.props.user,
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

        <ChapterContainer chapters={chapters} checked={this.state.checked} user={this.state.user} is_pro_user={this.props.is_pro_user}/> 
      </div>
      )
  }
}
