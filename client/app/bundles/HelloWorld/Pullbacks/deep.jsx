import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Deep = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[3].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[3]} />} >

    <p>
      The deep pullback is a very special weapon that every trader should master. Just like anything in trading, this is easier said than done.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/avheafzvhk" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>As you might have already guessed, an entry taken on a deep pullback is one in which price moves beyong the highest/lowest point in the candle formation. Here's what it looks like: </p>

    <img className="img-responsive" src="https://i.imgur.com/EsAqYqY.png" alt="Hi :)" />
    <br></br>

    <p>In the example above the following occurred: </p>
    <ul className="inner-list">
      <li>Price moved into a level (blue line)</li>
      <li>A candle formation was created (1,2,3)</li>
      <li>There was a deep pullback to a higher level (4, orange line)</li>
    </ul>

    <p><strong> Why is this important? </strong></p>

    <p>Have you ever been stopped out of a trade only to see it quickly reverse in the opposite direction? This likely occurred because you didn't wait for a deep enough pullback.</p>
  </Collapsible>

</div>

export default Deep;
