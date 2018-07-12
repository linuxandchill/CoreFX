import React, {Component, PropTypes } from 'react';

class Trigger extends Component{
  constructor(props){
    super(props);

    this.state = {
      checked: false,  
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this); 
  }

  handleCheckboxClick(event){
    this.setState({checked: !this.state.checked})
  }

  render(){
    return(
      <div className=""> 
        <div className=""> 

          <span className="chapter-title">
            {this.props.chapter.chapterName}
          </span>  

        </div>

      </div>
      )
    }
  }

  export default Trigger; 

