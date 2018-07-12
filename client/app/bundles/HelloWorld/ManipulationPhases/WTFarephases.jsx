import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const WtfArePhases = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[4].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >

    <p>
      The first thing you must understand is that there is a difference between what the chart shows and what is really going on.
    </p>
    <p>The market has a <i>"state"</i> property. At certain times it is doing something, at other times it is doing something else. It's <i>state</i> is constantly changing. </p>
    <p>By identifying the state of the market we can determine when/ what kind of manipulation to expect.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/5i0iqpll6n" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

        <p>Just like ice can go from a solid to a liquid, the market can also change state.</p>

        <img className="img-responsive" src="https://media.giphy.com/media/EFJ1O1plZZOBW/giphy.gif" alt="Hi :)" />
        <br></br>
        <p>These are the important states of the market that we must learn to idenfity:</p>
    <ul className="inner-list">
          <li>Compression (Position building)</li> 
          <li>Shake-out (Manipulation)</li> 
          <li>Thrust (Profit taking)</li>
        </ul>
  </Collapsible>

</div>

export default WtfArePhases;
