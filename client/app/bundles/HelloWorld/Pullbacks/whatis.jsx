import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whatis = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      A pullback is defined as <i>"the candle/candles that move against our formation that allow us to get good RR".</i>  RR refers to <a href="risk-reward">risk/reward</a> and we will discuss it in an upcoming section. </p>

    <p>You can think of it as a "retracement", or a move back to a level that we were previously considering as a possible manipulation point.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/hhiyxc31y3" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Trades should alway be entered on a pullback. It will seem counter-intuitive at first, and that's because it is, but that's a good thing.</p>

    <p>The pullback is VERY powerful. Here's what it looks like: </p>

    <img className="img-responsive" src="https://i.imgur.com/rBeG33r.png" alt="Hi :)" />
    <br></br>

    <p>When we discuss <a href="/setups">setups </a>you will see why the pullback is so important. A setup is comprised of a candle formation and a pullback.</p>

  </Collapsible>

</div>

export default Whatis;
