import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Ck6 = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[2].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[2]} />} >

    <p>The CK-SIX is a considered more of an advanced technique than a setup.</p>

    <p>The <i>Swift Jimmy</i> pullback is one that occurs <strong>immediately</strong> after a candle formation completes. Making the trade one that sets up in less than an hour.  </p>

        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/7tqvq08fll" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/gcbv1kk03g" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p> <strong>It is considered to be a very aggressive entry </strong>and should be taken only when there is confluence in levels, the timing is corrent, and overall confidence in the trade is high.  </p>

    <p>Take a look at the following examples: </p>

    <img className="img-responsive" src="https://i.imgur.com/6MzoNhL.png" alt="Hi :)" />
    <br></br>

    <img className="img-responsive" src="https://i.imgur.com/PR1o5o7.png" alt="Hi :)" />
    <br></br>

    <img className="img-responsive" src="https://i.imgur.com/5kM6bHm.png" alt="Hi :)" />
    <br></br>

    <p>In all of the charts above, the setup occurred in one hour or less. </p>
    <p>After a candle formation, you are to be looking for a pullback immediately without waiting for any stalling. </p>

    <p>Once again, this setup is quite aggressive therefore it is often best to wait for pullbacks to be deep in order to avoid getting stopped out of the market.</p>

  </Collapsible>

</div>

export default Ck6;
