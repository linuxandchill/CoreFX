import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Interpreting = (props) => {
  return(
    <div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[2].uniqueid}/> 
      <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

        <p>
          Perhaps the most important thing that candlesticks offer us is the ability to <strong>interpret</strong> what is going on behind the scenes in the market.
        </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/8uc4hy4gaw" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

        <p>We know that banks are manipulating everything about the market, the chart & candlesticks are no exception. <strong>It is important not to take your charts at face value.</strong> </p>

        <p>Consider the following example: </p>

        <img className="img-responsive" src="https://i.imgur.com/QUhjGVY.png" alt="Hi :)" />
        <br></br>

        <p>We can see from the illustration that it doesn't matter what the chart is literally showing. What matters is what the candles are telling us. </p>

        <p>Some traders look at the candles on the left and think one thing. But the same trader will think of something different when they see the candle on the right. <strong> This is why popular candlestick patterns are useless. </strong> </p>
        <p>Every moment in the forex market is unique. The trader must decipher what is really happening and not rely on some pattern that was created by some japanese rice trader hundreds of years ago.</p>

      </Collapsible>

    </div>


    )
}
export default Interpreting;
