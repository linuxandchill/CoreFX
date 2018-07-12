import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const HowToUseThem = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[4].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/wl12d05rss" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>
      Always keep in mind that banks are doing everything behind the scenes over the course of a few hours, sometimes even days. There are a few questions you can ask yourself in order to check for signs of potential manipulation.
    </p>

    <ol className="inner-list">
      <li>Is there position building during Asia?</li>
      <li>Are there shake-outs during Frankfurt or London?</li>
      <li>Is there a large move following the shake-out?</li>
      <li>What is the daily range? Did the large move reach the ADR?</li>
      <li>Are there any signs of a shake-out at NY open?</li>
    </ol>
    <img className="img-responsive" src="https://i.imgur.com/T4KCfbb.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p>Remember that the times/session that each phase happens in depends on the pair you are trading. The examples given assume that you are trading EUR/USD & GBP/USD but manipulation can be seen on any pair, however, the time in which each phase happens will be different.</p>

  </Collapsible>

</div>

export default HowToUseThem;
