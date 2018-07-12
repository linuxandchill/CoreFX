import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const MovingAverages = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      A moving average is nothing more than a support/resistance level that is dynamic, it moves. So instead of it being a horizontal line, it moves up and down depending on where the data says the next point should be plotted.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/i3s4v2znlz" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
    <p>Just like support/resistance, lots of people are looking at moving averages to put their stop orders and to play the breakout.</p>

    <img className="img-responsive" src="https://i.imgur.com/gyuQoMT.png" alt="Hi :)" />
    <br></br>

    <p>A common question is, <i>"which moving average should I use?"</i></p>
    <p>The answer is simple, <strong>use the one that the most people are looking at!</strong></p>

    <p>This is because that's the one that the banks and big players will be looking at, and we're following their lead.</p>

    <p>We have found that the 100 & 200 EMA's are two of the most common and you will catch plenty of setups using those. Feel free to experiment with other moving averages but remember to stick to the more popular ones.</p>

  </Collapsible>

</div>
export default MovingAverages;
