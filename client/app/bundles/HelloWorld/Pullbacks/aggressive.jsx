import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Aggressive = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      Aggressive trades are those taken when the pullback comes back to the original manipulation level. Here's what that looks like:
    </p>
    <img className="img-responsive" src="https://i.imgur.com/az1lfTN.png" alt="Hi :)" />
    <br></br>

    <p>In the case above, price crossed a pre-determined level (orange line). It was at this point that we were looking for candle formations. Once we saw candle formations we should be looking for a pullback in order to complete our <a href="/setups">setup</a>.</p>

    <p>When price returned to the orange line, we can take our entry.</p>

    <p>Professional traders may take these types of trades if they have a feel for a certain pair. However, it is considered a bit more risky since price could continue moving against you in search of another manipulation level.</p>

    <p>Patience will be discussed in the <a href="psychology">psychology</a> section but it is important to note that one key trait of a great trader is the ability to wait. Aggressive entries are taken by traders who simply cannot wait and see if price will move deeper. </p>

  </Collapsible>

</div>

export default Aggressive;
