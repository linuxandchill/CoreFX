import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Pinbar = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      The pin-bar is a popular retail candle. You will see it in almost every trading course and learning resource.
    </p>

    <p>This is what it looks like: </p>
    <img className="img-responsive" src="https://www.aboutcurrency.com/images/strategies/priceaction/pin-bar-formation.gif" alt="Hi :)" />
    <br></br>

    <p>The difference is that now you know that pin-bars are a representation of something, a very powerful idea.</p>

    <p>The pin-bar depicts a market that moved in opened and quickly moved in one direction, it was then rejected and it closed near where it opened.</p>

    <p>It is a common candle to see during manipulation because it occurs during stop runs.</p>

    <p>Now when you see a pin-bar you will think, <i>"hey! there could be some manipulation happening around here". </i></p>

    <p>It's important to remember that not all pin-bars mean that a large manipulation move is occurring. In fact, it often doesn't mean that.</p>

    <p>Single pin-bars can represented just good ol' support/resistance kicking in so be careful.</p>

    <p>An important piece of advice is to <strong> never take a trade based on a single candle.</strong></p>

    <p>Pin-bars show up all over the place and you will destroy your account if you take a trade on every one. Candles must only be used in conjuction with setups and proper levels in order to ensure the highest probability possible of having a winning trade.</p>



  </Collapsible>

</div>

export default Pinbar;
