import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Shakeout = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      A key element of the shake out phase has already been demonstrated in the <a href="/stop-loss">Stop orders</a> chapter when we discussed <a href="/stop-loss">stop runs</a>.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/k88n3n9l3p" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>During this phase, the market will push through a significant level in order to trigger stop orders. Depending on the direction of the move, the stop orders will trigger entries for breakout traders, and stop out those who have reached their threshhold for pain.</p>
    <img className="img-responsive" src="https://i.imgur.com/ky61IIn.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>

    <p><strong> All of the examples shown use 15M candles. </strong></p>
  </Collapsible>

</div>

export default Shakeout;
