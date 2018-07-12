import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck2 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>
      Once again, the names given to these setups are for mnemonic purposes only. You can call them whatever you want, as long as you remember to apply the correct criteria before entering a trade based on them.
    </p>

    <p>A CK-TWO is comprised of a mid-pin formation, stalling candles, a pullback.</p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/8sln5td9xf" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/05zq1sbkty" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Here's what a CK-TWO looks like: </p>
    <img className="img-responsive" src="https://i.imgur.com/UOWM0YG.png" alt="Hi :)" />
    <br></br>

    <p>In the example above we can see the elements of a CK-TWO:</p>
    <ul className="inner-list">
      <li>Mid-pin formation (#1, #2, #3)</li>
      <li>Stalling candle/candles (#4)</li>
      <li>A pullback (#4, #4, #4)</li>
    </ul>

    <p>Here's a few more examples: </p>

    <img className="img-responsive" src="https://i.imgur.com/6hRTUat.png" alt="Hi :)" />
    <p>This is a setup with a very nice pullback. It retraced back to the original manipulation level, at this point an entry can be taken.</p>
    <br></br>
    <img className="img-responsive" src="https://i.imgur.com/3q9WWPk.png" alt="Hi :)" />
    <p>The pullback isn't that great in this example (#3, #4) but aggressive traders can take an entry this setup. </p>
    <br></br>

    <img className="img-responsive" src="https://i.imgur.com/VvbNHkm.png" alt="Hi :)" />
    <br></br>

  </Collapsible>

</div>

export default Ck2;
