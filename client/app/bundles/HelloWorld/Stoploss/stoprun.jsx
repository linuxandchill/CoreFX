import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Stoprun = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p> Consider the following chart: </p>

    <img className="img-responsive" src="https://i.imgur.com/xFi2ZFa.png" alt="Hi :)" />
    <br></br>

    <p>We have seen this chart before, but now we understand what is really going on. </p>

    <p>Price doesn't just magically reverse when it hit that horizontal level (marked as a black line).</p>

    <p>It reversed there because <strong> that's a level that banks forced price to reach </strong>in order to trigger stop-orders.</p>

    <p>Think hard about what a stop order does. <i> It closes buy orders with a sell order, and viceversa. </i> This is exactly what the banks are looking for.</p>

    <p>If the banks can get stop orders hit, they can trigger the opposite side of their order. In the case above, the banks wanted to get short. Here are the steps they took in order to achieve that: </p>
    <ul className="inner-list">
      <li>They moved price higher with a small position.</li>
      <li>They got all indicators pointing towards a buy signal.</li>
      <li>They forced all buy-stops (buy on breakout) to be triggered.</li>
      <li>They forced all shorts to close since price was going against them.</li>
    </ul>

    <p>What did this create? <strong> A whole bunch of buy orders.</strong> Exactly what the banks needed in order to match their large short order.</p>

    <p>They sold into all those buys and this snowballed price lower.</p>

    <p>The banks made a ton of money, the retail traders got suckered.</p>


  </Collapsible>

</div>

export default Stoprun;
