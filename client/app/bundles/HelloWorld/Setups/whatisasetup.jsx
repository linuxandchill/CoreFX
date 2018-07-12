import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const Whatisasetup = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >
    <img className="img-responsive" src="https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif" alt="Hi :)" />
    <br></br>

    <p>
      A setup is nothing more than the combination of a <a href="/candlestick-formations" target="_blank">candle formation</a> and a <a href="/pullbacks" target="_blank">pullback</a>. It is absolutely essential that both of these elements be present before entering a trade.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/591wqauaft" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>Because setups involve different elements, it is very important to remember that <strong>setups never look exactly the same.</strong></p>

    <p>Over time your mind will learn to recognize setups and it is possible that you will see slight variations of what is essentially the same thing, but it's never really the same. </p>

    <p>In order for one setup to be exactly the same as another that would mean that every factor is the exact same. It must be the same time, market conditions must be the same, and the number of people trading at that exact time would have to be the same. This is impossible. Well, maybe not impossible, but VERY unlikely. </p>

    <p>One final thing to remember before looking at some basic setups is that although the way they look may vary,<strong> it's important that you don't let your setups get sloppy. </strong>Create some rules and apply them whenever you are thinking about entering a trade.</p>

  </Collapsible>

</div>

export default Whatisasetup;
