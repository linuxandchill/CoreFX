import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck3 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>
      The CK-THREE is a setup comprised of several pin-bars one right after another, ideally three or more, one of which becomes the pullback.
    </p>

    <p>We learned what a pin-bar looked like in our section on <a href="/candlestick-basics">candlesticks</a>.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/eu0f697cc0" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/fjaejmxlc0" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's what a CK-THREE looks like:</p>
    <img className="img-responsive" src="https://i.imgur.com/qR8LphX.png" alt="Hi :)" />
    <br></br>

    <p>Some criteria you should be on the lookout for: </p>
    <ul className="inner-list">
      <li>At least two pin-bars in the direction of the trade.</li>
      <li>Stalling is nice but not necessary.</li>
      <li>A pullback on the fourth candle.</li>
    </ul>

    <p>Here's some more examples:</p>
    <img className="img-responsive" src="https://i.imgur.com/3fM9NBa.png" alt="Hi :)" />
    <br></br>

    <p>This is a simple setup to spot, and it's usually very effective.</p>

    <p>Still, it is VERY imporant to wait for a good pullback and <strong> NEVER TRADE A SINGLE PIN. </strong></p>

  </Collapsible>

</div>

export default Ck3;
