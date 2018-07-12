import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Midpin = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      The mid-pin formation is comprised of two opposing candles with a pin-bar between them. It represents the same ideas as the tower formation.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/64uc72z4bu" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's what it looks like: </p>
    <img className="img-responsive" src="https://i.imgur.com/xNJyzyo.png" alt="Hi :)" />
    <br></br>

    <p>In a bearish scenario (left):</p>
    <ul className="inner-list">
      <li>Banks are pushing price up into a level (first green candle).</li>
      <li>Then we see a pin-bar which triggers stops.</li>
      <li>Then price moves in the opposite direction (red candle). </li>
    </ul>

  </Collapsible>

</div>

export default Midpin;
