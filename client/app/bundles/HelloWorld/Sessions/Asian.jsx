import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Asian = (props) =>
<div className="single-chapter">

      <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[1].uniqueid}/> 

  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[1]} />} >

    <p>
      For the EUR/USD & GBP/USD the Asian session most usually serves as the <a href="/manipulation-phases"><i>compression/accumulation</i></a> phase. It is during this session that you'll see a "range" in which price seems like it is just bouncing around.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/ib09p3k2kj" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>This session opens at 5pm EST and closes at 3am EST. This may sometimes vary by an hour depending on daylight savings or time changes but as a rule of thumb those are the times it is open.</p>

    <p>Take a look at this chart:</p>
    <img className="img-responsive" src="https://i.imgur.com/Ui4i1Jh.png" alt="Hi :)" />
    <p className="text-center">EUR/USD</p>
    <br></br>
    <p>Remember, it is at this time that institutions are building their positions by bouncing traders up and down the range.</p>

    <p>It is difficult to catch big moves on pairs wiht EUR, USD, and GBP during this time.</p>

    <p>
      On the other hand, pairs with JPY, NZD, and AUD are more liquid and have bigger moves during this time.</p>

    <p>If you are trading EUR or GBP pairs you should be looking out for position building.</p>

  </Collapsible>

</div>

export default Asian;
