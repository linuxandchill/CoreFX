import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Towers = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      The "towers" candle formation is one that you will also see often prior to manipulation moves. Once again, remember to never trade based on candle formations, instead use <a href="/setups">setups</a>, <a href="/levels">levels</a>, and <a href="/sessions">session</a> analysis to form an educated hypothesis.
    </p>

    <p>This candle formation is comprised of two candles that look like what a retail trader would call an "engulfing pattern". </p>

    <p>In this formation, price pushes into a level with the first candle. The second candle runs in the opposite direction and overshadows the first. </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/ushlft9e1h" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's what the towers formation looks like: </p>
    <img className="img-responsive" src="https://i.imgur.com/U0dD90Z.png" alt="Hi :)" />
    <br></br>

    <p>In a bullish scenario, price pushes down into a level (red candle), which triggers stop and breakout orders, and then it quickly gets sucked back up in the second candle (green).</p>

    <p><strong>This is an idea, not a candle pattern.</strong></p>

    <p>This could just as easily look like a pin-bar, remember this illustration from a previous chapter?</p>
    <img className="img-responsive" src="https://i.imgur.com/QUhjGVY.png" alt="Hi :)" />
    <br></br>

  </Collapsible>

</div>

export default Towers;
