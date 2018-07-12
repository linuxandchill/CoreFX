import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Bankdeception = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      The banks aren't really lying to you. They just <strong> don't have a choice.</strong>
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/4k2u5hnt7d" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>It is their market, they need to make money.</p>

    <p>In order to open their large positions they create buy and sell signals that they know the retail trader will follow.</p>

    <p>Take this example as an illustration: </p>

      <p>
      <i> Imagine the banks are trying to get long. They must create a short to get the retail traders selling. They will move the market lower so that the indicators, the EA's, the patterns, and the breakout strategies all create sell signals.</i>
    </p>
    <p> <strong> Then they BUY into that large supply of sells </strong> that was just created without ruining their position or causing the market to jump. </p>
    <img className="img-responsive" src="https://i.imgur.com/VCT3kA2.png" alt="Hi :)" />

    <p>In the example above, the banks sold a smaller position at the beginning of the London session in order to get everyone short. </p>

    <p>At that point they had enough liquidity for their real position and initiated a buy.</p>

    <p>You can clearly see how price spiked higher immediately after.</p>

  </Collapsible>

</div>

export default Bankdeception;
