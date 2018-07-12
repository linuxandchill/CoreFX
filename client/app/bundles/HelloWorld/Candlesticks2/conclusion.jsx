import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Conclusion= (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user}  chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>As mentioned before, you will see pin-bars and candle formations everywhere. But you must remember that the candlestick formation serves no purpose if they do not make a break of a significant level, demonstrating manipulation. </p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/wilc3b9aym" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
    <p>Formations often look different than what you are seeing in this lesson, take a look at this one: </p>

    <img className="img-responsive" src="https://i.imgur.com/2uwD2AH.png" alt="Hi :)" />
    <br></br>

    <p>
      <strong> Never, ever, ever trade a single candle & never trade without some context.</strong>
    </p>

    <p>By context we mean that you must have a proper <a href="/setups">setup</a>, a good <a href="/levels">level</a>, and be in the right<a href="/sessions">session</a> before taking a trade. </p>

    <p>Finally, remember that it does not matter what the formation is, as long as there is evidence of manipulation.</p>
  </Collapsible>

</div>

export default Conclusion;
