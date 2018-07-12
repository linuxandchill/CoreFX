import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const CandleWicks = (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[1].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

        <p>Just above and below the real body are the "shadows". Chartists have always thought of these as the wicks of the candle, and it is the shadows that show the high and low prices of that day's trading.</p>
        <p> If the upper shadow on the filled-in body is short, it indicates that the open that day was closer to the high of the day. A short upper shadow on a white or unfilled body dictates that the close was near the high.</p>

        <img className="img-responsive" src="https://s3.amazonaws.com/babypips-media-production/images/2016/05/grade2-long-shadows.png" alt="Hi :)" />
        <br></br>

        <p> You will often see large wicks in your charts depicting how the large banks made what is called a "stop-run". </p>

        <p> See our section on<a href="/stop-loss"> stop orders </a> for more. </p>
      </Collapsible>

    </div>


    )
}
export default CandleWicks;
