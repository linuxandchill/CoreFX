import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Priority = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/>
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>Some levels are just more important than others. They are considered more relevant simply because they have a higher chance of being an area where orders are stacked.</p>

    <p>Here's a basic hierarchy of level importance: </p>

    <ul className="inner-list">
      <li>Highs/lows of previous day.</li>
      <li>H/L of NY & London Overlap.</li>
      <li>H/L of previous London.</li>
      <li>H/L of previous NY.</li>
      <li>H/L of Asia.</li>
      <li>Mid-Asian range.</li>
      <li>Moving Average.</li>
      <li>Round numbers.</li>
    </ul>

    <p>After the first few the order of importance is less clear. Just remember that some levels hold more weight than others and take your trades accordingly.</p>

    <p>Check out the video for a more in-depth explanation:</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/ncwqsc05i9" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

  </Collapsible>

</div>

export default Priority;
