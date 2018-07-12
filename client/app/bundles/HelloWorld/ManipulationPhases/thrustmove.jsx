import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Thrustmove = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>The thrust move is when the banks are finally releasing their real position. By the tail end of the move they now have the market moving in a direction that allows them to close the position and take profits.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/30p08rv20j" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Take a look at the example below:</p>
    <img className="img-responsive" src="https://i.imgur.com/VhNL9LQ.png" alt="Hi :)" />
    <p className="text-center">GBP/USD</p>
    <br></br>

    <p>The thrust(release) phase in this chart is show late in the London session(grey box). It is easy to spot the manipulation in this chart.</p>
    <p>First some position was built throughout Asia, then there was a bit of a stop-run and shakeout in early London, and by the end of London the banks had caused a large move lower and taken profits along the way.</p>

    <p><strong> All of the examples shown use 15M candles. </strong></p>

  </Collapsible>

</div>

export default Thrustmove;
