import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Moderate = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      A moderate entry is one in which the pullback returns to the highest point of the candle formation. Here's what it looks like:
    </p>

    <p>These are considered safer than aggressive trades, and more risky than deep pullback trades.</p>

    <img className="img-responsive" src="https://i.imgur.com/8nggrws.png" alt="Hi :)" />
    <br></br>

    <p>In the case above you will notice that price crossed through the manipulation level (orange line) and left quite a large wick on that candle. </p>

    <p>The moderate entry occurred when price returned to the high of that candle. </p>
  </Collapsible>

</div>

export default Moderate;
