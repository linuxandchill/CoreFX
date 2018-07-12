import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck1 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      Before demonstrating the most common setups it is important to remember that the names given to these, "CK ONE" for example, is nothing more than a label created so that you can remember the setup better. </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/011kgtzb4x" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/fe4c6v7tmk" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p> The words don't mean anything. Feel free to call them anything you'd like if it will help you remember it better.</p>

    <p>With that being said, here's what a CK ONE looks like in theory: </p>

    <img className="img-responsive" src="https://i.imgur.com/l1IkgTN.png" alt="Hi :)" />
    <br></br>

    <p>From the demonstration above, you can see that a CK ONE consists of:</p>
    <ul className="inner-list">
      <li>Two towers formation (#1, #2)</li>
      <li>Stalling candle/candles (#3)</li>
      <li>A pullback (#4)</li>
    </ul>

    <p>Take a look at some more examples below: </p>

    <img className="img-responsive" src="https://i.imgur.com/8MKTpDm.png" alt="Hi :)" />
    <br></br>

    <p>In both examples you'll notice that price crosses a manipulation level (orange line) and then we get a <a href="/candlestick-formations">two towers</a> candle formation.</p>

    <p>After that we have some stalling candles, and then a pullback.</p>

    <p>Here are some criteria to make sure the setup has the best chance of being profitable:</p>

    <ul className="inner-list">
      <li>Second tower must envelop most of first.</li>
      <li>Second candle must be at least 70% body (small/no wick).</li>
      <li>Pullback must AT LEAST return to manipulation level.</li>
    </ul>

    <img className="img-responsive" src="https://i.imgur.com/DF8vKY3.png" alt="Hi :)" />
    <br></br>
  </Collapsible>

</div>

export default Ck1;
