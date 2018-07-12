import React, { PropTypes } from 'react';

const ProVideo= (props) => {
  if (props.is_pro_user) {
    // Pro-user can watch video
    return(
      <div className="embed-responsive embed-responsive-4by3" dangerouslySetInnerHTML={{__html: props.embedcode}} >
      </div>
      )
  } else {
    // But regular user cannot
    return (
      <div className="provideo-container">
        <h2>Please become a PRO member to watch this video.</h2>

        <a href="/pro" className="inside-frame-pro">Join CoreForex PRO</a>

        <ul>
              <li>Unlimited access to the platform.</li>
              <li>Exclusive FIRST access to new content.</li>
              <li>Video lessons.</li>
              <li>Bank tracking tool set for MT4.</li>
              <li>No more ads!</li>
        </ul>
    </div>
    )
  }
}

export default ProVideo;
