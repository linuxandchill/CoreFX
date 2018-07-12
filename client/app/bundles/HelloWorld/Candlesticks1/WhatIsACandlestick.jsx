import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const WhatIsACandlestick = (props) => {
  return (
    <div className="single-chapter">
      <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[0].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >
        <p>We will not discuss the popular candlestick patterns. Those are considered just another mainstream strategy meant to keep the retail trader trapped.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/woh5uw4fk3" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

        <p>It is however important to understand candlesticks. Here is a high-level overview of what candlesticks are: </p>

        <p> When first looking at a candlestick chart, the student of the more common bar charts may be confused; however, just like a bar chart, the daily candlestick line contains the market's open, high, low and close of a specific day. Now this is where the system takes on a whole new look: the candlestick has a wide part, which is called the "real body". This real body represents the range between the open and close of that day's trading. When the real body is filled in or black/red, it means the close was lower than the open. If the real body is empty or white/green/blue, it means the opposite: the close was higher than the open. </p>
        <img className="img-responsive" src="https://candlecharts.com/wp-content/uploads/2014/10/candlestick-charting-basics-candle-line.gif" alt="Hi :)" />
      </Collapsible>

    </div>
  )
}

export default WhatIsACandlestick;
