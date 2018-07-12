import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Overtrading = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      Over trading causes blown accounts. Period.
    </p>

    <p>This is what happens when you take too many trades:</p>

    <img className="img-responsive" src="https://media.giphy.com/media/jmBAsLYrKCp3i/giphy.gif" alt="Hi :)" />
    <br></br>
    <p>One of the main issue many traders have is that they feel the need to be in the market at all times. They feel that if they aren't participating that they've somehow missed out on something, when in reality nothing could be further from the truth.</p>

    <p>What you can do to prevent this from happening is to only give yourself the option to take a certain number of trades every week. After you've taken those trades you are done, you are not allowed to take any more. <strong>This will teach you to be more disciplined and selective with setups</strong>.</p>

    <p><strong>DON'T TAKE TOO MANY TRADES</strong>. The brokers and the banks have a greater chance of winning whenever you take a trade so make sure you limit the amount you take. </p>

  </Collapsible>

</div>

export default Overtrading;
