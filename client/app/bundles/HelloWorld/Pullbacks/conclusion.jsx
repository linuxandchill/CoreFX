import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';

const Conclusion = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[4].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[4]} />} >

    <p>Pullbacks are a great tool to have in your arsenal. When you combine a pullback with <a href="/candlestick-formations">candle formations</a> you get what is known as a <a href="/setups">setup</a>.</p>

    <p>
      The reason why we need pullbacks is because we want to decrease our <a href="/risk-reward">risk to reward ratio</a> and by getting good entries we give ourselves the best chance to do that.
    </p>

    <p>We covered aggressive, moderate, and deep pullbacks in this section. </p>

    <p> It is recommended that beginners start by taking very conservative trades (deep pullback) because it will decrease the chance of getting burned.</p>

    <p>As mentioned previously, good traders prefer deep pullbacks because they decrease the risk of getting stopped out and they increase the chance of making a large profit. This does however, mean that you will miss out on a lot of trades. </p>

    <p>Take a look at the following example: </p>

    <img className="img-responsive" src="https://i.imgur.com/dacCEO1.png" alt="Hi :)" />
    <br></br>

    <p>In this trade the entry was taken at the (3). It could have just as likely been taken at (2) but if your stop was tight then you likely would have been stopped out. </p>

    <p>Pullback entries require patience but coupled with a good <a href="/setups">setup</a> they can give the trader a great advantage. </p>

  </Collapsible>

</div>

export default Conclusion;
