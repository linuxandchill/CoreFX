import React, { Component, PropTypes } from 'react';
//import {observer} from 'mobx-react';
//import { observable, observe, toJS } from 'mobx'
//
//const progressStore = observable({
//  completed: false,
//})
//
//progressStore.checkTheBox = function(){
//  this.completed = !this.completed;
//}


class ProgressCheck extends Component{
  static propTypes = {
    //  checked: PropTypes.bool.isRequired, // this is passed from the Rails view
  };

  constructor(props, _railsContext){
    super(props);

    var checkStatus = false

    var checked_array = props.checked
    if (checked_array !== null &&
        props.chapterid !== null)
    {
      for (var i = 0, len = checked_array.length; i < len; i ++) {
        var ch = checked_array[i]
        if (ch.chapterkey == props.chapterid)
          checkStatus = ch.status
      }
    }

    if (typeof window !== 'undefined') {
      var defCheckChapter = localStorage["default_check_chapter"]
      if (defCheckChapter !== undefined) {
        if (defCheckChapter == props.chapterid) {
          if (props.user !== null) {
            checkStatus = true
            $.ajax({
              method: 'POST',
              url: '/set-chapter-checked/' + this.props.chapterid,
              data: {
                authenticity_token: $('meta[name="csrf-token"]').attr('content'),
                status: checkStatus
              }
            })
          }
          delete localStorage["default_check_chapter"]
        }
      }
    }

    this.state = {
      isChecked: checkStatus,
      userExists: this.props.user
    }

    this.handleNonLoggedChecker = this.handleNonLoggedChecker.bind(this);
  }

  handleNonLoggedChecker(){
    console.log('Please log in')
    localStorage["login_redirect"] = window.location.href
    localStorage["default_check_chapter"] = this.props.chapterid
    window.location.href = "/users/sign_in"
  }

  handleClick = () => {
    if (this.state.userExists === null) {
      this.handleNonLoggedChecker()
    } else {
      var newCheckStatus = !this.state.isChecked
      this.setState({ isChecked: newCheckStatus })

      $.ajax({
        method: 'POST',
        url: '/set-chapter-checked/' + this.props.chapterid,
        data: {
          authenticity_token: $('meta[name="csrf-token"]').attr('content'),
          status: newCheckStatus
        }
      })
    }
  }

  render(){
    return(
      <div className="">
        <label className="">
          <input className="progress-check" type="checkbox" name="progressTracker"
            id="progress-checkbox"
            checked={this.state.isChecked}
            onChange={this.handleClick}
            value={this.state.isChecked}
          />
          <div className="control__indicator"></div>
        </label>
      </div>
    )
  }
}

export default ProgressCheck;
