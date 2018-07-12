import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck4 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      The CK-FOUR is a setup made up of 2 candles with the EXACT same high/low, coupled with some stalling and a pullback.
    </p>

    <p>An ideal CK-FOUR looks like this:</p>

    <img className="img-responsive" src="https://i.imgur.com/jgyn4PK.png" alt="Hi :)" />

    <p>The following criteria must be met:</p>
    <ul className="inner-list">
      <li>Two candles(pins,towers) with same high/low.</li>
      <li>Stalling on third candle.</li>
      <li>Pullback on fourth or fifth candle.</li>
    </ul>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/7rt7b0f3uk" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/s96ir9hv40" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's a few more examples:</p>

    <img className="img-responsive" src="https://i.imgur.com/QiiroMe.png" alt="Hi :)" />
    <br></br>
    <img className="img-responsive" src="https://i.imgur.com/SW9YJe0.png" alt="Hi :)" />
    <br></br>

  </Collapsible>

</div>

export default Ck4;
