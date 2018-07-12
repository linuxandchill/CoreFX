import React, { PropTypes } from 'react';
import Collapsible from 'react-collapsible';
import Trigger from '../utils/Trigger.jsx';
import ProgressCheck from '../utils/ProgressCheck.jsx';
import ProVideo from '../utils/ProVideo.jsx';

const SupportResistance = (props) =>
<div className="single-chapter">

  <ProgressCheck checked={props.checked} user={props.user} chapterid={props.chapters[0].uniqueid}/> 
  <Collapsible className="chapter" trigger={<Trigger chapter={props.chapters[0]} />} >

    <p>
      This one's easy, right? You have learned what it looks like before, all you have to do now is realize what support & resistance actually represent.
    </p>
        <div>
          <ProVideo is_pro_user={props.is_pro_user} embedcode='<iframe src="//fast.wistia.net/embed/iframe/pq065g2104" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>'/>
        </div>
        <br></br>

    <p>They look like areas that have been respected previously. It is for this reason that many retail traders will put their orders there, because they have been taught that price will magically reverse there. </p>

    <p>These are nothing more than areas where retail traders are stacking orders.</p>

    <p>Whenever possible, put yourself in the shoes of an institutional trader and look at these levels as if you were trying to manipulate the market.</p>

    <p>If you're not a total beginner, you know what support & resistance looks like, but just in case:</p>
    <img className="img-responsive" src="https://i.imgur.com/AwyZ6lq.png" alt="Hi :)" />
    <br></br>

    <p>In the following chart we can see how a high was set during the Asian session. This level was hit multiple times, and this tells us that <strong>lots of orders are stacked here.</strong></p>
    <img className="img-responsive" src="https://i.imgur.com/gLQZqP9.png" alt="Hi :)" />
    <br></br>

    <p>The banks know that orders are stacked there. You can see how on the red arrow they created a stop-run in order to fool breakout traders into getting long as well as to trigger stop-loss orders from all those who were short.</p>

    <p>To many who are accustomed to retail chart patterns, this may look like a <a href="https://www.investopedia.com/terms/t/tripletop.asp"><i>"triple top"</i></a> and in a sense it is exactly that. But it's important to remember that price didn't reverse here because of the chart pattern, it reversed because that's what the big players wanted.</p>

  </Collapsible>

</div>

export default SupportResistance;
